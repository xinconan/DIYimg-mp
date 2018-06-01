# diyimg-mp
支付宝小程序，自定义img组件

## 使用方式
```json
// page.json 注意，不是在app.json里配置
{
  "usingComponents":{
    "diy-img":"diyimg-mp/diy-img/index"
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
