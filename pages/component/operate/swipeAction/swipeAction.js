Page({
  data: {
    show: false,
    buttons: [{
      text: '标为未读',
      background: '#465CFF'
    }, {
      text: '删除',
      background: '#FF2B2B'
    }]
  },
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        show: true
      })
    }, 500)
  },
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  onClick(e) {
    console.log(e.detail)
    wx.fui.toast(e.detail.item.text)
  },
  change(e) {
    console.log(e.detail)
  }
})