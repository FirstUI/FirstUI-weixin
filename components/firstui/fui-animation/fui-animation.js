Component({
  properties: {
    //是否显示
    show: {
      type: Boolean,
      value: false,
      observer(newVal) {
        if (newVal) {
          this.open();
        } else {
          this.close();
        }
      }
    },
    /*
     过渡动画类型
      ['fade,'slide-top','slide-right','slide-bottom','slide-left','zoom-in','zoom-out']
    */
    animationType: {
      type: Array,
      value: []
    },
    duration: {
      type: Number,
      value: 300
    },
    //styles 组件样式，同 css 样式
    styles: {
      type: Object,
      value: {},
      observer(val) {
        this.setData({
          stylesObject: this.getStylesObject()
        })
      }
    }
  },
  data: {
    isShow: false,
    transform: '',
    ani: {
      in: '',
      active: ''
    },
    stylesObject: ''
  },
  lifetimes: {
    attached: function () {
      this.setData({
        stylesObject: this.getStylesObject()
      })
    }
  },
  methods: {
    getStylesObject() {
      //默认值
			const defStyles = {
          position: 'fixed',
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center'
        };
      const mergeStyles = Object.assign({}, defStyles, this.data.styles);
      let styles = {
        ...mergeStyles,
        'transition-duration': this.data.duration / 1000 + 's'
      };
      let transfrom = '';
      for (let i in styles) {
        let line = this.toLine(i);
        transfrom += line + ':' + styles[i] + ';';
      }
      return transfrom;
    },
    change() {
      this.triggerEvent('click', {
        value: this.data.isShow
      });
    },
    open() {
      clearTimeout(this.data.timer);
      let ani_in = `ani.in`
      this.setData({
        isShow: true,
        transform: '',
        [ani_in]: ''
      })
      let transform = ''
      for (let i in this.getTranfrom(false)) {
        if (i === 'opacity') {
          let ani_in = `ani.in`
          this.setData({
            [ani_in]: 'fui-popup__fade-out'
          })
        } else {
          transform += `${this.getTranfrom(false)[i]} `;
        }
      }
      this.setData({
        transform: transform
      }, () => {
        setTimeout(() => {
          this._animation(true);
        }, 50);
      })
    },
    close(type) {
      clearTimeout(this.data.timer);
      this._animation(false);
    },
    _animation(type) {
      let styles = this.getTranfrom(type);
      this.setData({
        transform: ''
      })
      let transform = ''
      let ani_in = `ani.in`
      for (let i in styles) {
        if (i === 'opacity') {
          this.setData({
            [ani_in]: `fui-popup__fade-${type ? 'in' : 'out'}`
          })
        } else {
          transform += `${styles[i]} `;
        }
      }
      this.setData({
        transform: transform
      })
      this.data.timer = setTimeout(() => {
        if (!type) {
          this.setData({
            isShow: false
          })
        }
        this.triggerEvent('change', {
          value: this.data.isShow
        });
      }, this.data.duration);
    },
    getTranfrom(type) {
      let styles = {
        transform: ''
      };
      this.data.animationType.forEach(mode => {
        switch (mode) {
          case 'fade':
            styles.opacity = type ? 1 : 0;
            break;
          case 'slide-top':
            styles.transform += `translateY(${type ? '0' : '-100%'}) `;
            break;
          case 'slide-right':
            styles.transform += `translateX(${type ? '0' : '100%'}) `;
            break;
          case 'slide-bottom':
            styles.transform += `translateY(${type ? '0' : '100%'}) `;
            break;
          case 'slide-left':
            styles.transform += `translateX(${type ? '0' : '-100%'}) `;
            break;
          case 'zoom-in':
            styles.transform += `scale(${type ? 1 : 0.8}) `;
            break;
          case 'zoom-out':
            styles.transform += `scale(${type ? 1 : 1.2}) `;
            break;
        }
      });
      return styles;
    },
    toLine(name) {
      return name.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
  }
})