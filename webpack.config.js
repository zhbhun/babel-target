const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const entries = [
  'chrome60',
  'chrome61',
  'chrome78',
  'ios9',
  'ios10',
  'ios11',
  'ios12',
  'ios13',
];

module.exports = entries.map((item) => ({
  mode: 'production',
  devtool: 'sourcemap',
  entry: path.resolve(__dirname, 'src', item, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist', item),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'analyzer.html',
      openAnalyzer: false,
      defaultSizes: 'parsed',
    }),
  ],
}));
