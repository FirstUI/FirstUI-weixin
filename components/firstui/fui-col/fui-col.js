Component({
  options: {
    virtualHost: true
  },
  properties: {
    //栅格占据的列数
    span: {
      type: Number,
      value: 24,
      observer(val) {
        this.updateCol();
      }
    },
    //栅格左侧的间隔格数
    offset: {
      type: Number,
      value: 0,
      observer(val) {
        this.updateCol();
      }
    },
    //栅格向右移动格数
    pushLeft: {
      type: Number,
      value: -1,
      observer(val) {
        this.updateCol();
      }
    },
    //栅格向左移动格数
    pullRight: {
      type: Number,
      value: -1,
      observer(val) {
        this.updateCol();
      }
    },
    //max-width:767px 响应式栅格数或者栅格属性对象
    //Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
    xs: {
      type: Number,
      optionalTypes: [Object],
      value: -1
    },
    //max-width:768px 响应式栅格数或者栅格属性对象
    sm: {
      type: Number,
      optionalTypes: [Object],
      value: -1
    },
    //max-width:992px 响应式栅格数或者栅格属性对象
    md: {
      type: Number,
      optionalTypes: [Object],
      value: -1
    },
    //max-width:1200px 响应式栅格数或者栅格属性对象
    lg: {
      type: Number,
      optionalTypes: [Object],
      value: -1
    },
    //max-width:1920px 响应式栅格数或者栅格属性对象
    xl: {
      type: Number,
      optionalTypes: [Object],
      value: -1
    }
  },
  relations: {
    '../fui-row/fui-row': {
      type: 'ancestor',
      linked: function (target) {
        this.updateGutter(target.data.gutter)
      }
    }
  },
  data: {
    classList: 'fui-col',
    gutter: 0,
    right: 0,
    left: 0
  },
  lifetimes: {
    attached: function () {
      this.updateCol();
    }
  },
  methods: {
    updateGutter(parentGutter) {
      parentGutter = Number(parentGutter);
      if (!isNaN(parentGutter)) {
        this.setData({
          gutter: parentGutter / 2
        })
      }
    },
    updateCol() {
      let classList = ['fui-col'];
      classList.push('fui-col-' + this.data.span);
      classList.push('fui-col-offset-' + this.data.offset);
      if (this.data.pushLeft !== -1) {
        this.data.pushLeft && classList.push('fui-col-push-' + this.data.pushLeft);
      }
      if (this.data.pullRight !== -1) {
        this.data.pullRight && classList.push('fui-col-pull-' + this.data.pullRight);
      }
      this.screenSizeSet('xs', classList);
      this.screenSizeSet('sm', classList);
      this.screenSizeSet('md', classList);
      this.screenSizeSet('lg', classList);
      this.screenSizeSet('xl', classList);
      this.setData({
        classList: classList
      })
    },
    screenSizeSet(screen, classList) {
      if (typeof this.data[screen] === 'number' && this.data[screen] !== -1) {
        classList.push('fui-col-' + screen + '-' + this.data[screen]);
      } else if (typeof this.data[screen] === 'object') {
        typeof this.data[screen].offset === 'number' && classList.push('fui-col-' + screen + '-offset-' + this.data[
          screen].offset);
        typeof this.data[screen].pushLeft === 'number' && classList.push('fui-col-' + screen + '-push-' + this.data[
          screen].pushLeft);
        typeof this.data[screen].pullRight === 'number' && classList.push('fui-col-' + screen + '-pull-' + this.data[
          screen].pullRight);
        typeof this.data[screen].span === 'number' && classList.push('fui-col-' + screen + '-' + this.data[screen].span);
      }
    }
  }
})