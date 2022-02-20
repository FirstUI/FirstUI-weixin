Page({
  data: {
    val: 1,
    inputVal: ''
  },
  change(e) {
    this.setData({
      inputVal:e.detail.value
    })
  }
})