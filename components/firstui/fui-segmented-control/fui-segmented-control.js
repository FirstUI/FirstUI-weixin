Component({
  properties: {
    values: {
      type: Array,
      value: [],
      observer(vals) {
        this.initData(vals)
      }
    },
    current: {
      type: Number,
      value: 0,
      observer(val) {
        if (val != this.data.currentIndex) {
          this.setData({
            currentIndex: Number(val)
          })
        }
      }
    },
    //button、text
    type: {
      type: String,
      value: 'button'
    },
    color: {
      type: String,
      value: ''
    },
    activeColor: {
      type: String,
      value: '#fff'
    },
    bold: {
      type: Boolean,
      value: false
    },
    height: {
      type: Number,
      optionalTypes: [String],
      value: 64
    },
    size: {
      type: Number,
      optionalTypes: [String],
      value: 28
    },
    radius: {
      type: Number,
      optionalTypes: [String],
      value: 8
    },
    disabled: {
      type: Boolean,
      value: false
    },
    marginTop: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    marginBottom: {
      type: Number,
      optionalTypes: [String],
      value: 0
    }
  },
  data: {
    currentIndex: 0,
    vals: []
  },
  lifetimes: {
    attached: function () {
      this.setData({
        currentIndex: Number(this.data.current)
      })
      this.initData(this.data.values)
    }
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] === 'object') {
          this.setData({
            vals: vals
          })
        } else {
          //字符串
          this.setData({
            vals: vals.map(item => {
              return {
                name: item
              }
            })
          })
        }
      }
    },
    handleClick(e) {
      let index = Number(e.currentTarget.dataset.index)
      let vals = this.data.vals[index] || {};
      if (this.data.currentIndex !== index && !this.data.disabled && !vals.disabled) {
        this.setData({
          currentIndex: index
        })
        this.triggerEvent('click', {
          index: index,
          ...vals
        })
      }
    }
  }
})