const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    assetsDir: 'assets',
    productionSourceMap: false,
    //  可以模仿线上资源地址，如：process.env.NODE_ENV === 'development' ? '/biweb/' : '/biweb/',
    publicPath: './',
    css: {
        loaderOptions: {
            sass: {
                // 1、在 package.json 中修改 sass-loader 的版本： "sass-loader": "^7.1.0"
                // 2、安装依赖：$ cnpm i
                // https://blog.csdn.net/liwan09/article/details/106981239
                data: `
                    @import "~@/scss/functions.scss";
                `
            }
        }
    },
    configureWebpack: {
        // 路径配置
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            // 别名配置
            alias: {
                // @ is an alias to /src
                '@': resolve('src'),
            },
        },
        // 插件配置
        plugins: [],
        // webpack-load配置
        module: {
            rules: [],
        },
    },
    // transpileDependencies:[
    //     /element-ui/
    // ],
    // webpack 链式扩展
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'development') {
            config.devtool('source-map')
        }

        /* 测试扩展 ts-loader，需要结合 tsconfig.json 使用哦
        config.module
               .rule('ts')
               .test(/\.tsx?$/)
               .use('ts-loader')
               .loader('ts-loader')
               .end()
        */

        /*
        config.module
              .rule('svg')
              .exclude.add(resolve('src/icons'))
              .end();
    
        config.module
              .rule('icons')
              .test(/\.svg$/)
              .include.add(resolve('src/icons'))
              .end()
              .use('svg-sprite-loader')
              .loader('svg-sprite-loader')
              .options({
                symbolId: 'icon-[name]'
              });
        */

        /* 别名和输出名
        config.resolve.alias
             .set('@', resolve('src'))
             .set('@c', resolve('src/components'))
        config.output.filename('[name].[hash].js').end();
         */
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://219.135.182.2:8199',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/',
                }
            },
        },
    },
}