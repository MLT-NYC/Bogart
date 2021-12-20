const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/app.jsx',
    output: {
        path: path.join(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react'],
                        plugins: [
                            ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
                            ["@babel/plugin-proposal-private-methods", { "loose": true }]
                        ]
                    }
                },
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader'
                }]
            }
        ]
    },
    devtool: 'eval-source-map'
};