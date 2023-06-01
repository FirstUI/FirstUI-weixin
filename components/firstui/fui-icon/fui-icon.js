import icons from './index.js';
Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    name: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      optionalTypes: [String],
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
    //字重
    fontWeight: {
      type: Number,
      optionalTypes: [String],
      value: 'normal'
    },
    //是否禁用点击
    disabled: {
      type: Boolean,
      default: false
    },
    params: {
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    customPrefix: {
      type: String,
      value: ''
    },
    //是否显示为主色调，color为空时有效。【内部使用】
    primary: {
      type: Boolean,
      value: false
    }
  },
  data: {
    icons: icons,
    c_size: (wx.$fui && wx.$fui.fuiIcon.size) || 64,
    c_unit: (wx.$fui && wx.$fui.fuiIcon.unit) || 'rpx'
  },
  methods: {
    handleClick() {
      if (this.data.disabled) return;
      this.triggerEvent('click', {
        params: this.data.params
      });
    }
  }
})