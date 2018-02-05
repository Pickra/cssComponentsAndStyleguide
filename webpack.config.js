const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const KssWebpackPlugin = require('kss-webpack-plugin');

const svgs = {
    test: /\.svg$/,
    use: [
        { loader: "svg-sprite-loader" },
        { loader: "svgo-loader" }
    ]
};

const styles = {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
        use: [
            'css-loader',
            {
                loader: 'sass-loader',
                options: { outputStyle: "compressed" }
            }
        ]
    })
};

var KssConfig = {
    source: "./src",
    css: ["../build/styles.css"],
    js: ["../build/bundle.js"]
};

module.exports = env => {
    return {
        entry: "./src/entry.js",
        output: {
            path: path.join(__dirname, "build"),
            filename: "bundle.js"
        },
        module: {
            rules: [svgs, styles]
        },
        plugins: [
            new ExtractTextPlugin("styles.css"),
            new KssWebpackPlugin(KssConfig)
        ]
    };
};