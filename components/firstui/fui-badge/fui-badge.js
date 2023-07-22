Component({
  properties: {
    value: {
      type: String,
      optionalTypes: [Number],
      value: '',
      observer(val) {
        this.getWidth()
      }
    },
    max:{
      type: String,
      optionalTypes: [Number],
      value: -1
    },
    //类型：primary，success，warning，danger，purple，white
    type: {
      type: String,
      value: 'primary'
    },
    //背景色，如果设置背景则type失效
    background: {
      type: String,
      value: ''
    },
    //字体颜色
    color: {
      type: String,
      value: '#FFFFFF'
    },
    //是否显示为圆点
    dot: {
      type: Boolean,
      value: false
    },
    //margin-top值，单位rpx
    marginTop: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //margin-left值，单位rpx
    marginLeft: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //margin-right值，单位rpx
    marginRight: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //是否绝对定位
    absolute: {
      type: Boolean,
      value: false
    },
    top: {
      type: String,
      value: '-8rpx'
    },
    right: {
      type: String,
      value: '-18rpx'
    },
    //缩放比例
    scaleRatio: {
      type: Number,
      value: 1
    }
  },
  data: {
    width: 0,
    showValue: ''
  },
  lifetimes: {
    ready() {
      this.getWidth()
    }
  },
  methods: {
    _getTextWidth(text) {
      let sum = 0;
      for (let i = 0, len = text.length; i < len; i++) {
        if (text.charCodeAt(i) >= 0 && text.charCodeAt(i) <= 255)
          sum = sum + 1;
        else
          sum = sum + 2;
      }
      const sys = wx.getSystemInfoSync()
      const px = sys.windowWidth / 750 * (text.length > 1 ? 32 : 24)
      var strCode = text.charCodeAt();
      let multiplier = 12;
      if (strCode >= 65 && strCode <= 90) {
        multiplier = 15;
      }
      return (sum / 2 * multiplier) + px + 'px';
    },
    getWidth() {
        let max = Number(this.data.max)
				let val = Number(this.data.value)
				let value = ''
				if (val === NaN || max === -1) {
					value = this.data.value
				} else {
					value = val > max ? `${max}+` : val
				}
      let width = this.data.dot ? '8px' : this._getTextWidth(String(value))
      this.setData({
        showValue:value,
        width: width
      })
    },
    handleClick() {
      this.triggerEvent('click');
    }
  }
})