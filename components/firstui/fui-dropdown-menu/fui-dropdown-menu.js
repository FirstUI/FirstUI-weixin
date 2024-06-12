Component({
  options: {
    virtualHost: true
  },
  textKey: {
    type: String,
    value: 'text'
  },
  srcKey: {
    type: String,
    value: 'src'
  },
  checkedKey: {
    type: String,
    value: 'checked'
  },
  properties: {
    options: {
      type: Array,
      value: [],
      observer(val) {
        this.initData(val)
      }
    },
    maxHeight: {
      type: String,
      optionalTypes: [Number],
      value: 400
    },
    minWidth: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    left: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    right: {
      type: String,
      optionalTypes: [Number],
      value: -1
    },
    background: {
      type: String,
      value: '#fff'
    },
    radius: {
      type: String,
      optionalTypes: [Number],
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
      type: String,
      optionalTypes: [Number],
      value: 48
    },
    size: {
      type: String,
      optionalTypes: [Number],
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
    isMask: {
      type: Boolean,
      value: true
    },
    maskBackground: {
      type: String,
      value: 'transparent'
    },
    //down/up
    direction: {
      type: String,
      value: 'down'
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
              [this.data.textKey]: item,
              [this.data.checkedKey]: false
            }
          })
        } else {
          vals.map(item => {
            item[this.data.checkedKey] = item[this.data.checkedKey] || false
          })
        }
        this.setData({
          itemList: vals
        })
      } else {
        this.setData({
          itemList: []
        })
      }
    },
    itemClick(e) {
      let index = Number(e.currentTarget.dataset.index)
      let item = this.data.itemList[index]
      let vals = [...this.data.itemList]
      vals.forEach((item, idx) => {
        if (index === idx) {
          item[this.data.checkedKey] = true
        } else {
          item[this.data.checkedKey] = false
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
      if (type === 1) {
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