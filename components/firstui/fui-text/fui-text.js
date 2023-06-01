Component({
  options: {
    virtualHost: true,
    multipleSlots: true
  },
  properties: {
     //样式类型：primary，success， warning，danger，purple，gray，black
			type: {
				type: String,
				value: 'black'
			},
			text: {
        type: String,
        optionalTypes:[Number],
				value: ''
			},
			size: {
        type: String,
        optionalTypes:[Number],
				value: 0
			},
			//rpx | px
			unit: {
				type: String,
				value: ''
			},
			color: {
				type: String,
				value: ''
			},
			fontWeight: {
        type: String,
        optionalTypes:[Number],
				value: 400
			},
			//left、center、right
			align: {
				type: String,
				value: 'left'
			},
			//none、 underline、line-through 
			decoration: {
				type: String,
				value: 'none'
			},
			//是否将行高设置与字体大小一致
			lineHeight: {
				type: Boolean,
				value: false
			},
			padding: {
				type: String,
				value:'0'
			},
			block: {
				type: Boolean,
				value: false
			},
			//文本类型：text、mobile、amount、name
			textType: {
				type: String,
				value: 'text'
			},
			//是否格式化，仅mobile、amount时有效
			format: {
				type: Boolean,
				value: false
			},
			call: {
				type: Boolean,
				value: false
			},
			//文本是否可选
			userSelect: {
				type: Boolean,
				value: false
			},
			//是否解码：微信小程序
			decode: {
				type: Boolean,
				value: false
			},
			//是否有点击效果
			highlight: {
				type: Boolean,
				value: false
			},
			disable: {
				type: Boolean,
				value: false
			},
			unShrink: {
				type: Boolean,
				value: false
			},
			param: {
        type: String,
        optionalTypes:[Number],
				value: ''
			}
  },
  data: {
     textValue:'',
     c_size: (wx.$fui && wx.$fui.fuiText.size) || 32,
     c_unit: (wx.$fui && wx.$fui.fuiText.unit) || 'rpx',
  },
  observers:{
     'text,textType,format':function(){
        this.getText()
     }
  },
  lifetimes:{
    attached:function(){
      this.getText()
    }
  },
  methods: {
    getText() {
      let text = this.data.text || ''
      let textType=this.data.textType
      let format=this.data.format
      let _text = text
      if (format) {
        if (textType === 'mobile') {
          _text = this.numberFormatter(text)
        } else if (textType === 'amount') {
          _text = this.moneyFormatter(text)
        } else if (textType === 'name') {
          _text = this.nameFormatter(text)
        }
      }
     this.setData({
       textValue: _text
     })
    },
    numberFormatter(num) {
      return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2') : num;
    },
    moneyFormatter(money) {
      return parseFloat(money).toFixed(2).toString().split('').reverse().join('').replace(/(\d{3})/g, '$1,')
        .replace(
          /\,$/, '').split('').reverse().join('');
    },
    trimAll(value) {
      return value.toString().replace(/\s+/g, "")
    },
    nameFormatter(name) {
      let _name = this.trimAll(name || '')
      if (_name && _name.length >= 2) {
        const arr = _name.split('')
        _name = arr[0] + '*'
        if (arr.length > 2) {
          _name = _name + arr[arr.length - 1]
        }
      }
      return _name
    },
    handleTap() {
      if (this.data.disable) return;
      this.triggerEvent('click', {
        text: this.data.text,
        param: this.data.param
      })
      if (this.data.call) {
        wx.makePhoneCall({
          phoneNumber: this.data.text
        })
      }
    }
  }
})
