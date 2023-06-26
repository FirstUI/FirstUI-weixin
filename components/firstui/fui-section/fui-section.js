const app = wx.$fui && wx.$fui.fuiSection;
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: ''
    },
    //默认使用全局配置值
    size: {
      type: String,
      optionalTypes:[Number],
      value: 0
    },
    lineHeight: {
      type: String,
      optionalTypes:[Number],
      value: 0
    },
    color: {
      type: String,
      value: ''
    },
    fontWeight: {
      type: String,
      optionalTypes:[Number],
      value: 0
    },
    descr: {
      type: String,
      value: ''
    },
    descrSize: {
      type: String,
      optionalTypes:[Number],
      value: 0
    },
    descrColor: {
      type: String,
      value: ''
    },
    descrTop: {
      type: String,
      optionalTypes:[Number],
      value: 0
    },
    isLine: {
      type: Boolean,
      value: false
    },
    lineWidth: {
      type: String,
      value: '2px'
    },
    lineColor: {
      type: String,
      value: ''
    },
    //square、circle
    lineCap: {
      type: String,
      value: 'circle'
    },
    //nvue android端不支持负数
    lineRight: {
      type: String,
      optionalTypes:[Number],
      value: 16
    },
    lineGap: {
      type: String,
      optionalTypes:[Number],
      value: 0
    },
    background: {
      type: String,
      value: 'transparent'
    },
    padding: {
      type: String,
      value: '0 32rpx'
    },
    marginTop: {
      type: String,
      optionalTypes:[Number],
      value: 0
    },
    marginBottom: {
      type: String,
      optionalTypes:[Number],
      value: 0
    }
  },
  data: {
    c_size:(app && app.size) || 32,
    c_color:(app && app.color) || '#181818',
    c_weight:(app && app.fontWeight) || 600,
    c_descrsize:(app && app.descrSize) || 28,
    c_descrcolor:(app && app.descrColor) || '#B2B2B2',
    c_descrtop: (app && app.descrTop) || 12
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {
        title: this.data.title
      })
    }
  }
})
