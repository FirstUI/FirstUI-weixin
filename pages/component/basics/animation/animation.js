Page({
  data: {
    show: false,
    mode: ['fade'],
    styles: {
      position: 'fixed',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }
  },
  ani(e) {
    let type = Number(e.currentTarget.dataset.type)
    let mode, mask = false;
    switch (type) {
      case 1:
        mode = ['fade']
        mask = true
        break;
      case 2:
        mode = ['slide-top']
        break;
      case 3:
        mode = ['slide-left']
        break;
      case 4:
        mode = ['slide-right']
        break;
      case 5:
        mode = ['slide-bottom']
        break;
      case 6:
        mode = ['zoom-in', 'fade']
        break;
      case 7:
        mode = ['zoom-out', 'fade']
        break;
      case 8:
        mode = ['slide-left', 'slide-top', 'fade']
        break;
      default:
        break;
    }
    let styles = this.data.styles

    if (mask) {
      styles.backgroundColor = 'rgba(0,0,0,0.6)'
    } else {
      styles.backgroundColor = 'rgba(0,0,0,0)'
    }
    this.setData({
      styles: styles
    })

    setTimeout(() => {
      this.setData({
        mode: mode
      }, () => {
        this.setData({
          show: !this.data.show
        })
      })
    }, 80);
  },
  handleClick() {
    this.setData({
      show: false
    })
  },
  change(e) {
    console.log(e);
  }
})