Page({
  data: {
    resUrl: wx.fui.resUrl() 
  },
  goIndex() {
    wx.fui.href('/pages/tabbar/index/index', true)
  }
})