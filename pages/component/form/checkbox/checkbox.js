Page({
  data: {
    //fui-checkbox-group双向绑定返回的值为JSON字符串，需要自己转化为JSON数据，不支持直接使用JSON数据
    vals: '["1"]',
    checkboxItems: [{
        name: '篮球',
        value: '1',
        checked: true
      },
      {
        name: '羽毛球',
        value: '2',
        checked: false
      },
      {
        name: '乒乓球',
        value: '3',
        checked: false
      }
    ]
  },
  change(e) {
    console.log('change:' + JSON.stringify(e.detail.value))
  }
})