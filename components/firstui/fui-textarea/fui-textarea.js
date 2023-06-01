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
    requiredTop: {
      type: String,
      value: '34rpx'
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
      value: 32
    },
    labelColor: {
      type: String,
      value: '#333'
    },
    //label 最小宽度 rpx
    labelWidth: {
      type: Number,
      optionalTypes: [String],
      value: 140
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
    autoHeight: {
      type: Boolean,
      value: false
    },
    fixed: {
      type: Boolean,
      value: false
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
      value: '',
      observer(val) {
        if (val != this.data.val) {
          let newVal = this.getVal(val);
          const len = this.getCount(String(newVal).length)
          this.setData({
            count: len,
            val: newVal
          })
        }
      }
    },
    disabled: {
      type: Boolean,
      value: false
    },
    maxlength: {
      type: Number,
      optionalTypes: [String],
      value: 140
    },
    cursorSpacing: {
      type: Number,
      value: 0,
    },
    showConfirmBar: {
      type: Boolean,
      value: true
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
    disableDefaultPadding: {
      type: Boolean,
      value: true
    },
    holdKeyboard: {
      type: Boolean,
      value: false
    },
    height: {
      type: String,
      value: '200rpx'
    },
    minHeight: {
      type: String,
      value: '30rpx'
    },
    //标题与输入框是否顶端对齐
    flexStart: {
      type: Boolean,
      value: false
    },
    //输入框字体大小 rpx
    size: {
      type: Number,
      optionalTypes: [String],
      value: 32
    },
    //输入框字体颜色
    color: {
      type: String,
      value: '#333'
    },
    // 是否显示 textarea 边框
    textareaBorder: {
      type: Boolean,
      value: false
    },
    // 是否显示上边框
    borderTop: {
      type: Boolean,
      value: true
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
      value: 0
    },
    //下边框right值，单位rpx
    bottomRight: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //边框颜色，默认边框颜色可通过css变量修改
    borderColor: {
      type: String,
      value: ''
    },
    radius: {
      type: String,
      optionalTypes:[Number],
      value: 0,
      observer(val){
        this.setData({
          isRadius:val && val !== true && Number(val) > 0?true:false
        })
      }
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
      value: '32rpx'
    },
    //输入框背景颜色
    backgroundColor: {
      type: String,
      value: '#FFFFFE'
    },
    //输入框margin-top值 rpx
    marginTop: {
      type: Number,
      value: 0
    },
    //是否显示底部输入长度计数
    isCounter: {
      type: Boolean,
      value: false
    },
    //计数文本颜色
    counterColor: {
      type: String,
      value: '#B2B2B2'
    },
    //计数文本大小 rpx
    counterSize: {
      type: Number,
      optionalTypes: [String],
      value: 28
    }
  },
  data: {
    placeholderStyl: '',
    count: 0,
    focused: false,
    val: '',
    isRadius: false,
    c_dangerColor:(wx.$fui && wx.$fui.color.danger) || '#FF2B2B'
  },
  lifetimes: {
    attached: function () {
      let val =this.getVal(this.data.value);
      const len = this.getCount(String(val).length)
      this.setData({
        count: len,
        val: val
      })
      this.fieldPlaceholderStyle()
    },
    ready: function () {
      if (this.data.radius && this.data.radius !== true && Number(this.data.radius) > 0) {
        this.setData({
          isRadius:true
        })
			}
      setTimeout(() => {
        this.setData({
          focused: this.data.focus
        })
      }, 120)
    }
  },
  methods: {
    getVal(val) {
      return !val && val !== 0 ? '' : val
    },
    fieldPlaceholderStyle() {
      if (this.data.placeholderStyle) {
        this.setData({
          placeholderStyl: this.data.placeholderStyle
        })
      } else {
        this.setData({
          placeholderStyl: `font-size:${this.data.size}rpx`
        })
      }
    },
    getCount(len) {
      const max = Number(this.data.maxlength)
      return len > max && max!==-1 ? max : len
    },
    onInput(event) {
      let value = event.detail.value;
      if (this.data.trim) value = this.trimStr(value);
      let len = value.length;
      const max = Number(this.data.maxlength)
      if (len > max && max !== -1) {
        len = max;
        value = value.substring(0, max - 1)
      }
      this.setData({
        count: len,
        val: value,
        value: value
      })
      this.triggerEvent('input', value)
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
    fieldClick() {
      this.triggerEvent('click', {
        name: this.data.name
      });
    },
    onLinechange(e) {
      this.triggerEvent('linechange', e.detail)
    },
    onKeyboardheightchange(e) {
      this.triggerEvent('keyboardheightchange', e.detail)
    },
    trimStr(str) {
      return str.replace(/^\s+|\s+$/g, '');
    }
  }
})