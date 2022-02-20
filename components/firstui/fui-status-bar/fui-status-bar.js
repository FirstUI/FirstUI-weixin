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
    }
  },
  data: {
    statusBarHeight
  },
  lifetimes: {
     attached:function(){
      this.triggerEvent('init', {
				statusBarHeight: statusBarHeight
			})
     }
  }
})