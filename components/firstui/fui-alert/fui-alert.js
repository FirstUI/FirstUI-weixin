Component({
  options: {
    multipleSlots: true
  },
  properties: {
    //info, success, warn, waiting,clear
    type: {
      type: String,
      value: ''
    },
    //背景色，如果设置type对应颜色失效
    background: {
      type: String,
      value: ''
    },
    //padding值
    padding: {
      type: String,
      value:'20rpx 32rpx'
    },
    //margin-top值，单位rpx
    marginTop: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //margin-bottom值，单位rpx
    marginBottom: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //圆角
    radius: {
      type: String,
      value: '16rpx'
    },
    //icon颜色
    iconColor: {
      type: String,
      value: '#fff'
    },
    //icon字体大小，px
    iconSize: {
      type: Number,
      value: 22
    },
    closable: {
      type: Boolean,
      value: false
    },
    closeColor: {
      type: String,
      value: '#fff'
    },
    //关闭icon字体大小，px
    closeSize: {
      type: Number,
      value: 22
    },
    //是否自定义左侧内容,默认图标失效
    isLeft: {
      type: Boolean,
      value: false
    },
    //内容是否与图标之间有间隔，isLeft为true时生效
    spacing: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#fff'
    },
    size: {
      type: String,
      value: '14px'
    },
    desc: {
      type: String,
      value: ''
    },
    descColor: {
      type: String,
      value: '#fff'
    },
    descSize: {
      type: String,
      value: '12px'
    },
    //描述文字单行展示，超出隐藏
    single: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    leftClick() {
      this.triggerEvent('leftClick', {})
    },
    onClick() {
      this.triggerEvent('click', {})
    },
    close() {
      this.triggerEvent('close', {})
    }
  }
})