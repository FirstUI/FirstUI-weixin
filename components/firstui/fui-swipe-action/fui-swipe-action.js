Component({
  options: {
    virtualHost: true,
    multipleSlots: true
  },
  properties: {
    buttons: {
      type: Array,
      value: [{
        text: '删除',
        background: '#FF2B2B'
      }]
    },
    size: {
      type: Number,
      optionalTypes: [String],
      value: 32
    },
    color: {
      type: String,
      value: '#fff'
    },
    show: {
      type: Boolean,
      value: false,
      observer(val) {
        this.setData({
          isShow: val
        })
      }
    },
    threshold: {
      type: Number,
      optionalTypes: [String],
      value: 30,
      observer(val) {
        this.setData({
          thresholdVal: Number(val)
        })
      }
    },
    disabled: {
      type: Boolean,
      value: false,
      observer(val) {
        this.setData({
          isDisabled: val
        })
      }
    },
    autoClose: {
      type: Boolean,
      value: true
    },
    //自定义按钮
    custom:{
      type: Boolean,
      value: false
    },
    param: {
      type: Number,
      optionalTypes: [String],
      value: 0
    }
  },
  relations: {
    '../fui-swipeaction-group/fui-swipeaction-group': {
      type: 'ancestor',
      linked: function (target) {
        this.data.group = target
      }
    }
  },
  data: {
    group: null,
    isShow: false,
    isDisabled: false,
    thresholdVal: 30,
    clientX: 0,
    timestamp: 0
  },
  lifetimes: {
    ready: function () {
      this.setData({
        isShow: this.data.show,
        isDisabled: this.data.disabled,
        thresholdVal: Number(this.data.threshold)
      })
    }
  },
  lifetimes: {
    detached: function () {
      this.unInstall()
    }
  },
  methods: {
    unInstall() {
      if (this.data.group) {
        this.data.group.children.forEach((item, index) => {
          if (item === this) {
            this.data.group.children.splice(index, 1)
          }
        })
      }
    },
    closeSwipe(e) {
      if (!this.data.autoClose) return
      this.data.group && this.data.group.closeAuto(this)
    },
    change(e) {
      this.triggerEvent('change', {
        isOpen: e.open === 'right',
        param: this.data.param
      })
      if (this.data.isShow !== e.open) {
        this.setData({
          isShow: e.open
        })
      }
    },
    appTouchStart(e) {
      const {
        clientX
      } = e.changedTouches[0]
      this.data.clientX = clientX
      this.data.timestamp = new Date().getTime()
    },
    appTouchEnd(e) {
      let index = Number(e.currentTarget.dataset.index)
      let item = e.currentTarget.dataset.item
      const {
        clientX
      } = e.changedTouches[0]
      let diff = Math.abs(this.data.clientX - clientX)
      let time = (new Date().getTime()) - this.data.timestamp
      if (diff < 40 && time < 300) {
        this.triggerEvent('click', {
          index,
          item,
          param: this.data.param
        })
      }
    }
  }
})