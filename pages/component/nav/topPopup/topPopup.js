Page({
  data: {
    show: false,
    show2: false,
    show3: false,
    itemList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  },
  showPopup(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 1) {
      this.setData({
        show: true
      })
    } else if (type === 2) {
      this.setData({
        show2: true
      })
    } else {
      this.setData({
        show3: true
      })
    }
  },
  closePopup(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 1) {
      this.setData({
        show: false
      })
    } else if (type === 2) {
      this.setData({
        show2: false
      })
    } else {
      this.setData({
        show3: false
      })
    }
  }
})