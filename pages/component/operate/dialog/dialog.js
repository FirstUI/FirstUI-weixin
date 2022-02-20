Page({
  data: {
    show: false,
    visible: false,
    buttons: [{
      text: '确定',
      color: '#FF2B2B'
    }]
  },
  showDialog(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 1) {
      this.setData({
        show: true
      })
    } else {
      this.setData({
        visible: true
      })
    }
  },
  onClick(e) {
    console.log(e.detail)
    this.onClose()
  },
  //设置maskClosable为true时（点击遮罩可关闭），需要配合@close事件一起使用，通过控制show来达到关闭效果
  onClose(e) {
    this.setData({
      show: false
    })
  },
  onTap(e) {
    console.log(e.detail)
    this.setData({
      visible: false
    })
  }
})