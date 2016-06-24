module.exports = {
  // start
  entry: './src/js/index.js',

  // generate the output js file 
  output: {
    publicPath: 'http://localhost:8080/',
    filename: 'build/bundle.js'
  },

  // generate source map
  devtool: 'source-map',

  module: {
    loaders: [

      // transforms JSX and ES6(ES2015) into normal js
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },

      // load CSS
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      },

      // load images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url',
          'img'
        ]
      }
    ]
  }
};
