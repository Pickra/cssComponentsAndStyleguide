const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const svgs = {
    test: /\.svg$/,
    use: [
        { loader: "svg-sprite-loader" },
        { loader: "svgo-loader" }
    ]
};

const browsers = [ "Edge >= 1", "ie >= 11", "last 2 versions" ];

const styles = isDev => {
    return {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: { sourceMap: isDev }
            },
            {
                loader: "postcss-loader",
                options: {
                    sourceMap: isDev,
                    plugins: () => [
                        autoprefixer({ browsers: browsers })
                    ]
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    outputStyle: isDev ? "expanded" : "compressed",
                    sourceMap: isDev
                }
            }
        ]
    }
};

module.exports = (env = {dev: false}) => {
    const isDev = env.dev;

    return {
        entry: {
            "css-components": "./src/entry.js",
            "../styleguide/kss-styles": "./styleguide-builder/kss.scss"
        },
        mode: isDev ? "development" : "production",
        output: {
            path: path.join(__dirname, "dist"),
            filename: "[name].js"
        },
        module: {
            rules: [svgs, styles(isDev)]
        },
        plugins: [
            new MiniCssExtractPlugin({ filename: "[name].css" }),
            new StyleLintPlugin({ configFile: "stylelint.config.js" })
        ]
    };
};
