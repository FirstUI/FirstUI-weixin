Page({
  data: {
    show: false
  },
  open() {
    this.setData({
      show:true
    })
  },
  //关闭遮罩通过show进行控制
  close() {
    this.setData({
      show:false
    })
  }
})