Page({
  data: {
    text: '',
    password: true
  },
  input(e) {
    console.log(e)
  },
  change() {
    this.setData({
      password:!this.data.password
    })
  }
})