var webpack = require('webpack');
var path = require('path');
var bowerPath = __dirname + '/vendor/bower_components';

var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');

resolveBowerPath = function(componentPath) {
  return path.join(bowerPath, componentPath);
};

// setup environmental variables
if (process.env.NODE_ENV == 'production') {
  var mainJS = './src/main'
  var outputPath = path.join(__dirname, 'dist');
  var pluginsArray = [
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: true,
        warnings: false
    })
  ];
} else {
  var mainJS = ['webpack/hot/dev-server', 'main']
  var outputPath = path.join(__dirname, '');
  var pluginsArray = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];
}

module.exports = {
  entry: {
    main: mainJS
  },

  output: {
    path: outputPath,
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },

  module: {
    loaders: [
      {
        test: /\.yml$/,
        loader: 'yaml-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss-loader!sass'
      },
      {
        test: /\.jpg$/,
        loader: 'file'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/,
        loader: 'imports?this=>window!exports?window.Modernizr'
      },
      {
        test: /\.jsx?$/,
        include: /src/,
        loader: 'babel-loader'
      }
    ]
  },
  noParse: [bowerPath, 'node_modules'],
  resolve: {
    alias: {
      modernizr: resolveBowerPath('modernizr/modernizr.js'),
      lodash: resolveBowerPath('lodash/lodash.js'),
      bootstrap_sass: resolveBowerPath('bootstrap-sass/assets/stylesheets/_bootstrap.scss')
    },
    extensions: ['', '.js', '.scss', 'hbs', 'tmpl', 'svg', 'woff', 'eot', 'svg', 'png'],
    modulesDirectories: ['src', 'node_modules', 'web_modules', bowerPath]
  },

  postcss: [autoprefixer({ browsers: '> 5%, Last 2 version, iOS 7' })],

  plugins: pluginsArray
};
