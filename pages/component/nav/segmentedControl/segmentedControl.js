Page({
  data: {
    values: ['segmented1', 'segmented2'],
    //name为约定属性，其他可自定义
    values2: [{
      id: 1,
      name: 'segmented1'
    }, {
      id: 2,
      name: 'segmented2'
    }, {
      id: 3,
      name: 'segmented3'
    }],
    values3: [{
      name: 'segmented1'
    }, {
      name: 'segmented2',
      disabled: true
    }, {
      name: 'segmented3'
    }]
  },
  itemClick(e) {
    console.log(e.detail)
  }
})