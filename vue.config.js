// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'default',
  assetsDir: 'assets',
  filenameHashing: false,
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: config => {
    return {
      // plugins: [new MonacoWebpackPlugin()]
      plugins: [new WebpackBar()]
    }
  },
  devServer: {
    disableHostCheck: true,
    port: 80,
    https: false,
    host: '0.0.0.0',
    open: true
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
          }
        },
        javascriptEnabled: true
      }
    }
  }
}
