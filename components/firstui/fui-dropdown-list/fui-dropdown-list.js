Component({
  properties: {
    options: {
      type: Array,
      value: [],
      observer(val) {
        this.initData(val)
      }
    },
    height: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    width: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    background: {
      type: String,
      value: '#fff'
    },
    radius: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    padding: {
      type: String,
      value: '32rpx'
    },
    isCheckbox: {
      type: Boolean,
      value: true
    },
    checkboxColor: {
      type: String,
      value: ''
    },
    borderColor: {
      type: String,
      value: '#ccc'
    },
    isCheckMark: {
      type: Boolean,
      value: false
    },
    checkmarkColor: {
      type: String,
      value: '#fff'
    },
    isReverse: {
      type: Boolean,
      value: false
    },
    splitLine: {
      type: Boolean,
      value: false
    },
    iconWidth: {
      type: Number,
      optionalTypes: [String],
      value: 48
    },
    size: {
      type: Number,
      optionalTypes: [String],
      value: 32
    },
    color: {
      type: String,
      value: '#181818'
    },
    selectedColor: {
      type: String,
      value: ''
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      value: true
    },
    maskBackground: {
      type: String,
      value: 'rgba(0, 0, 0, 0.6)'
    },
    zIndex: {
      type: Number,
      value: 1001
    }
  },
  data: {
    itemList: [],
    isShow: false
  },
  lifetimes: {
    attached: function () {
      this.initData(this.data.options)
    }
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== 'object') {
          vals = vals.map(item => {
            return {
              text: item,
              checked: false
            }
          })
        } else {
          vals.map(item => {
            item.checked = item.checked || false
          })
        }
        this.setData({
          itemList: vals
        })
      }
    },
    itemClick(e) {
      let index = Number(e.currentTarget.dataset.index)
      let item = this.data.itemList[index]
      let vals = [...this.data.itemList]
      vals.forEach((item, idx) => {
        if (index === idx) {
          item.checked = true
        } else {
          item.checked = false
        }
      })
      this.setData({
        itemList: vals
      })
      this.triggerEvent('click', {
        index: index,
        ...item
      })
      this.close(2)
    },
    close(e) {
      let type = e === 2 ? 2 : 1
      this.setData({
        isShow: false
      })
      if (type === 1 && this.data.maskClosable) {
        this.triggerEvent('close', {})
      }
    },
    show() {
      this.setData({
        isShow: true
      })
    }
  }
})