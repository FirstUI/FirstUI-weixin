Component({
  behaviors: ['wx://form-field-group'],
  properties: {
    name: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: "[]",
      observer(vals) {
        this.modelChange(vals)
      }
    }
  },
  relations: {
    '../fui-checkbox/fui-checkbox': {
      type: 'descendant',
      linked: function (target) {
        this.data.childrens.push(target)
        let vals = JSON.parse(this.data.value || '[]')
        if (vals.length > 0) {
          target.setData({
            val: vals.includes(target.data.value)
          })
        }
      }
    }
  },
  data: {
    vals: '[]',
    childrens: []
  },
  methods: {
    checkboxChange(e) {
      this.setData({
        value: JSON.stringify(e.value)
      })
      this.triggerEvent('change', e)
    },
    changeValue(checked, target) {
      let vals = []
      this.data.childrens.forEach(item => {
        if (item.data.val) {
          vals.push(item.data.value);
        }
      })
      this.setData({
        vals: vals
      })
      let e = {
        value: vals
      }
      this.checkboxChange(e)
    },
    modelChange(vals) {
      this.data.childrens.forEach(item => {
        if (vals.includes(item.data.value)) {
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