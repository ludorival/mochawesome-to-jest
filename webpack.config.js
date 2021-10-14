module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'cheap-module-source-map',
  watchOptions: {
    aggregateTimeout: 10,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-typescript'],
              ['@babel/preset-react'],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.cjs'],
    alias: {
      '@storybook/addon-jest': require.resolve('./src/mocks/addon-jest'),
    },
  },
}
