Component({
  properties: {
    text: {
      type: String,
      value: ''
    },
    //类型：primary，success，warning，danger，purple
    type: {
      type: String,
      value: 'primary'
    },
    //三种主题：dark、light、plain。background为空时生效
    theme: {
      type: String,
      value: 'dark'
    },
    //背景色，如果设置背景则type失效
    background: {
      type: String,
      value: ''
    },
    //v2.0.0+ 
    isBorder: {
      type: Boolean,
      value: true
    },
    borderColor: {
      type: String,
      value: ''
    },
    //字体颜色
    color: {
      type: String,
      value: ''
    },
    //字体大小 rpx
    size: {
      type: String,
      optionalTypes: [Number],
      value: 24
    },
    //缩放比例
    scaleRatio: {
      type: Number,
      value: 1
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      value: false
    },
    radius: {
      type: String,
      optionalTypes: [Number],
      value: 8
    },
    //padding值
    padding: {
      type: String,
      value: '16rpx 32rpx'
    },
    //margin值，此处与uni版不同，合并成一个参数
    margin: {
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
      })
    }
  }
})