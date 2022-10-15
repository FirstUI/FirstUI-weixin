Component({
  options: {
    multipleSlots: true
  },
  properties: {
    value: {
      type: Number,
      optionalTypes: [String],
      value: 1,
      observer(val) {
        if (val != this.data.inputValue) {
          this.setData({
            inputValue: this.getValue(val)
          })
        }
      }
    },
     //number、text（主要用与输入负号）
    type: {
      type: String,
      value: 'number'
    },
    //最小值
    min: {
      type: Number,
      value: 1
    },
    //最大值
    max: {
      type: Number,
      value: 99
    },
    //每次点击改变的间隔大小
    step: {
      type: Number,
      value: 1
    },
    //是否禁用操作
    disabled: {
      type: Boolean,
      value: false
    },
    //加减号宽度，单位rpx
    signWidth: {
      type: Number,
      optionalTypes: [String],
      value: 24
    },
    //加减号颜色
    signColor: {
      type: String,
      value: '#181818'
    },
    //input高度，单位rpx
    height: {
      type: Number,
      optionalTypes: [String],
      value: 40
    },
    //input宽度，单位rpx
    width: {
      type: Number,
      optionalTypes: [String],
      value: 80
    },
    //input圆角，单位rpx
    radius: {
      type: Number,
      optionalTypes: [String],
      value: 8
    },
    size: {
      type: Number,
      value: 26
    },
    //input 背景颜色
    backgroundColor: {
      type: String,
      value: '#EEEEEE'
    },
    //input 字体颜色
    color: {
      type: String,
      value: '#181818'
    },
    //输入框margin-left，margin-right值
    margin: {
      type: Number,
      optionalTypes: [String],
      value: 16
    },
    //是否自定义加减号，为true则去除默认加减号，使用插槽自定义
    custom: {
      type: Boolean,
      value: false
    },
    //索引值，列表中使用
    index: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    //自定义参数
    params: {
      type: Number,
      optionalTypes: [String],
      value: 0
    }
  },
  observers: {
    'inputValue':function(newVal,oldVal){
      if(!isNaN(Number(newVal)) && Number(newVal) !== Number(oldVal)){
        const val = this.getValue(+newVal)
        this.triggerEvent("change", {
          value: val, 
          index: this.data.index,
          params: this.data.params
        });
        this.setData({
          value: val,
          oldValue:val
        })
      }
    }
  },
  data: {
    inputValue: 0,
    oldValue:0
  },
  lifetimes: {
    attached: function () {
      this.setData({
        inputValue: this.getValue(this.data.value)
      })
    }
  },
  methods: {
    bindinput(e){},
    getScale(val, step) {
      let scale = 1;
      let scaleVal = 1;
      //浮点型
      if (!Number.isInteger(step)) {
        scale = Math.pow(10, (step + '').split('.')[1].length);
      }
      if (!Number.isInteger(val)) {
        scaleVal = Math.pow(10, (val + '').split('.')[1].length);
      }
      return Math.max(scale, scaleVal);
    },
    getValue(val) {
      val = Number(val)
      if (val < this.data.min) {
        val = this.data.min
      } else if (val > this.data.max) {
        val = this.data.max
      }
      return val
    },
    calcNum: function (type) {
      if (this.data.disabled || (this.data.inputValue == this.data.min && type === 'reduce') || (this.data.inputValue == this.data
          .max && type === 'plus')) return;
      const scale = this.getScale(Number(this.data.inputValue), Number(this.data.step));

      let num = Number(this.data.inputValue) * scale;
      let step = this.data.step * scale;
      if (type === 'reduce') {
        num -= step;
      } else if (type === 'plus') {
        num += step;
      }
      let value = Number((num / scale).toFixed(String(scale).length - 1));
      if (value < this.data.min) {
        value = this.data.min;
      } else if (value > this.data.max) {
        value = this.data.max;
      }
      this.setData({
        inputValue: value.toString()
      })
    },
    plus: function () {
      this.calcNum('plus');
    },
    minus: function () {
      this.calcNum('reduce');
    },
    blur: function (e) {
      let value = e.detail.value;
      if (value && !isNaN(Number(value))) {
        if (~value.indexOf('.') && Number.isInteger(this.data.step) && Number.isInteger(Number(value))) {
          value = value.split('.')[0];
        }
        value = this.getValue(value)
      } else {
        value = this.data.oldValue;
      }
      setTimeout(() => {
        e.detail.value = value
        this.triggerEvent('blur', e.detail)
        this.setData({
          inputValue: value
        })
      }, this.data.type === 'text' ? 100 : 0)
    }
  }
})