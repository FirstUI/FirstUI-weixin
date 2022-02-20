Component({
  properties: {
    //占据高度，单位rx
    height: {
      type: Number,
      optionalTypes:[String],
      value: 100
    },
    //提示文字
    text: {
      type: String,
      value: "正在加载..."
    },
    //文字颜色
    color: {
      type: String,
      value: "#7F7F7F"
    },
    //文字大小，单位rpx
    size: {
      type: Number,
      optionalTypes:[String],
      value: 24
    },
    //loading图标背景色
    iconColor: {
      type: String,
      value: "#B2B2B2"
    },
    //loading图标高亮部分颜色
    activeColor: {
      type: String,
      value: ""
    },
    //loading 图标的宽度，单位rpx
    iconWidth: {
      type: Number,
      optionalTypes:[String],
      value: 28
    },
    //自定义loading图标image路径，若自定义图标则iconColor、activeColor属性失效
    src: {
      type: String,
      value: ''
    },
    //loading图标和文字排列方向，可取值：col，row
    direction: {
      type: String,
      value: 'row'
    }
  }
})