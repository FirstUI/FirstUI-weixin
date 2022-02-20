Page({
  data: {
    status: false
  },
  change(e) {
    this.setData({
      status: e.detail.value
    })
  }
})