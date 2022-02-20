Page({
  data: {
    val: '1',
    radioItems: [{
        name: '小于18岁',
        value: '1',
        checked: true
      },
      {
        name: '18~28岁',
        value: '2',
        checked: false
      },
      {
        name: '29~40岁',
        value: '3',
        checked: false
      }
    ]
  },
  change(e) {
    console.log('change:' + e.detail.value)
  }
})