Component({
  behaviors: ['wx://form-field-group'],
  options: {
    addGlobalClass: true,
    virtualHost: true,
    multipleSlots: true
  },
  properties: {
    //是否为必填项
    required: {
      type: Boolean,
      value: false
    },
    requiredColor: {
      type: String,
      value: ''
    },
    //左侧标题
    label: {
      type: String,
      value: ''
    },
    //标题字体大小
    labelSize: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    labelColor: {
      type: String,
      value: ''
    },
    //label 最小宽度 rpx
    labelWidth: {
      type: Number,
      optionalTypes: [String],
      value: 140
    },
    clearable: {
      type: Boolean,
      value: false
    },
    clearColor: {
      type: String,
      value: '#CCCCCC'
    },
    //获取焦点
    focus: {
      type: Boolean,
      value: false,
      observer(val) {
        setTimeout(() => {
          this.setData({
            focused: val
          })
        }, 50)
      }
    },
    placeholder: {
      type: String,
      value: ''
    },
    placeholderStyle: {
      type: String,
      value: '',
      observer(val) {
        this.fieldPlaceholderStyle()
      }
    },
    //输入框名称
    name: {
      type: String,
      value: ''
    },
    //输入框值 
    value: {
      type: String,
      value: ''
    },
    //与官方input type属性一致
    type: {
      type: String,
      value: 'text'
    },
    password: {
      type: Boolean,
      value: false
    },
    disabled: {
      type: Boolean,
      value: false
    },
    readonly:{
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      optionalTypes: [String],
      value: 140
    },
    min:{
      type: Number,
      optionalTypes: [String],
      value: 'NaN'
    },
    max: {
      type: Number,
      optionalTypes: [String],
      value: 'NaN'
    },
    cursorSpacing: {
      type: Number,
      value: 0,
    },
    confirmType: {
      type: String,
      value: 'done'
    },
    confirmHold: {
      type: Boolean,
      value: false,
    },
    cursor: {
      type: Number,
      value: -1
    },
    selectionStart: {
      type: Number,
      value: -1
    },
    selectionEnd: {
      type: Number,
      value: -1
    },
    adjustPosition: {
      type: Boolean,
      value: true
    },
    holdKeyboard: {
      type: Boolean,
      value: false
    },
    autoBlur: {
      type: Boolean,
      value: false
    },
    alwaysEmbed: {
      type: Boolean,
      value: false
    },
    //输入框字体大小 rpx
    size: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //输入框字体颜色
    color: {
      type: String,
      value: ''
    },
    // 是否显示 input 边框，为true则borderTop，borderBottom失效
    inputBorder: {
      type: Boolean,
      value: false
    },
    //input是否显示为圆角
    isFillet: {
      type: Boolean,
      value: false
    },
    //自定义圆角值
    radius: {
      type: Number,
      optionalTypes: [String],
      value: 8
    },
    // 是否显示上边框
    borderTop: {
      type: Boolean,
      value: false
    },
    //上边框left值，单位rpx
    topLeft: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //上边框right值，单位rpx
    topRight: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      value: true
    },
    //下边框left值，单位rpx
    bottomLeft: {
      type: Number,
      optionalTypes: [String],
      value: 32
    },
    //下边框right值，单位rpx
    bottomRight: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //边框颜色，颜色可通过css变量(--fui-color-border)修改
    borderColor: {
      type: String,
      value: ''
    },
    // 是否自动去除两端的空格
    trim: {
      type: Boolean,
      value: true
    },
    textRight: {
      type: Boolean,
      value: false
    },
    //输入框padding值
    padding: {
      type: String,
      value: '28rpx 32rpx'
    },
    //输入框背景颜色
    backgroundColor: {
      type: String,
      value: '#FFFFFF'
    },
    //输入框margin-top值 rpx
    marginTop: {
      type: Number,
      optionalTypes: [String],
      value: 0
    }
  },
  data: {
    placeholderStyl: '',
    focused: false,
    c_labelSize:(wx.$fui && wx.$fui.fuiInput.labelSize) || 32,
    c_size: (wx.$fui && wx.$fui.fuiInput.size) || 32,
    c_labelColor:(wx.$fui && wx.$fui.fuiInput.labelColor) || '#333',
    c_color: (wx.$fui && wx.$fui.fuiInput.color) || '#333',
    c_dangerColor:(wx.$fui && wx.$fui.color.danger) || '#FF2B2B'
  },
  lifetimes: {
    attached: function () {
      this.fieldPlaceholderStyle()
    },
    ready: function () {
      setTimeout(() => {
        this.setData({
          focused: this.data.focus
        })
      }, 120)
    }
  },
  methods: {
    fieldPlaceholderStyle() {
      if (this.data.placeholderStyle) {
        this.setData({
          placeholderStyl: this.data.placeholderStyle
        })
      } else {
        this.setData({
          placeholderStyl: `font-size:${this.data.size || this.data.c_size}rpx`
        })
      }
    },
    onInput(event) {
      let value = event.detail.value;
      if (this.data.trim) value = this.trimStr(value);
      const eVal= Number(value)
      if ((this.data.type === 'digit' || this.data.type === 'number') && !isNaN(eVal) && Number.isSafeInteger(eVal)) {
        value = this.data.type === 'digit' ? value : eVal
        if (typeof eVal === 'number') {
          const min = Number(this.data.min)
          const max = Number(this.data.max)
          if (typeof min === 'number' && eVal < min) {
            value = min
            this.setData({
              value:value
            })
          } else if (typeof max === 'number' && max < eVal) {
            value = max
            this.setData({
              value:value
            })
          }
        }
      }
      //如果为空时返回0 ，当双向绑定会将输入框赋值0
			const inputValue = event.detail.value !== '' ? value : ''
      this.triggerEvent('input', inputValue);
    },
    onFocus(event) {
      this.triggerEvent('focus', event.detail);
    },
    onBlur(event) {
      this.triggerEvent('blur', event.detail);
    },
    onConfirm(e) {
      this.triggerEvent('confirm', e.detail);
    },
    onClear(event) {
      if(this.data.disabled && !this.data.readonly) return;
      wx.hideKeyboard()
      this.triggerEvent('input', '');
      this.setData({
        value: ''
      })
    },
    fieldClick() {
      this.triggerEvent('click', {
        name: this.data.name
      });
    },
    onKeyboardheightchange(e) {
      this.triggerEvent('keyboardheightchange', e.detail)
    },
    trimStr(str) {
      return str.replace(/^\s+|\s+$/g, '');
    }
  }
})