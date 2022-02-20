let ddlAssets, ddlQues, ddlTag;
Page({
  data: {
    options: [{
      text: '机架式服务器',
      value: 1
    }, {
      text: '笔记本',
      value: 2
    }, {
      text: '平板电脑',
      value: 3
    }, {
      text: '台式机+显示器',
      value: 3
    }],
    assets: '',
    assetsShow: false,
    options2: ['注册激活', '站长工具', '投递文章', '媒体合作', '素材相关', '报告错误', '论坛事务', '发布软件', '网站排行榜', '其他事务'],
    question: '',
    quesShow: false,
    options3: ['最新车讯', '降价排行', 'SUV', '违章罚单', '提车试驾', '测评体验', '选车指南', '美女车模', '加油优惠卡', '维修保养'],
    tag: '',
    tagShow: false
  },
  onReady: function () {
    ddlAssets = this.selectComponent("#ddlAssets")
    ddlQues = this.selectComponent("#ddlQues")
    ddlTag = this.selectComponent("#ddlTag")
  },
  assetsTap() {
    ddlAssets && ddlAssets.show()
    this.setData({
      assetsShow: true
    })
  },
  assetsItemClick(e) {
    console.log(e.detail)
    this.setData({
      assets: e.detail.text
    })
    this.assetsClose()
  },
  assetsClose() {
    this.setData({
      assetsShow: false
    })
  },
  quesTap() {
    ddlQues && ddlQues.show()
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
    ddlTag && ddlTag.show()
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