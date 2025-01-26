const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { src, entry, build, public, env } = require('./paths');

module.exports = {
  entry,
  output: {
    path: build,
    filename: 'scripts/[name].[contenthash].js',
    chunkFilename: 'scripts/[name].[contenthash].chunk.js',
    publicPath: '/',
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
    extensionAlias: {
      '.js': ['.js', '.ts'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts']
    },
    alias: {
      '@': src
    }
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[contenthash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(public, 'index.html'),
      favicon: path.join(public, 'favicon.png')
    }),
    new Dotenv({
      path: env,
      systemvars: true, // Load system environment variables too
      safe: true, // Load .env.example for validation
    })
  ]
};
