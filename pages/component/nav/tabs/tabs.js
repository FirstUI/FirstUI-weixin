Page({
  data: {
    //数据格式一
    tabs: ['热门推荐', '新时代', '懂球帝'],
    //数据格式二：name（必选）、badge（可选）、disabled（可选）为约定属性，其他属性可自行定义
    tabs2: [{
      name: '标签一'
    }, {
      name: '标签二'
    }, {
      name: '标签三',
      badge: 1
    }, {
      name: '标签四'
    }, {
      name: '标签五'
    }, {
      name: '标签六'
    }, {
      name: '标签七'
    }, {
      name: '标签八',
      disabled: true
    }, {
      name: '标签九'
    }]
  },
  change(e) {
    console.log(e.detail)
  }
})