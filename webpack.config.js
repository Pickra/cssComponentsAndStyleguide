const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
                        require("autoprefixer")({ browsers: browsers })
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
        entry: "./src/entry.js",
        output: {
            path: path.join(__dirname, "build"),
            filename: "bundle.js"
        },
        module: {
            rules: [svgs, styles]
        },
        plugins: [
            new ExtractTextPlugin("styles.css")
        ]
    };
};