let relations = {};
const children = [
  'fui-radio',
  'fui-checkbox',
  'fui-switch'
]
children.map((name) => {
  relations[`../${name}/${name}`] = {
    type: 'descendant',
    linked: function (target) {
      this.data.childrens.push(target)
    }
  }
})
Component({
  properties: {
    //padding值
    padding: {
      type: String,
      value: "0"
    },
    //margin值
    margin: {
      type: String,
      value: "0"
    },
    full: {
      type: Boolean,
      value: false
    }
  },
  relations: {
    ...relations
  },
  data: {
    childrens: []
  },
  methods: {
    onClick() {
      if (this.data.childrens && this.data.childrens.length > 0) {
        for (let child of this.data.childrens) {
          child.labelClick()
        }
      }
    }
  }
})