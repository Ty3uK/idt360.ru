var path = require('path'),
    webpack = require('webpack'),
    extractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker');

var BASE_PATH = path.join(__dirname, '../'),
    APP_FOLDER = path.join(BASE_PATH, 'app'),
    DIST_FOLDER = path.join(BASE_PATH, 'dist');


module.exports = {
    entry: [
        path.join(APP_FOLDER, 'app.scss'),
        path.join(APP_FOLDER, 'app.es6.jsx')
    ],
    output: {
        filename: "bundle.js",
        path: DIST_FOLDER,
        publicPath: '/'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx!babel', exclude: '/node_modules/'},
            {test: /\.scss$/, loader: extractTextWebpackPlugin.extract('style', 'css!postcss!sass')},
            {test: /\.css$/, loader: extractTextWebpackPlugin.extract('style', 'css!postcss')},
            {test: /\.(woff(2)?|ttf|eot|svg|otf)(.+)?$/, loader: 'file?name=fonts/[name].[ext]'},
            {test: /\.(png|jpg)$/, loader: 'file?name=assets/[name].[ext]'}
        ]
    },
    postcss: function() {
        return [
            autoprefixer({browsers: ["last 2 version", "ie 10"]}),
            mqpacker
        ]
    },
    plugins: [
        new extractTextWebpackPlugin('bundle.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        root: [
            BASE_PATH
        ],
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'src'
        ],
        extensions: [
            '',
            '.js',
            '.jsx',
            '.es6',
            '.scss'
        ]
    }
};