Component({
  options: {
    virtualHost: true
  },
  properties: {
    // 标签页数据源
    tabs: {
      type: Array,
      value: [],
      observer(vals) {
        this.initData(vals)
      }
    },
    // 当前选项卡
    current: {
      type: Number,
      value: 0,
      observer(val) {
        this.switchTab(val);
      }
    },
    // 是否可以滚动
    scroll: {
      type: Boolean,
      value: false
    },
    // tab高度 rpx
    height: {
      type: Number,
      optionalTypes: [String],
      value: 96
    },
    background: {
      type: String,
      value: '#fff'
    },
    //字体大小
    size: {
      type: Number,
      optionalTypes: [String],
      value: 28
    },
    //字体颜色
    color: {
      type: String,
      value: ''
    },
    //选中前字重
    fontWeight: {
      type: Number,
      optionalTypes: [String],
      value: 'normal'
    },
    //选中后字体颜色
    selectedColor: {
      type: String,
      value: ''
    },
    //选中后字重 
    selectedFontWeight: {
      type: Number,
      optionalTypes: [String],
      value: 500
    },
    //选中后字体缩放倍数
    scale: {
      type: Number,
      optionalTypes: [String],
      value: 1.2
    },
    badgeColor: {
      type: String,
      value: '#fff'
    },
    badgeBackground: {
      type: String,
      value: ''
    },
    isDot: {
      type: Boolean,
      value: false
    },
    isSlider: {
      type: Boolean,
      value: true
    },
    //滑块高度
    sliderHeight: {
      type: Number,
      optionalTypes: [String],
      value: 5
    },
    //滑块背景颜
    sliderBackground: {
      type: String,
      value: ''
    },
    //滑块 radius
    sliderRadius: {
      type: Number,
      optionalTypes: [String],
      value: -1
    },
    //滑块左右padding值
    padding: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //滑块bottom
    bottom: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //滑块是否固定为较短的长度45rpx
    short: {
      type: Boolean,
      value: true
    },
    //滑块是否居中显示
    center: {
      type: Boolean,
      value: false
    },
    //是否固定
    isFixed: {
      type: Boolean,
      value: false
    },
    //吸顶效果，为true时isFixed失效
    isSticky: {
      type: Boolean,
      value: false
    },
    //isFixed或isSticky为true时，tabs top值 px
    top: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //当数据不满一屏时，item项是否靠左对齐，默认均分铺满
    alignLeft: {
      type: Boolean,
      value: false
    },
    //tabs item项排列方式：row、column
    direction: {
      type: String,
      value: 'row'
    },
    zIndex: {
      type: Number,
      optionalTypes: [String],
      value: 996
    }
  },
  data: {
    vals: [],
    scrollInto: '',
    tabIndex: 0
  },
  lifetimes: {
    attached: function () {
      this.initData(this.data.tabs)
    }
  },
  methods: {
    getId() {
      return `fui_${Math.ceil(Math.random() * 10e5).toString(36)}`
    },
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] === 'object') {
          vals.map(item => {
            const scrollId = this.getId()
            item.fui_s_id = scrollId;
          });
        } else {
          //字符串
          vals = vals.map(item => {
            const scrollId = this.getId()
            return {
              name: item,
              fui_s_id: scrollId
            }
          })
        }
        this.setData({
          vals: vals
        }, () => {
          setTimeout(() => {
            this.switchTab(this.data.current)
          }, 50)
        })
      }
    },
    switchTab(e) {
      let index = e.currentTarget ? Number(e.currentTarget.dataset.index) : Number(e)
      const item = {
        ...this.data.vals[index]
      }
      if (this.data.tabIndex === index || item.disabled) return;
      let scrollIndex = index - 1 < 0 ? 0 : index - 1;
      if(!this.data.vals[scrollIndex]) return;
      this.setData({
        tabIndex: index,
        scrollInto: this.data.vals[scrollIndex].fui_s_id
      },()=>{
        delete item.fui_s_id;
        this.triggerEvent('change', {
          index: index,
          ...item
        })
      })
    }
  }
})