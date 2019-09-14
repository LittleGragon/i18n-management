const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './client/app.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'static'),
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'client'),
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components'),
      ],
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: [
              'transform-decorators-legacy',
              'transform-class-properties'
            ],
          },
        },
      ],
    }, {
      test: /.css?$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }, {
      test: /.pug/,
      use: [{
        loader: 'pug-loader',
      }]
    }],
  },
  // plugins: [new HtmlPlugin({
  //   template: path.resolve(__dirname, 'templates/index.pug'),
  //   filename: 'templates/index.html'
  // })],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.less', '.ts', '.tsx'],
    alias: {
      $containers: path.resolve(__dirname, './clien/containers'),
      $components: path.resolve(__dirname, './client/components'),
    }
  },
  devtool: 'source-map',
}

// module.exports = {
//   entry: './client/app.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public/local'),
//   },
//   module: {
//     rules:[{
//       test: /.jsx?$/,
//       include: path.resolve(__dirname, 'client'),
//       use:[{
//         loader: 'babel-loader',
//         options: [
//           'es2015',
//           'react',
//           'stage-0'
//         ]
//       }, {
//         loader: 'eslint-loader'
//       }]
//     }, {
//       test: /.pug/,
//       use: [{
//         loader: 'pug-loader',
//       }]
//     }]
//   },
//   plugins: [new HtmlPlugin({
//     template: path.resolve(__dirname, 'templetes/index.pug')
//   })]
// }