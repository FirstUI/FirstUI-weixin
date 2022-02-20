Page({
  data: {
    show: false,
    show2: false,
    itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  showDrawer(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 1) {
      this.setData({
        show: true
      })
    } else {
      this.setData({
        show2: true
      })
    }
  },
  closeDrawer(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 1) {
      this.setData({
        show: false
      })
    } else {
      this.setData({
        show2: false
      })
    }
  }
})