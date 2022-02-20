Component({
  properties: {
    text: {
      type: String,
      value: ''
    },
    //divider占据高度，单位rpx
    height: {
      type: Number,
      optionalTypes: [String],
      value: 100
    },
    //divider宽度
    width: {
      type: String,
      value: '400rpx'
    },
    //divider颜色
    dividerColor: {
      type: String,
      value: '#CCCCCC'
    },
    //文字颜色
    color: {
      type: String,
      value: '#B2B2B2'
    },
    //文字大小 rpx
    size: {
      type: Number,
      optionalTypes: [String],
      value: 24
    },
    fontWeight: {
      type: Number,
      optionalTypes: [String],
      value: 400
    },
    //背景颜色，和当前页面背景色保持一致
    backgroundColor: {
      type: String,
      value: '#F1F4FA'
    }
  }
})