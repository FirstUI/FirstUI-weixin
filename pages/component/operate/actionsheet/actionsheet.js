Page({
  data: {
    show: false,
    tips: '',
    itemList: [],
    isCancel: true,
    theme: 'light'
  },
  showActionSheet(e) {
    let type = Number(e.currentTarget.dataset.type)
    this.setData({
      tips: '',
      isCancel: true,
      theme: 'light'
    }, () => {
      switch (type) {
        case 1:
          this.setData({
            tips: '退出后不会删除任何历史数据，下次登录依然可以使用本账号。',
            itemList: [{
              text: '退出登录',
              color: '#FF2B2B'
            }]
          })
          break;
        case 2:
          this.setData({
            itemList: ['点赞', '评论', '收藏']
          })
          break;
        case 3:
          this.setData({
            itemList: ['点赞', '评论', '收藏'],
            theme: 'dark'
          })
          break;
        case 4:
          this.setData({
            tips: '请选择性别',
            itemList: ['男', '女', '未知'],
            isCancel: false
          })
          break;
        default:
          break;
      }
      setTimeout(() => {
        this.setData({
          show: true
        })
      }, 50)
    })
  },
  itemClick(e) {
    console.log(e.detail)
    wx.fui.toast(e.detail.text)
    this.cancel()
  },
  cancel() {
    this.setData({
      show: false
    })
  }
})