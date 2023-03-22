import fui from './common/fui-app.js'
wx.fui = fui
App({
  onLaunch() {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            wx.fui.modal('更新提示', '发现新版本，为了获得更好的体验，建议立即更新', (res) => {
              updateManager.applyUpdate();
            });
          });
          updateManager.onUpdateFailed(() => {
            wx.fui.modal('更新失败', '新版本更新失败，请稍后再试或删除小程序重新搜索打开',
              (res) => {});
          });
        }
      });
    }
  },
  globalData: {
    version: "1.9.0"
  }
})