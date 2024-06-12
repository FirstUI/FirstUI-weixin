Component({
  properties: {
    //是否显示操作菜单
    show: {
      type: Boolean,
      value: false
    },
    //菜单按钮数组，可自定义文本颜色
    itemList: {
      type: Array,
      value: [],
      observer(val) {
        this.initData(val)
      }
    },
    textKey: {
      type: String,
      value: 'text'
    },
    //菜单按钮字体大小 rpx
    itemSize: {
      type: String,
      optionalTypes: [Number],
      value: 32
    },
    //v2.4.0+
    itemColor: {
      type: String,
      value: '#181818'
    },
    //v2.4.0+
    itemDarkColor: {
      type: String,
      value: '#D1D1D1'
    },
    //提示信息
    tips: {
      type: String,
      value: ""
    },
    //提示信息文本颜色
    color: {
      type: String,
      value: "#7F7F7F"
    },
    //提示文字大小 rpx
    size: {
      type: String,
      optionalTypes: [Number],
      value: 26
    },
    //是否需要圆角
    radius: {
      type: Boolean,
      value: true
    },
    //是否需要取消按钮
    isCancel: {
      type: Boolean,
      value: true
    },
    //v2.4.0+
    cancelSize: {
      type: String,
      optionalTypes: [Number],
      value: 32
    },
    //light/dark
    theme: {
      type: String,
      value: 'light'
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: String,
      optionalTypes: [Number],
      value: 1001
    }
  },
  data: {
    vals: []
  },
  lifetimes: {
    attached: function () {
      this.initData(this.data.itemList)
    }
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== 'object') {
          vals = vals.map(item => {
            return {
              [this.data.textKey]: item
            }
          })
        }
        this.setData({
          vals: vals
        })
      }
    },
    handleClickMask() {
      if (!this.data.maskClosable) return;
      this.handleClickCancel();
    },
    handleClickItem(e) {
      let index = Number(e.currentTarget.dataset.index)
      if (!this.data.show) return;
      this.triggerEvent('click', {
        index: index,
        ...this.data.vals[index]
      });
    },
    handleClickCancel() {
      this.triggerEvent('cancel');
    },
    stop() {}
  }
})