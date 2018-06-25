# diyimg-mp
支付宝小程序，自定义img组件

[![npm Package](https://img.shields.io/npm/v/diyimg-mp.svg)](https://www.npmjs.com/package/diyimg-mp)
[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/xinconan/diyimg-mp/blob/master/LICENSE)

## 使用方式
```bash
npm install diyimg-mp --save
```
在需要使用的页面中添加配置
```json
// page.json 注意，不是在app.json里配置
{
  "usingComponents":{
    "diy-img": "diyimg-mp/es/diy-img/index"
  }
}
```
在 `axml`中使用
```html
<view>
  <diy-img src="your.png" errorSrc="replace.png" class="" mode="" />
</view>
```

## 属性
`src`、`class`、`mode`属性与 `image`标签一直

`errorSrc`是当 `src` 图片出错（图片不存在、网络错误等）时用来替换使用，它的地址最好使用小程序项目本地图片
