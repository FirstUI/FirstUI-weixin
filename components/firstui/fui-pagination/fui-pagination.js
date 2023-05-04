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
      value: 128
    },
    height: {
      type: Number,
      optionalTypes: [String],
      value: 60
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
      value: 12
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
    //页码展示类型 1-简约型 2-展开型
    pageType: {
      type: String,
      optionalTypes:[Number],
      value: 1
    },
    pageBgColor: {
      type: String,
      value: 'rgba(0,0,0,0)'
    },
    activeBgColor: {
      type: String,
      value: ''
    },
    activeColor: {
      type: String,
      value: '#fff'
    },
    //数据总量
    total: {
      type: Number,
      optionalTypes: [String],
      value: 0,
      observer(val){
        if (this.data.pageType == 2) {
					this.getPageNumber()
				}
      }
    },
    //每页数据量
    pageSize: {
      type: Number,
      optionalTypes: [String],
      value: 10,
      observer(val){
        if (this.data.pageType == 2) {
					this.getPageNumber()
				}
      }
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
      if (this.data.pageType == 2) {
				this.getPageNumber()
			}
    }
  },
  methods: {
    toArray(start, end) {
      return Array.from(new Array(end + 1).keys()).slice(start);
    },
    getPageNumber() {
      const num = this.data.currentIndex
      const total = this.data.total
      const pageSize = this.data.pageSize
      // TODO 最大展示页数，移动端宽度有限，暂时固定
      let pagerCount = this.data.pagerCount
      if (!pagerCount) {
        pagerCount = 6
        const width = Number(this.data.width)
        if (!isNaN(width) && width <= 60) {
          pagerCount = 8;
        }
        this.setData({
          pagerCount:pagerCount
        })
      }
      let showPagerArr = this.toArray(1, pagerCount)
      let pagerNum = Math.ceil(total / pageSize)
      if (pagerNum <= 1) {
        showPagerArr = [1]
      } else if (pagerNum <= pagerCount) {
        showPagerArr = this.toArray(1, pagerNum)
      } else {
        showPagerArr[pagerCount - 1] = pagerNum;
        if (num < pagerCount - 1) {
          showPagerArr[pagerCount - 2] = '...'
        } else if (num >= pagerNum - (pagerCount - 3)) {
          showPagerArr[1] = '...';
          showPagerArr.forEach((item, index) => {
            if (index > 1) {
              showPagerArr[index] = pagerNum - (pagerCount - 3) + (index - 2)
            }
          })
        } else {
          showPagerArr[1] = '...';
          for (let i = 0; i < pagerCount - 3; i++) {
            showPagerArr[i + 2] = num + i
          }
          showPagerArr[pagerCount - 2] = '...'
        }
      }
      this.setData({
        pageNumber:showPagerArr
      })
    },
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
    handleClick(e) {
      const dataset = e.currentTarget.dataset;
      let pageNo = Number(dataset.item);
      let index = Number(dataset.index);
      const idx = this.data.pagerCount === 6 ? 4 : 6;
      if (isNaN(pageNo)) {
        if (index === 1) {
          pageNo = this.data.pageNumber[index + 1] - (this.data.pagerCount - 4)
        } else if (index === idx) {
          pageNo = this.data.pageNumber[index - 1] + 1
        }
      } else {
        if (Number(this.data.currentIndex) === pageNo) return;
      }
      this.setData({
        currentIndex:pageNo
      })
      this.change('pageNumber')
    },
    change(e) {
      this.getPageNumber()
      this.triggerEvent('change', {
        type: e,
        current: this.data.currentIndex
      })
    }
  }
})