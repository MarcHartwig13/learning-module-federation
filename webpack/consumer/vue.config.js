const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
  configureWebpack:{
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'webpack_consumer',
        filename: 'remoteEntry.js',
        remotes: {
          webpack_provider: 'webpack_provider@http://localhost:8080/remoteEntry.js',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ]
  },
  devServer:{
    port: 8081,
  },
  pages: {
    index: {
      entry: './src/main.js',
    },
  },
  publicPath: 'auto',
  transpileDependencies: true
})
