const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
            use: [
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
        })
    }
};

module.exports = (env = {dev: false}) => {
    return {
        entry: {
            "build": "./src/entry.js",
            "kss": "./styleguide/kss.scss"
        },
        output: {
            path: path.join(__dirname, "build"),
            filename: "[name].js"
        },
        module: {
            rules: [svgs, styles(env.dev)]
        },
        plugins: [
            new ExtractTextPlugin("[name].css"),
            new StyleLintPlugin({ configFile: "stylelint.config.js" })
        ]
    };
};
