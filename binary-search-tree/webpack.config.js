const path = require('path')

module.exports = {
    entry: path.resolve('demo', 'src', 'index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve('demo', 'dist'),
        filename: 'bundle.js'
    }
};
