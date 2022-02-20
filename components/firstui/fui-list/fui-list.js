Component({
  properties: {
    //fui-list margin-top值,单位rpx
    marginTop: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //标题
    title: {
      type: String,
      value: ''
    },
    //标题颜色
    color: {
      type: String,
      value: '#7F7F7F'
    },
    //标题字体大小 单位rpx
    size: {
      type: Number,
      optionalTypes: [String],
      value: 28
    },
    //标题padding值
    padding: {
      type: String,
      value: "32rpx 32rpx 20rpx"
    },
    //标题背景色
    background: {
      type: String,
      value: 'transparent'
    },
    //底部说明文字
    footer: {
      type: String,
      value: ''
    },
    //底部说明文字颜色
    footerColor: {
      type: String,
      value: '#7F7F7F'
    },
    //底部说明文字大小 单位rpx
    footerSize: {
      type: Number,
      optionalTypes: [String],
      value: 28
    },
    //底部说明文本padding值
    footerPadding: {
      type: String,
      value: "20rpx 32rpx 0"
    },
    //是否显示上边框
    topBorder: {
      type: Boolean,
      value: true
    },
    //是否显示下边框
    bottomBorder: {
      type: Boolean,
      value: false
    },
    //边框颜色，非nvue下传值则全局默认样式失效
    borderColor: {
      type: String,
      value: ''
    },
    //上边框left值，单位rpx
    topLeft: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //上边框right值，单位rpx
    topRight: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //下边框left值，单位rpx
    bottomLeft: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //下边框right值，单位rpx
    bottomRight: {
      type: Number,
      optionalTypes: [String],
      value: 0
    }
  }
})