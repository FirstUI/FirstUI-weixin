Component({
  properties: {
    //是否为flex布局
    isFlex: {
      type: Boolean,
      value: false,
      observer(val) {
        this.setData({
          flex: val
        })
      }
    },
    //flex 布局下的水平排列方式 start/end/center/space-around/space-between
    justify: {
      type: String,
      value: 'start'
    },
    //flex 布局下的垂直排列方式	top/middle/bottom
    align: {
      type: String,
      value: 'top'
    },
    marginTop: {
      type: String,
      value: '0'
    },
    marginBottom: {
      type: String,
      value: '0'
    },
    //栅格间隔 rpx
    gutter: {
      type: Number,
      value: 0,
      observer(val) {
        this.childChange(val)
      }
    }
  },
  relations: {
    '../fui-col/fui-col': {
      type: 'descendant',
      linked: function (target) {
        this.data.children.push(target)
      }
    }
  },
  data: {
    flex: false,
    children: []
  },
  lifetimes: {
    attached: function () {
      this.setData({
        flex: this.data.isFlex
      })
    }
  },
  methods: {
    childChange(val) {
      this.data.children.forEach((item, index) => {
        item.updateGutter(val)
      })
    }
  }
})