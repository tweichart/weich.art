let mix = require('laravel-mix')
let clean = require('clean-webpack-plugin')
let path = require('path')

mix.webpackConfig({
    plugins: [
        new clean(['public/js', 'public/css', 'public/fonts', 'public/images'], {verbose: false}),
    ],
})
mix.setPublicPath(path.normalize('./public'))

mix.scripts([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/countup.js/countUp.js',
    'node_modules/popper.js/dist/umd/popper.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/bootstrap-material-design/dist/js/bootstrap-material-design.js',
], 'public/js/vendor.js')
mix.sass('assets/sass/app.scss', 'public/css/app.css')
mix.copy('controller/pages/*', 'public/')
mix.copy('assets/images/favicon.ico', 'public/favicon.ico')
mix.js('assets/js/app.js', 'public/js')
