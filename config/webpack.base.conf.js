const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist/'),
  assets: 'assets/' 
}

const PAGES_DIR = `${PATHS.src}/pug/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
  externals: {
    paths: PATHS
  },

  context: path.resolve(__dirname, '../src'),

  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
  },

  module: {
    rules: [
      { 
        test: /\.pug$/, 
        loader: 'pug-loader' 
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: `${PATHS.assets}img`,
        },
        exclude: /fonts/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              url: false,
            }
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'resolve-url-loader',
            options:{
              engine:'rework',
            }
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../src')
    }
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new copyWebpackPlugin([
      { from: `${PATHS.src}/img/`, to: `${PATHS.assets}img/` },
      { from: `${PATHS.src}/fonts/`, to: `${PATHS.assets}fonts/` },
      { from: `${PATHS.src}/static/`, to: '' },
    ]),

    // Automatic creation any html pages
    ...PAGES.map(page => new htmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
  ],
};