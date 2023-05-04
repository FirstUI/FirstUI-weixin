Component({
  options: {
    virtualHost: true
  },
  properties: {
    //是否有点击效果
    highlight: {
      type: Boolean,
      value: true
    },
    backgroundColor: {
      type: String,
      value: 'transparent'
    },
    //索引
    index: {
      type: Number,
      value: 0
    }
  },
  relations: {
    '../fui-grid/fui-grid': {
      type: 'ancestor',
      linked: function (target) {
        this.data.grid = target
        this.init()
      }
    }
  },
  data: {
    columns: 0,
    showBorder: true,
    width: 0,
    height: 0,
    borderColor: '#eaeef1',
    grid: null
  },
  lifetimes: {
    detached: function () {
      if (this.data.grid && this.data.grid.children) {
        this.data.grid.children.forEach((item, index) => {
          if (item === this) {
            this.data.grid.children.splice(index, 1)
          }
        })
      }
    }
  },
  methods: {
    init() {
      if (this.data.grid) {
        let grid = this.data.grid
        this.setData({
          columns: grid.data.columns,
          showBorder: grid.data.showBorder,
          borderColor: grid.data.borderColor,
          width: grid.data.width,
          height: grid.data.height
        })
      }
    },
    handleClick() {
      if (this.data.grid) {
        this.data.grid.handleClick({
          index: this.data.index
        })
      }
      this.triggerEvent('click', {
        index: this.data.index
      })
    }
  }
})