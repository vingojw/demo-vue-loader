var webpack = require('webpack');

module.exports = {
    entry: ["./src/main.js"],
    output: {
        path: "./build",
        /*
                publicPath路径就是你发布之后的路径，
                比如你想发布到你站点的/util/vue/build 目录下, 那么设置
                publicPath: "/util/vue/build/",
                此字段配置如果不正确，发布后资源定位不对，比如：css里面的精灵图路径错误
         */
        publicPath: "/build/",
        filename: "build.js"
    },
    module: {
      loaders: [
        {
          test: /\.vue$/, // a regex for matching all files that end in `.vue`
          loader: 'vue'   // loader to use for matched files
        }
      ]
    }
};
