// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: {
//     app: './src/js/index.js',
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//         ],
//       },
//       {
//         test: /\.htm$/,
//         include: path.resolve(__dirname, 'src/js/components'),
//         use: {
//           loader: 'html-loader',
//         },
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: '[name]/[name].css',
//     }),
//     new HtmlWebpackPlugin({
//       filename: (chunkData) => {
//         const componentName = chunkData.chunk.name;
//         return `./dist/${componentName}/${componentName}.htm`;
//       },
//       template: './src/js/components/[name]/[name].htm',
//     }),
//   ],
// };


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    button: './src/js/components/button/button.js',
    jhoonsa_container: './src/js/components/jhoonsa-container/jhoonsa-container.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]/[name].css' }),
    new HtmlWebpackPlugin({
      template: './src/js/components/button/button.html',
      filename: 'button/button.html',
      chunks: ['glass_naruto'],
    }),
    new HtmlWebpackPlugin({
      template: './src/js/components/jhoonsa-container/jhoonsa-container.html',
      filename: 'jhoonsa_container/jhoonsa_ontainer.html',
      chunks: ['jhoonsa-container'],
    }),
  ],
};


