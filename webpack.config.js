const path = require('path')
const babelConfig = require('./babel.config')

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
        ],
      },
      // https://jaketrent.com/post/load-both-css-and-css-modules-webpack/
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js',
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|webp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        use: 'file-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
}

module.exports = config
