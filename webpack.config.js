var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx',
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            applicationStyles: 'app/styles/app.scss',
            Nav: 'app/components/Nav.jsx',
            About: 'app/components/About.jsx',
            Home: 'app/components/Home.jsx',
            Portfolio: 'app/components/Portfolio.jsx',
            ContactForm: 'app/components/ContactForm.jsx',
            Contact: 'app/components/Contact.jsx',
            Modal: 'app/components/Contact.jsx',
            ThankYou: 'app/components/ThankYou.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(?:png|jpg|svg)$/,
                loader: 'url-loader',
                query: {
                    // Inline images smaller than 10kb as data URIs
                    limit: 350000
                }
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};