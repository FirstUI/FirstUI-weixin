Component({
  properties: {
    //small、default、large 默认优先使用全局配置
    size: {
      type: String,
      value: ''
    },
    height: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    background: {
      type: String,
      value: ''
    }
  },
  data: {
    c_size: (wx.$fui && wx.$fui.fuiWhiteSpace && wx.$fui.fuiWhiteSpace.size) || 'default',
    c_height: (wx.$fui && wx.$fui.fuiWhiteSpace && wx.$fui.fuiWhiteSpace.height) || 0,
    c_background: (wx.$fui && wx.$fui.fuiWhiteSpace && wx.$fui.fuiWhiteSpace.background) || 'transparent'
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {})
    }
  }
})