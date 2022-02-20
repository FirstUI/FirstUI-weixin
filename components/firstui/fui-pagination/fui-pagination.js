Component({
  options: {
    multipleSlots: true
  },
  properties: {
    prevText: {
      type: String,
      value: '上一页'
    },
    nextText: {
      type: String,
      value: '下一页'
    },
    width: {
      type: Number,
      optionalTypes: [String],
      value: 160
    },
    height: {
      type: Number,
      optionalTypes: [String],
      value: 64
    },
    borderColor: {
      type: String,
      value: 'transparent'
    },
    background: {
      type: String,
      value: '#fff'
    },
    color: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      optionalTypes: [String],
      value: 28
    },
    radius: {
      type: Number,
      optionalTypes: [String],
      value: -1
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      value: true
    },
    //是否自定义按钮显示内容
    custom: {
      type: Boolean,
      value: false
    },
    //当前页码
    current: {
      type: Number,
      optionalTypes: [String],
      value: 1,
      observer(val) {
        this.setData({
          currentIndex: Number(val)
        })
      }
    },
    //当前页码字体颜色
    currentColor: {
      type: String,
      value: ''
    },
    //页码字体颜色
    pageColor: {
      type: String,
      value: ''
    },
    //页码字体大小
    pageFontSize: {
      type: Number,
      optionalTypes: [String],
      value: 36
    },
    //是否需要展示页码
    isPage: {
      type: Boolean,
      value: true
    },
    //数据总量
    total: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //每页数据量
    pageSize: {
      type: Number,
      optionalTypes: [String],
      value: 10
    }
  },
  data: {
    currentIndex: 1
  },
  lifetimes: {
    attached: function () {
      this.setData({
        currentIndex: Number(this.data.current)
      })
    }
  },
  methods: {
    maxPage() {
      let maxPage = 1
      let total = Number(this.data.total)
      let pageSize = Number(this.data.pageSize)
      if (total && pageSize) {
        maxPage = Math.ceil(total / pageSize)
      }
      return maxPage || 0
    },
    clickPrev() {
      if (Number(this.data.currentIndex) === 1) return;
      this.setData({
        currentIndex: this.data.currentIndex - 1
      })
      this.change('prev')
    },
    clickNext() {
      if (Number(this.data.currentIndex) === this.maxPage()) return;
      this.setData({
        currentIndex: this.data.currentIndex + 1
      })
      this.change('next')
    },
    change(e) {
      this.triggerEvent('change', {
        type: e,
        current: this.data.currentIndex
      })
    }
  }
})