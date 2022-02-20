Component({
  properties: {
    //padding值
    padding: {
      type: String,
      value: '32rpx'
    },
    //margin-top 单位rpx
    marginTop: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //margin-bottom 单位rpx
    marginBottom: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //背景颜色
    background: {
      type: String,
      value: ''
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      value: true
    },
    //是否需要右侧箭头
    arrow: {
      type: Boolean,
      value: false
    },
    arrowColor: {
      type: String,
      value: '#B2B2B2'
    },
    //是否显示上边框
    topBorder: {
      type: Boolean,
      value: false
    },
    //是否显示下边框
    bottomBorder: {
      type: Boolean,
      value: true
    },
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
      value: 32
    },
    //下边框right值，单位rpx
    bottomRight: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //border-radius圆角值
    radius: {
      type: String,
      value: '0'
    },
    index: {
      type: Number,
      value: 0
    }
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {
        index: this.data.index
      });
    }
  }
})