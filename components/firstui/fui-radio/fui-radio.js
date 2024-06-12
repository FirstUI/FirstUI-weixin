Component({
  options: {
    virtualHost: true
  },
  properties: {
    value: {
      type: String,
      optionalTypes: [Number],
      value: ''
    },
    checked: {
      type: Boolean,
      value: false,
      observer(newVal) {
        this.setData({
          val: newVal
        })
      }
    },
    disabled: {
      type: Boolean,
      value: false
    },
    //radio选中背景颜色
    color: {
      type: String,
      value: ''
    },
    //radio未选中时边框颜色
    borderColor: {
      type: String,
      value: '#ccc'
    },
    borderRadius: {
      type: String,
      value: '50%'
    },
    //是否只展示对号，无边框背景
    isCheckMark: {
      type: Boolean,
      value: false
    },
    //对号颜色
    checkMarkColor: {
      type: String,
      value: '#fff'
    },
    dotColor: {
      type: String,
      value: ''
    },
    scaleRatio: {
      type: String,
      optionalTypes: [Number],
      value: 1
    },
    styleType: {
      type: String,
      optionalTypes: [Number],
      value: 1
    }
  },
  relations: {
    '../fui-radio-group/fui-radio-group': {
      type: 'ancestor'
    },
    '../fui-label/fui-label': {
      type: 'ancestor'
    }
  },
  data: {
    val: false
  },
  observers: {
    'val': function (newVal) {
      const group = this.getRelationNodes('../fui-radio-group/fui-radio-group')[0]
      if (newVal && group) {
        group.changeValue(this.data.value, this);
      }
    }
  },
  lifetimes: {
    attached: function () {
      const group = this.getRelationNodes('../fui-radio-group/fui-radio-group')[0]
      if (group && group.data.value) {
        this.setData({
          val: this.data.value === group.data.value
        })
      } else {
        this.setData({
          val: this.data.checked
        })
      }
    },
    detached: function () {
      this.unInstall()
    }
  },
  methods: {
    unInstall() {
      const group = this.getRelationNodes('../fui-radio-group/fui-radio-group')[0]
      if (group) {
        group.data.childrens.forEach((item, index) => {
          if (item === this) {
            group.data.childrens.splice(index, 1)
          }
        })
      }
    },
    radioChange(e) {
      if (this.data.disabled || this.data.val) return;
      this.setData({
        val: true
      })
      this.triggerEvent('change', {
        checked: this.data.val,
        value: this.data.value
      })
    },
    labelClick() {
      this.radioChange()
    }
  }
})