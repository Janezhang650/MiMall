module.exports = {
  devServer: {
    host: 'localhost',
    port: 5000,
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/631dce6bd82b48b299169771ae082531/api',
        changeOrigin: true,
        pathRewrit: {
          '/api': ''
        }
      }
    }
  }
}