import utils from '../../../../components/firstui/fui-utils/index';
Page({
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
  }
})