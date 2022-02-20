Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    background: {
      type: String,
      value: ''
    },
    absolute: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: Number,
      value: 999
    },
    closable: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    handleClick() {
      if (this.data.closable && this.data.show) {
        this.triggerEvent('click')
      }
    }
  }
})