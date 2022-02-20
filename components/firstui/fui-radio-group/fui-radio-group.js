Component({
  behaviors: ['wx://form-field-group'],
  properties: {
    name: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: '',
      observer(val) {
        this.modelChange(val)
      }
    }
  },
  relations: {
    '../fui-radio/fui-radio': {
      type: 'descendant',
      linked: function (target) {
        this.data.childrens.push(target)
        if (this.data.value) {
          target.setData({
            val: this.data.value === target.data.value
          })
        }
      }
    }
  },
  data: {
    val: '',
    childrens: []
  },
  methods: {
    radioChange(e) {
      this.triggerEvent('change', e)
      this.setData({
        value: e.value
      })
    },
    changeValue(value, target) {
      this.setData({
        val: value
      })
      this.data.childrens.forEach(item => {
        if (item !== target) {
          item.setData({
            val: false
          })
        }
      })
      let e = {
        value: value
      }
      this.radioChange(e)
    },
    modelChange(val) {
      this.data.childrens.forEach(item => {
        if (item.data.value === val) {
          item.setData({
            val: true
          })
        } else {
          item.setData({
            val: false
          })
        }
      })
    }
  }
})