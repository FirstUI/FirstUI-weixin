import utils from '../../../../components/firstui/fui-utils/index';
Page({
  data: {
    num: 0
  },
  onLoad() {
    this.throttle = utils.throttle(() => {
      this.setData({
        num: this.data.num + 1
      })
    }, 3000)
  },
  titleCase() {
    const text = 'english';
    const val = utils.titleCase(text);
    console.log(val);
    wx.fui.toast(val)
  },
  compressLetter() {
    const text = 'aabbbcddddddddd';
    const val = utils.compressLetter(text);
    console.log(val);
    wx.fui.toast(val)
  },
  sleep() {
    utils.sleep(1000)
    wx.fui.toast('1000ms后执行！')
  },
  trim() {
    const text = ' abcd ';
    const val = utils.trim(text);
    console.log(val);
    wx.fui.toast(`字符串${val}`)
  },
  trimAll() {
    const text = ' a b c d ';
    const val = utils.trimAll(text);
    console.log(val);
    wx.fui.toast(`字符串${val}`)
  },
  replaceAll() {
    const text = '##a###b#######c#';
    const val = utils.replaceAll(text, '#', '');
    console.log(val);
    wx.fui.toast(val)
  },
  numberFormatter() {
    const text = '15715600012';
    const val = utils.numberFormatter(text);
    console.log(val);
    wx.fui.toast(val)
  },
  moneyFormatter() {
    const text = '2021';
    const val = utils.moneyFormatter(text);
    console.log(val);
    wx.fui.toast(val)
  },
  dateFormatter(e) {
    const type = Number(e.currentTarget.dataset.type)
    const date = '2023-10-30 22:36:15'
    // y-m-d h:i:s
    const format = ['y-m-d h:i', 'y/m/d', 'm-d', 'h:i', 'i:s','y年m月d日 h时i分s秒'][type - 1]
    const val = utils.dateFormatter(date, format);
    console.log(val)
    wx.fui.toast(val)
  },
  dateFormatAgo() {
    const date = '2023-10-15 22:56:15'
    const val = utils.formatTimeAgo(date)
    console.log(val)
    wx.fui.toast(val)
  },
  btnThrottle() {
    this.throttle()
  }
})