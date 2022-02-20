Component({
  behaviors: ['wx://form-field-group'],
  properties: {
    //开关选择器名称
    name: {
      type: String,
      value: ''
    },
    checked: {
      type: Boolean,
      value: false,
      observer(val) {
        this.setData({
          val: val
        })
      }
    },
    disabled: {
      type: Boolean,
      value: false
    },
    //样式，有效值：switch, checkbox
    type: {
      type: String,
      value: 'switch'
    },
    //switch选中颜色
    color: {
      type: String,
      value: ''
    },
    //边框颜色，type=checkbox时生效
    borderColor: {
      type: String,
      value: '#ccc'
    },
    //对号颜色，type=checkbox时生效
    checkMarkColor: {
      type: String,
      value: '#fff'
    },
    scaleRatio: {
      type: Number,
      optionalTypes: [String],
      value: 1
    }
  },
  relations: {
    '../fui-label/fui-label': {
      type: 'ancestor'
    }
  },
  data: {
    val: false
  },
  lifetimes: {
    attached: function () {
      this.setData({
        val: this.data.checked
      })
    }
  },
  methods: {
    change(e, label) {
      const parent = this.getRelationNodes('../fui-label/fui-label')[0]
      if (parent && !label) return;
      this.setData({
        val: e.detail.value
      })
      this.triggerEvent('change', e.detail)
    },
    labelClick() {
      if (this.data.disabled) return;
      let e = {
        detail: {
          value: !this.data.val
        }
      }
      this.change(e, true)
    }
  }
})