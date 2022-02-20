Page({
  data: {
    show: true,
    shown: true
  },
  close() {
    this.setData({
      show:false
    })
  },
  close2() {
    this.setData({
      shown:false
    })
  }
})