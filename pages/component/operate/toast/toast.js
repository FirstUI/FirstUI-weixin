let toast, toast2;
Page({
  onReady() {
    toast = this.selectComponent("#toast")
    toast2 = this.selectComponent("#toast2")
  },
  showToast(e) {
    let type = Number(e.currentTarget.dataset.type)
    let options = {}
    if (type === 3) {
      toast2 && toast2.show(options)
    } else {
      if (type === 1) {
        options.src = "/static/images/common/img_logo.png";
        options.text = 'First UI !';
      } else if (type === 2) {
        options.text = '请输入手机号';
      }

      toast && toast.show(options)
    }
  }
})