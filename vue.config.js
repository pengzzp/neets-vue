module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://neets.cc',
        changeOrigin: true
      },
      // '/v2': {
      //   target: 'http://localhost:9000',
      //   changeOrigin: true
      // }
    }
  }
}
