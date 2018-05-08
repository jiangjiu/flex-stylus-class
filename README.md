# flex-stylus-class
🍓classes of flex-stylus

使用stylus预处理器封装的flex布局类~
只提供源码  业务项目自行构建
## 目标
- 简化常用布局✂️
- 解决一次又一次的布局兼容性问题😤ios >= 8 android >= 4.3

 ![](http://ov35lvdq9.bkt.clouddn.com/15257694229621.jpg)


## 安装

```js
    npm i flex-stylus-class --save-dev
```

or

```js

    yarn add flex-stylus-class
```

## 使用

```js
    // @file index.styl
    @import '~flex-stylus-class'
```

or

```js
    // @file index.js
    import 'flex-stylus-class'
```
## 建议配置环境
- 建议使用webpack4构建工具
- 建议使用`postcss-loader + autoprefixer + cssnano`进行样式的兼容性、代码压缩处理


#### 安装环境依赖
```js
// install
yarn add postcss-loader autoprefixer cssnano
```
#### 配置文件
```js
// @file postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default'
        }),
    ]
};
```

```js
// @file package.json browserslist
...,
"browserslist": [
    "iOS >= 8",
    "Android >= 4.3"
  ]
```
**特别注意**：`browserslist`中一定要写`ios >= 8`, 否则iphone5s (ios8.3）会出现布局错乱的兼容性问题。

## Demos
#### 业务styl
```css
body *
    box-sizing border-box

.item
    height 50px
    width 50px
    background-color #E0E0E0
    margin 10px

section
    border 1px solid #424242

.section-200
    height 200px
    width 200px

```
#### 普通flex布局
```js
<section class=" c__flex">
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
</section>
```
![](http://ov35lvdq9.bkt.clouddn.com/15257679640306.jpg)


#### 等分flex
```js
<section class=" c__flex c__flex-auto">
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
</section>
```

![](http://ov35lvdq9.bkt.clouddn.com/15257680028528.jpg)


#### 自动折行
```js
<section class=" c__flex c__wrap">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</section>
```

![](http://ov35lvdq9.bkt.clouddn.com/15257680696246.jpg)

#### content居中
```js
<section class=" c__flex c__center">
    <div class="item"></div>
    <div class="item"></div>
</section>
```
![](http://ov35lvdq9.bkt.clouddn.com/15257684074724.jpg)

#### c__between / c__around 内容散列

```js
// space-between 写法
<section class=" c__flex c__wrap c__between">
// space-around 写法
//  <section class=" c__flex c__wrap c__around">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</section>
```
![](http://ov35lvdq9.bkt.clouddn.com/15257685913012.jpg)

#### 父元素和子元素配合
```js
<section class="section-200 c__flex c__around">
    <div class="item"></div>
    <div class="item i__middle"></div>
    <div class="item i__bottom"></div>
</section>

```

![](http://ov35lvdq9.bkt.clouddn.com/15257685079469.jpg)

#### 垂直居中
```js
<section class="c__vertical c__flex c__middle">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</section>
```

![](http://ov35lvdq9.bkt.clouddn.com/15257687640597.jpg)


#### 水平垂直居中
```js
<section class="section-200 c__flex c__center c__middle">
    <div class="item"></div>
</section>
```

![](http://ov35lvdq9.bkt.clouddn.com/15257689120105.jpg)


#### 水平flex中嵌入垂直flex布局  水平方向等分

```js
<section class="c__flex  c__flex-equal">
    <section class="c__flex c__vertical c__middle">
        <div class="item"></div>
        <div class="item"></div>
    </section>
    <div class="item"></div>
    <div class="item"></div>
</section>
```

![](http://ov35lvdq9.bkt.clouddn.com/15257689648602.jpg)


#### 垂直flex布局中嵌入水平flex布局
**特别注意**：`ios10-`已知的`flex-direction:column`bug, 父元素为垂直flex布局时，子元素必须为`display:block`元素，所以要像下面这样，在水平flex元素外套一层`block`元素。

```js
<section class="c__flex c__vertical c__middle">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <section>
        <div class="c__flex">
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </section>
</section>
```

![](http://ov35lvdq9.bkt.clouddn.com/15257690535050.jpg)

## License
MIT


