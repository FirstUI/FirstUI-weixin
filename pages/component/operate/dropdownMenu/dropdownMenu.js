let ddmRange, ddmSort, ddmQues, ddmTag;
Page({
  data: {
    options: [{
      text: '综合推荐',
      value: 1,
      checked: true
    }, {
      text: '新品优先',
      value: 2
    }, {
      text: '评论数从高到低',
      value: 3
    }],
    options1: [{
      text: '默认排序',
      value: 11,
      checked: true
    }, {
      text: '销量排序',
      value: 12
    }, {
      text: '价格排序',
      value: 13
    }],
    range: '综合推荐',
    rangeShow: false,
    sort: '默认排序',
    sortShow: false,
    //数据格式二
    options2: ['注册激活', '站长工具', '投递文章', '媒体合作', '素材相关', '报告错误', '论坛事务', '发布软件', '网站排行榜', '其他事务'],
    question: '',
    quesShow: false,
    options3: ['最新车讯', '降价排行', 'SUV', '违章罚单', '提车试驾', '测评体验', '选车指南', '美女车模', '加油优惠卡', '维修保养'],
    tag: '',
    tagShow: false
  },
  onReady() {
    ddmRange = this.selectComponent("#ddmRange");
    ddmSort = this.selectComponent("#ddmSort");
    ddmQues = this.selectComponent("#ddmQues");
    ddmTag = this.selectComponent("#ddmTag");
  },
  filterTap(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 1) {
      ddmRange && ddmRange.show()
      this.setData({
        rangeShow: true
      })
    } else {
      ddmSort && ddmSort.show()
      this.setData({
        sortShow: true
      })
    }
  },
  rangeItemClick(e) {
    console.log(e.detail)
    this.setData({
      range: e.detail.text
    })
    this.rangeClose()
  },
  rangeClose() {
    this.setData({
      rangeShow: false
    })
  },
  sortItemClick(e) {
    console.log(e.detail)
    this.setData({
      sort: e.detail.text
    })
    this.sortClose()
  },
  sortClose() {
    this.setData({
      sortShow: false
    })
  },
  quesTap() {
    ddmQues && ddmQues.show()
    this.setData({
      quesShow: true
    })
  },
  quesItemClick(e) {
    console.log(e.detail)
    this.setData({
      question: e.detail.text
    })
    this.quesClose()
  },
  quesClose() {
    this.setData({
      quesShow: false
    })
  },
  tagTap() {
    ddmTag && ddmTag.show()
    this.setData({
      tagShow: true
    })
  },
  tagItemClick(e) {
    console.log(e.detail)
    this.setData({
      tag: e.detail.text
    })
    this.tagClose()
  },
  tagClose() {
    this.setData({
      tagShow: false
    })
  }
})