import icons from './index.js';
Component({
  properties: {
    name: {
      type: String,
      value: ''
    },
    size: {
      type: Number,
      optionalTypes: [String],
      value: 64
    },
    //rpx | px
    unit: {
      type: String,
      value: 'rpx'
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
    }
  },
  data: {
    icons: icons
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