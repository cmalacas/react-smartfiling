const mix = require('laravel-mix');
const webpack = require("webpack");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/index.js', 'assets/js').react()
   .js('src/ein.js', 'assets/js').react()
   .js('src/edit-ein.js', 'assets/js').react()
   .js('src/edit-stripe.js', 'assets/js').react()
   .js('src/stripe.js', 'assets/js').react()
   .js('src/submission.js', 'assets/js').react()
   .sass('src/App.scss', 'assets/css')
    .webpackConfig({
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
        ],        
    });
