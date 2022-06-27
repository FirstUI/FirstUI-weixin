Page({
  data: {
    text: 'First UI是一套超高性能、超高颜值的移动端UI综合解决方案，包含业内顶尖的组件库、强大的功能库、丰富精美的模板库，提供uni-app(完美支持nvue)、微信小程序、支付宝小程序等版本，兼顾高效率与高性能，让您的开发获得百倍提质提速！'
  },
  handleClick(e) {
    console.log(e.detail)
    wx.fui.toast('点击了~');
  }
})