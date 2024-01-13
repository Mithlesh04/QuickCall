const path = require("path")

module.exports = {
    mode: "development", // development | production,
    entry: "./src/index.ts",
    output: {
        // libraryTarget: 'umd',
        libraryTarget: "commonjs",
        // libraryTarget: "umd",
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
}