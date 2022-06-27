Component({
  behaviors: ['wx://form-field-button'],
  properties: {
    //样式类型：primary，success， warning，danger，link，purple，gray
    type: {
      type: String,
      value: 'primary'
    },
    //按钮背景色，当传入值时type失效
    background: {
      type: String,
      value: ''
    },
    //按钮显示文本
    text: {
      type: String,
      value: ''
    },
    //按钮字体颜色
    color: {
      type: String,
      value: '#fff'
    },
    //按钮禁用背景色
    disabledBackground: {
      type: String,
      value: ''
    },
    //按钮禁用字体颜色
    disabledColor: {
      type: String,
      value: ''
    },
    borderWidth: {
      type: String,
      value: '1px'
    },
    borderColor: {
      type: String,
      value: ''
    },
    //宽度
    width: {
      type: String,
      value: '100%'
    },
    //高度
    height: {
      type: String,
      value: '96rpx'
    },
    //字体大小，单位rpx
    size: {
      type: Number,
      optionalTypes: [String],
      value: 32
    },
    bold: {
      type: Boolean,
      value: false
    },
    margin: {
      type: String,
      value: '0'
    },
    //圆角
    radius: {
      type: String,
      value: '16rpx'
    },
    plain: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    loading: {
      type: Boolean,
      value: false
    },
    formType: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: ''
    },
    index: {
      type: Number,
      optionalTypes: [String],
      value: 0
    }
  },
  data: {
    time: 0,
    trigger: false,
    tap: false
  },
  methods: {
    handleStart() {
      if (this.data.disabled) return;
      this.data.trigger = false;
      this.data.tap = true;
      if (new Date().getTime() - this.data.time <= 150) return;
      this.data.trigger = true;
      this.setData({
        time: new Date().getTime()
      })
    },
    handleClick() {
      if (this.data.disabled || !this.data.trigger) return;
      this.setData({
        time: 0
      })
    },
    handleEnd() {
      if (this.data.disabled) return;
      setTimeout(() => {
        this.setData({
          time: 0
        })
      }, 150);
    },
    handleTap(){
      if (this.disabled) return;
      this.triggerEvent('click', {
        index: Number(this.data.index)
      });
    },
    bindgetuserinfo({
      detail = {}
    } = {}) {
      this.triggerEvent('getuserinfo', detail);
    },
    bindcontact({
      detail = {}
    } = {}) {
      this.triggerEvent('contact', detail);
    },
    bindgetphonenumber({
      detail = {}
    } = {}) {
      this.triggerEvent('getphonenumber', detail);
    },
    binderror({
      detail = {}
    } = {}) {
      this.triggerEvent('error', detail);
    },
    bindopensetting({
      detail = {}
    } = {}) {
      this.triggerEvent('opensetting', detail);
    }
  }
})