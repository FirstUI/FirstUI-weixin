var statusBarHeight = wx.getSystemInfoSync().statusBarHeight + 'px'
Component({
  properties: {
    //背景色
    background: {
      type: String,
      value: 'transparent'
    },
    //是否固定在顶部
    isFixed: {
      type: Boolean,
      value: false
    },
    //z-index值，isFixed为true时生效
    zIndex: {
      type: Number,
      value: 99
    },
    //v2.3.0+
    isOccupy: {
      type: Boolean,
      value: false,
      observer(val) {
        this.getStyle()
      }
    }
  },
  data: {
    statusBarHeight: statusBarHeight,
    style: ''
  },
  lifetimes: {
    attached: function () {
      this.getStyle()
      this.triggerEvent('init', {
        statusBarHeight: statusBarHeight
      })
    }
  },
  methods: {
    getStyle() {
      let style = ''
      if (this.data.isOccupy) {
        style += `height:${this.data.statusBarHeight}px;`
      }
      this.setData({
        style
      })
    }
  }
})