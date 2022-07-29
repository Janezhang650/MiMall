module.exports = {
  devServer: {
    host: 'localhost',
    port: 5000,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrit: {
          '/api': ''
        }
      }
    }
  }
}