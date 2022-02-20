Component({
  properties: {
    value: {
      type: String,
      optionalTypes: [Number],
      value: '',
      observer(val) {
        this.getWidth()
      }
    },
    //类型：primary，success，warning，danger，purple，white
    type: {
      type: String,
      value: 'primary'
    },
    //背景色，如果设置背景则type失效
    background: {
      type: String,
      value: ''
    },
    //字体颜色
    color: {
      type: String,
      value: '#FFFFFF'
    },
    //是否显示为圆点
    dot: {
      type: Boolean,
      value: false
    },
    //margin-top值，单位rpx
    marginTop: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //margin-left值，单位rpx
    marginLeft: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //margin-right值，单位rpx
    marginRight: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //是否绝对定位
    absolute: {
      type: Boolean,
      value: false
    },
    top: {
      type: String,
      value: '-8rpx'
    },
    right: {
      type: String,
      value: '-18rpx'
    },
    //缩放比例
    scaleRatio: {
      type: Number,
      value: 1
    }
  },
  data: {
    width: 0,
    isReady: false
  },
  lifetimes: {
    ready() {
      this.getWidth()
    }
  },
  methods: {
    getWidth() {
      let width = this.data.dot ? '8px' : ((String(this.data.value).length * 16 + 20) + 'rpx')
      this.setData({
        width: width
      })
    },
    handleClick() {
      this.triggerEvent('click');
    }
  }
})