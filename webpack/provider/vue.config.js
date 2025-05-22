const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');

module.exports = defineConfig({
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
  configureWebpack:{
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'webpack_provider',
        filename: 'remoteEntry.js',
        exposes: {
          // Set the modules to be exported, default export as '.'
          './ProviderComponent.vue': './src/components/ProviderComponent.vue',
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
    port: 8080,
  },
  pages: {
    index: {
      entry: './src/main.js',
    },
  },
  publicPath: 'auto',
  transpileDependencies: true
})
