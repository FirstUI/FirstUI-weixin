const elemId = `fui_${Math.ceil(Math.random() * 10e5).toString(36)}`
Component({
  properties: {
    // 每行显示个数
    columns: {
      type: Number,
      value: 3,
      observer(val) {
        this.init()
      }
    },
    // 是否显示边框
    showBorder: {
      type: Boolean,
      value: true,
      observer(val) {
        this.childChange()
      }
    },
    // 边框颜色 仅nvue有效
    borderColor: {
      type: String,
      value: '#EEEEEE'
    },
    // 是否正方形显示,默认为 true
    square: {
      type: Boolean,
      value: true
    }
  },
  relations: {
    '../fui-grid-item/fui-grid-item': {
      type: 'descendant',
      linked: function (target) {
        this.data.children.push(target)
      }
    }
  },
  data: {
    elemId: elemId,
    width: 0,
    height: 0,
    children: [],
    isShow: false
  },
  lifetimes: {
    attached:function(){
      this.setData({
        width: (100 / this.data.columns) + '%'
      })
      this.init()
    }
  },
  methods: {
    init() {
        this.getWidth((width, height) => {
          this.data.children.forEach((item, index) => {
            item.setData({
              width: width,
              height: height
            })
          })
          this.setData({
            isShow: true
          })
        })
    },
    childChange() {
      this.data.children.forEach((item, index) => {
        item.setData({
          showBorder: this.data.showBorder
        })
      })
    },
    handleClick(e) {
      this.triggerEvent('click', e)
    },
    getWidth(fn) {
      if (this.data.square) {
        wx.createSelectorQuery()
          .in(this)
          .select(`#${this.data.elemId}`)
          .boundingClientRect()
          .exec(ret => {
            const width = Number((ret[0].width - 1) / this.data.columns) + 'px'
            this.setData({
              height: width
            })
            fn(this.data.width, this.data.height)
          })
      } else {
        fn(this.data.width, this.data.height)
      }
    }
  }
})