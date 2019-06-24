// webpack 底层是 node.js 所有 node 语法都支持
const path = require('path')
//添加生成内存 html页面插件
const htmlWebpackPlugin = require('html-webpack-plugin')
// 添加 vueLoaderPlugin 插件
const vueLoaderPlugin = require('vue-loader/lib/plugin')

// webpack 配置对象
module.exports = {
    //配置热更新
    entry: path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),//输出文件的位置
        filename:'bundle.js'//输出文件的名称
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定需要生成 内存html 的页面路径
            filename:'index.html' //生成 内存html页面 的名称
        }),
        new vueLoaderPlugin()
    ],
    module:{//配置第三方 加载器
        rules:[//匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//配置处理 .css类型文件的 加载器 npm i style-loader css-loader -D
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置处理 .less类型文件的 加载器 npm i less-loader less -D
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//配置处理 .scss类型文件的 加载器 cnpm i sass-loader node-sass -D
            {test:/\.(jpg|png|gif|bmg|jpeg)$/,use:'url-loader?limit=false&name=[hash:8]-[name].[ext]'},//配置处理 .图片类型文件的 加载器 npm i url-loader file-loader -D
            // limit:的作用表是 图片是否转成 图片base64字符串 ，默认是会转
            // name: url-loader处理器 ，默认会重新生成一个名字，[name].[ext] 的作用是取原图片的名字  [hash:8]- 表示 取8我的 hash值 
            //  [hash:8]-[name].[ext] ：取   8位hash值-原图片名字
            {test:/\.(ttf|woff|woff2|eot|svg)$/,use:'url-loader'},//配置处理 字体文件的 加载器 
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置处理 高级ES6语法 的加载器 ，需要排除 node_modules 目录，因为该目录中有很多第三方 js 文件，不需要我们处理
            {test:/\.vue$/,use:'vue-loader'}// 配置处理 .vue 类型的文件  cnpm i vue-loader vue-template-compiler -D
        ]
    },
    resolve:{
        alias:{// 修改 vue 被导入时候的包的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}