Component({
  properties: {
    //small、value、large
    size: {
      type: String,
      value: ''
    },
    gap: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    background: {
      type: String,
      value: ''
    },
    radius: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    marginTop: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    marginBottom: {
      type: String,
      optionalTypes: [Number],
      value: 0
    }
  },
  data: {
    c_size: (wx.$fui && wx.$fui.fuiWingBlank && wx.$fui.fuiWingBlank.size) || 'default',
    c_gap: (wx.$fui && wx.$fui.fuiWingBlank && wx.$fui.fuiWingBlank.gap) || 0,
    c_background: (wx.$fui && wx.$fui.fuiWingBlank && wx.$fui.fuiWingBlank.background) || 'transparent'
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {})
    }
  }
})