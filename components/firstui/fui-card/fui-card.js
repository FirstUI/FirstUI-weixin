Component({
  properties: {
    //card margin值
    margin: {
      type: String,
      value: '0 32rpx'
    },
    //是否通栏，为true时margin-left，margin-right失效
    full: {
      type: Boolean,
      value: false
    },
    //card 背景色
    background: {
      type: String,
      value: '#fff'
    },
    //card 圆角，showBorder为false时生效
    radius: {
      type: String,
      value: '16rpx'
    },
    //阴影
    shadow: {
      type: String,
      value: '0 2rpx 4rpx 0 rgba(2, 4, 38, 0.05)'
    },
    //是否显示card 边框，为true时box-shadow失效
    showBorder: {
      type: Boolean,
      value: false
    },
    headerBackground: {
      type: String,
      value: '#fff'
    },
    //是否需要header底部线条
    headerLine: {
      type: Boolean,
      value: true
    },
    //header padding值
    padding: {
      type: String,
      value: '20rpx 20rpx'
    },
    //头像，图标图片地址
    src: {
      type: String,
      value: ''
    },
    //图片宽度，单位rpx
    width: {
      type: Number,
      optionalTypes: [String],
      value: 64
    },
    //图片高度，单位rpx
    height: {
      type: Number,
      optionalTypes: [String],
      value: 64
    },
    //图片圆角
    imageRadius: {
      type: String,
      value: '8rpx'
    },
    title: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      optionalTypes: [String],
      value: 30
    },
    color: {
      type: String,
      value: '#7F7F7F'
    },
    tag: {
      type: String,
      value: ''
    },
    tagSize: {
      type: Number,
      optionalTypes: [String],
      value: 24
    },
    tagColor: {
      type: String,
      value: '#b2b2b2'
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