var webpack = require('webpack');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

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
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                SENDGRID_API_KEY: JSON.stringify(process.env.SENDGRID_API_KEY)
            }
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
            Modal: 'app/components/Contact.jsx'
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
                    limit: 10000
                }
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};