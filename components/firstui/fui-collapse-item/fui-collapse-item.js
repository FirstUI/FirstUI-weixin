const elId = `fui_${Math.ceil(Math.random() * 10e5).toString(36)}`
Component({
  options: {
    multipleSlots: true,
    virtualHost: true
  },
  properties: {
    //item项索引或者唯一标识
    index: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    background: {
      type: String,
      value: '#fff'
    },
    //是否显示动画,如果动画卡顿严重建议不开启
    animation: {
      type: Boolean,
      value: true
    },
    // 是否展开
    open: {
      type: Boolean,
      value: false,
      observer(val) {
        this.setData({
          isOpen: val
        })
      }
    },
    isBorder: {
      type: Boolean,
      value: true
    },
    borderColor: {
      type: String,
      value: ''
    },
    borderLeft: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    arrow: {
      type: Boolean,
      value: true
    },
    arrowColor: {
      type: String,
      value: '#B2B2B2'
    },
    arrowRight: {
      type: String,
      optionalTypes: [Number],
      value: 24
    },
    contentBg: {
      type: String,
      value: '#fff'
    }
  },
  relations: {
    '../fui-collapse/fui-collapse': {
      type: 'ancestor',
      linked: function (target) {
        this.data.collapse = target
      }
    }
  },
  data: {
    isOpen: false,
    isHeight: null,
    height: 0,
    elId: elId,
    oldHeight: 0,
    collapse: null
  },
  lifetimes: {
    ready: function () {
      this.setData({
        isOpen: this.data.open
      })
      this.init()
    },
    detached: function () {
      this.uninstall()
    }
  },
  methods: {
    init() {
      this.getCollapseHeight()
    },
    uninstall() {
      if (this.data.collapse && this.data.collapse.children) {
        this.data.collapse.children.forEach((item, index) => {
          if (item === this) {
            this.data.collapse.children.splice(index, 1)
          }
        })
      }
    },
    onClick(e) {
      if (this.data.disabled) return
      let isOpen = !this.data.isOpen
      this.setData({
        isOpen: isOpen
      })
      if (this.data.collapse) {
        this.data.collapse.collapseChange(this, isOpen, this.data.index)
      } else {
        this.triggerEvent('change', {
          index: this.data.index,
          isOpen: isOpen
        })
      }
    },
    getCollapseHeight(index = 0) {
      wx.createSelectorQuery()
        .in(this)
        .select(`#${this.data.elId}`)
        .fields({
          size: true
        }, data => {
          if (index >= 10) return
          if (!data) {
            index++
            this.getCollapseHeight(index)
            return
          }
          this.setData({
            height: data.height,
            isHeight: true
          })
        })
        .exec()
    }
  }
})