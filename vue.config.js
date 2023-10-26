const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer:{
    proxy:{
      '/sso':{
        target:'http://10.17.100.5:8080/sso',
        changeOrigin:true,
        pathRewrite:{
          '^/sso':''
        }
      }
    }
  } 
}

