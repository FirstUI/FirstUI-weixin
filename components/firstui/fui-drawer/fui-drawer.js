Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    //left/right
    direction: {
      type: String,
      value: 'right'
    },
    //背景颜色
    background: {
      type: String,
      value: '#fff'
    },
    zIndex: {
      type: Number,
      optionalTypes:[String],
      value: 996
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      value: true
    },
    maskBackground: {
      type: String,
      value: 'rgba(0,0,0,.6)'
    },
    //圆角值，左侧打开时为右侧圆角，右侧打开时为左侧圆角
    radius: {
      type: String,
      optionalTypes:[Number],
      value: 0
    }
  },
  methods: {
    stop() {},
    handleClose(e) {
      if (!this.data.maskClosable) return;
      this.triggerEvent('close', {});
    }
  }
})
