module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'stage-0', 'react' ] }
      }
    ]
  },
  devServer: {
   contentBase: "./public",
   port: 8088,
   colors: true,
   historyApiFallback: true,
   inline: true
 }
};
