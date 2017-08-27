# vue-demo 实现CRUD功能

> vue练习
  > 每一个单文件组件.vue通常都是由三部分构成template、style、script（为什么说通常，因为也可以只有模板template，不写任何样式和功能，但大多数组件都会有自己的样式和功能）。其中style有2个点，第一，可以引用外部样式，第二，作用域scoped。
  > 单文件组件的引用，需要先在script中用import引用（同时命名）格式为

            import [命名] from [相对路径]

           再用components:{ [命名] }局部注册

          最后在模板中使用，注意命名格式。如果是驼峰HeadNav或headNav，使用时就是<head-nav>
  > 多使用vue指令，常用的有v-show，v-if，v-on，v-bind，v-model

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
