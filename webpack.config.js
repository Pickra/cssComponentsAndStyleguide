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

const styles = {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
        use: [
            'css-loader',
            {
                loader: "postcss-loader",
                options: {
                    plugins: () => [
                        autoprefixer({ browsers: browsers })
                    ]
                }
            },
            {
                loader: 'sass-loader',
                options: { outputStyle: "compressed" }
            }
        ]
    })
};

module.exports = env => {
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
            rules: [svgs, styles]
        },
        plugins: [
            new ExtractTextPlugin("[name].css"),
            new StyleLintPlugin({ configFile: "stylelint.config.js" })
        ]
    };
};
