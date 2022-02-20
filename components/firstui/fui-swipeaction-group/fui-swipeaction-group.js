Component({
  data: {
    children: []
  },
  relations: {
    '../fui-swipe-action/fui-swipe-action': {
      type: 'descendant',
      linked: function (target) {
        this.data.children.push(target)
      }
    }
  },
  methods: {
    close() {
      this.data.children.forEach(child => {
        child.setData({
          isShow: false
        })
      })
    },
    closeAuto(child) {
      this.data.children.forEach(item => {
        if (item !== child) {
          item.setData({
            isShow: false
          })
        }
      })
    }
  }
})