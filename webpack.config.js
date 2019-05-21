const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      alias: {
        actions: path.resolve(__dirname, 'src/actions/'),
        components: path.resolve(__dirname, 'src/components/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        reducers: path.resolve(__dirname, 'src/reducers/'),
        router: path.resolve(__dirname, 'src/router/'),
        services: path.resolve(__dirname, 'src/services/'),
        store: path.resolve(__dirname, 'src/store/'),
        styles: path.resolve(__dirname, 'src/styles/'),
      },
      extensions: ['.js', '.jsx', '.scss', '.png', '.jpg', '.gif', '.jpeg']
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': process.env.NODE_ENV
      })
    ],
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
