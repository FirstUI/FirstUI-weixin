const fui = { 
	toast: function(text) {
		text && wx.showToast({
			title: text,
			icon: 'none',
			duration: 2000
		})
	},
	modal: function(title, content, callback, showCancel, confirmColor, confirmText) {
		wx.showModal({
			title: title,
			content: content,
			showCancel: showCancel || false,
			cancelColor: "#7F7F7F",
			confirmColor: confirmColor || "#465CFF",
			confirmText: confirmText || "确定",
			success(res) {
				if (res.confirm) {
					callback && callback(true)
				} else {
					callback && callback(false)
				}
			},
			fail(err){
				console.log(err)
			}
		})
	},
	href(url, isMain) {
		if (isMain) {
			wx.switchTab({
				url: url
			})
		} else { 
			wx.navigateTo({
				url: url
			});
		}
	},
	resUrl:function(){
		return 'https://res.firstui.cn/static/images'
	},
	rpx2px(value){
		let sys=wx.getSystemInfoSync()
		return sys.windowWidth / 750 * value
	}
}
export default fui
