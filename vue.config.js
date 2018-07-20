module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://neets.cc',
        changeOrigin: true
      },
      'sms':{
        target: 'https://uc.neets.cc',
        changeOrigin: true
      },
      'users':{
        target: 'https://uc.neets.cc',
        changeOrigin: true
      }
    }
  }
}
