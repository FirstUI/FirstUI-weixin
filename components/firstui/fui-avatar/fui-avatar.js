Component({
  properties: {
    src: {
      type: String,
      value: '',
      observer(val){
        if(val){
          this.setData({
            showImg: val
          })
        }
      }
    },
    errorSrc: {
      type: String,
      value: ''
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    //微信小程序、百度小程序、字节跳动小程序
    //图片懒加载。只针对page与scroll-view下的image有效
    lazyLoad: {
      type: Boolean,
      value: true
    },
    //默认不解析 webP 格式，只支持网络资源 微信小程序2.9.0
    webp: {
      type: Boolean,
      value: false
    },
    background: {
      type: String,
      value: '#D1D1D1'
    },
    //small（64）、middle（96）、large（128）
    size: {
      type: String,
      value: 'middle'
    },
    //图片宽度，设置大于0的数值生效，默认使用size
    width: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //默认等宽，设置图大于0的数值且设置了图片宽度生效
    height: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    //指定头像的形状，可选值为 circle、square
    shape: {
      type: String,
      value: 'circle'
    },
    //图片圆角值，默认使用shape，当设置大于等于0的数值，shape失效
    radius: {
      type: String,
      optionalTypes: [Number],
      value: -1
    },
    //没有src时可以使用文本代替
    text: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '#fff'
    },
    //默认使用size下字体大小
    fontSize: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    fontWeight: {
      type: String,
      optionalTypes: [Number],
      value: 600
    },
    marginRight: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    marginBottom: {
      type: String,
      optionalTypes: [Number],
      value: 0
    },
    block: {
      type: Boolean,
      value: false
    },
    //在列表中的索引值
    index: {
      type: Number,
      value: 0
    },
    //其他参数
    params: {
      type: String,
      optionalTypes: [Number],
      value: 0
    }
  },
  data:{
    showImg:''
  },
  lifetimes:{
      attached:function(){
        if(this.data.src){
          this.setData({
            showImg: this.data.src
          })
        }
      }
  },
  methods: {
    handleError(e) {
      if (this.data.src) {
        if(this.data.errorSrc){
          this.setData({
            showImg: this.data.errorSrc
          })
        }
        this.triggerEvent('error', {
          index: this.data.index,
          params: this.data.params
        })
      }
    },
    handleClick() {
      this.triggerEvent('click', {
        index: this.data.index,
        params: this.data.params
      })
    }
  }
})