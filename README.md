# First UI 快速上手

使用 First UI 前，请确保你已经学习并熟练使用过 [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/) 。


 <a target="_blank">
	<img alt="npm" src="https://img.shields.io/npm/v/firstui-uni.svg" />
 </a>


### 安装

#### 方式一 ：通过 npm 安装

<div class="fui-sub__text">使通过 npm 安装，需要先安装npm包，然后构建npm，<a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html" target="_blank">详见</a> 。</div>

``` js
// # Using npm
暂未发布！
```

#### 方式二 ：通过下载代码

<div class="fui-sub__text">通过 <a target="_blank" href="https://github.com/FirstUI/FirstUI-weixin">GitHub</a> 或者 <a target="_blank" href="https://www.firstui.cn/">FirstUI官网(VIP)</a> 下载 First UI 的代码，然后 将 components/firstui/ 目录拷贝到自己的项目中。</div>

``` js
// # GitHub
git clone https://github.com/FirstUI/FirstUI-weixin.git
```

#### 方式三 ：选择需要的模块引入

<div class="fui-sub__text">下载 First UI 的代码，在 components/firstui/ 目录下找到需要的组件拷贝到自己的项目中。</div>

### 如何使用

按照以下的方式使用组件，以 `Button` 为例，其它组件在对应的文档页查看。

<div class="fui-doc__card">
 <div class="fui-doc__title">第一种：在页面json文件中引入</div>
 
``` js
  "usingComponents": {
    "fui-button": "/components/firstui/fui-button/fui-button"
  }
```
</div>

<div class="fui-doc__card fui-mbtm">
 <div class="fui-doc__title">第二种：在根目录app.json文件中全局引入</div>

``` js
  "usingComponents": {
    "fui-button": "components/firstui/fui-button/fui-button"
  }
```

</div>

### 使用组件

引入组件后，可以在 页面 中直接使用组件

``` html
<fui-button text="默认按钮"></fui-button>
```

### 相关链接

官网地址：[https://www.firstui.cn](https://www.firstui.cn)

文档地址：[https://wxdoc.firstui.cn](https://wxdoc.firstui.cn)

GitHub地址：[https://github.com/FirstUI/FirstUI-weixin](https://github.com/FirstUI/FirstUI-weixin)


### 其他说明

First UI分为 `开源版` 和 `商业版`，所有示例或文档中加 V 的表示需要开通会员才可获取源码使用，会员内容不会发布到任何公开渠道。

开通会员、版权约束说明以及详细介绍请参考 FAQ中 [会员介绍](https://wxdoc.firstui.cn/docs/FAQ.html#%E4%BC%9A%E5%91%98%E4%BB%8B%E7%BB%8D)。


### 更新日志

#### V1.5.0（2022-05-19）

- 新增 Vtabs 纵向选项卡 组件（VIP组件）。

- 新增 PuzzleVerify 滑块拼图验证 组件，此组件为 SliderCaptcha 滑块拼图验证 组件的功能补充。[详见](https://forum.firstui.cn/d/48)

- 新增 Drag 拖拽排序 组件（VIP组件）。

- 新增 ImageCropper 图片裁剪 组件（VIP组件）。

- 新增 Table 表格 组件（VIP组件）。

- Utils 工具 类组件新增函数节流方法使用案例。

- Badge 徽章 组件优化，新增max属性，当值超过max时使用+号代替，仅为数字时有效。

- SingleInput 单输入框组件优化，新增清空方法重置输入值（结合原生键盘时使用）。

- Button 按钮 组件优化，修复bindclick事件中调用wx.getUserProfile无效的问题。

- Form 表单校验 示例新增其他表单元素，满足更多表单需求。

- Icon 图标 组件优化，新增支持自定义图标，详见文档说明。

- BottomNavbar 底部导航栏 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域。

- 优化若干已知问题。


#### V1.4.0（2022-03-16）

- 新增 Circle 圆形进度条 组件（VIP组件）。

- 新增 Skeleton 骨架屏 组件（VIP组件）。

- 新增 CubicBezier 贝塞尔曲线 组件（VIP组件）。

- 新增 SlideVerify 滑动验证 组件（VIP组件）。

- 新增 RotateVerify 旋转验证 组件（VIP组件）。

- 新增 SliderCaptcha 滑块拼图验证 组件（VIP组件）。

- 新增 OverflowHidden 内容超出隐藏 组件（VIP组件）。

- 新增 Backtop 回到顶部 组件（VIP组件）。

- 新增 Lazyload 图片懒加载 组件（VIP组件）。

- 新增 Waterfall 瀑布流 组件（VIP组件）。

- 优化部分组件在vue3下显示异常，控制台报出警告的问题。

- 优化 Upload 图片上传 组件。新增属性设置删除图片时是否弹框确认；图片上传数到达限制数max时隐藏选择框。

- 修复 Preview 表单预览 组件改变数据页面不更新的bug。

- 优化 Button 按钮 组件在Nvue以及PC中的点击效果。

- 优化 Card 卡片 组件在Nvue中样式显示不正确的问题。

- 优化 Message 消息提示 组件，部分props属性可在show方法中传值覆盖。

- 优化 Select 选择器 组件，修复单选时设置默认选中项无效的问题。

- 优化 CountDown 倒计时 组件，修复初始化传0触发倒计时结束事件的问题。

- 修复 Layout 栅格布局 组件属性gutter不生效的bug。

- 修复 InputNumber 数字输入框 组件在vue3下 blur 事件未在emits中申明的问题。

- 优化若干已知问题。

#### V1.3.0（2022-02-20）

- 新增 Calendar 日历 组件（VIP组件）。

- 新增 Cascader 级联选择器 组件（VIP组件）。

- 新增 Slider 滑块 组件（VIP组件）。

- 新增 Rate 评分 组件（VIP组件）。

- 新增 Select 选择器 组件（VIP组件）。

- 新增 Upload 图片上传 组件（VIP组件）。

- 新增 Gallery 画廊 组件（VIP组件）。

- 新增 BubbleBox 气泡框 组件（VIP组件）。

- 新增 BottomNavbar 底部导航栏 组件（VIP组件）。

- 新增 CountDown 倒计时 组件（VIP组件）。

- 新增 CopyText 长按复制 组件（VIP组件）。

- 新增 Timer 计时器 组件（VIP组件）。

- 新增 Qrcode 二维码 组件（VIP组件）。

- 新增 Barcode 条形码 组件（VIP组件）。

- 新增 Autograph 手写签名 组件（VIP组件）。

- 修复 Textarea 多行输入框 组件回车无法换行的问题。

- 优化 Request 网络请求 组件，新增加载中提示信息配置项。

- 优化 Icon 图标 组件，新增部分图标。

- 优化若干已知问题。

#### V1.2.0（2021-11-22）

- 新增 Tabbar 标签栏 组件（VIP组件）。

- 新增 ActionSheet 上拉菜单 组件。

- 新增 Toast 轻提示 组件。

- 新增 Dialog 对话框 组件。

- 新增 DropdownMenu 下拉菜单 组件。

- 新增 DropdownList 下拉菜单 组件。

- 新增 Modal 模态框 组件（VIP组件）。

- 新增 Landscape 压屏窗 组件（VIP组件）。

- 新增 Message 消息提示 组件（VIP组件）。

- 新增 BottomPopup 底部弹出层 组件。

- 新增 TopPopup 顶部弹出层 组件。

- 新增 Drawer 抽屉 组件。

- 新增 NoticeBar 通告栏 组件（VIP组件）。

- 新增 TimeAxis 时间轴 组件（VIP组件）。

- 新增 Steps 步骤条 组件（VIP组件）。

- 新增 Progress 进度条 组件（VIP组件）。

- 新增 Collapse 折叠面板 组件。

- 新增 SwiperDot 轮播图指示点 组件（VIP组件）。

- 新增 DigitalRoller 数字滚轮 组件（VIP组件）。

- 新增 DigitalKeyboard 数字键盘 组件（VIP组件）。

- 新增 LicensePlate 车牌号键盘 组件（VIP组件）。

- 新增 CountdownVerify 验证码倒计时 组件（VIP组件）。

- 新增 Sticky 吸顶容器 组件（VIP组件）。

- 新增 Fab 浮动按钮 组件（VIP组件）。

- 新增 ShareSheet  分享面板 组件（VIP组件）。

- 新增 FilterBar 筛选栏 组件（VIP组件）。

- 新增 SwipeAction 滑动菜单 组件。

- 新增 Picker 选择器 组件（VIP组件）。

- 新增 DatePicker 日期时间选择器 组件（VIP组件）。

- 新增 门户模板（物料）。

- 优化掉部分组件中对头条小程序做兼容的冗余代码。

- 优化若干已知问题。


#### V1.1.0（2022-02-20）

- 调整组件对vue3支持与uni-app官方一致。

- 新增 Panel 面板 组件（VIP组件）。

- 新增 Preview 表单预览 组件（VIP组件）。

- 新增 Empty 缺省页 组件。

- 新增 SegmentedControl 分段器 组件。

- 新增 Pagination 分页器 组件。

- 新增 NavBar 导航栏 组件（VIP组件）。

- 新增 Tabs 标签页 组件。

- 新增 Tag 标签 组件。

- 新增 Backdrop 遮罩层 组件。

- 新增 Result 结果页 组件（VIP组件）。

- 新增 Avatar 头像 组件。

- 新增 Form 表单校验 组件（VIP组件）。

- 新增 Validator 表单验证（JS）组件（VIP组件）。

- 新增 SingleInput 单输入框 组件（VIP组件）。

- 新增 IndexList 索引列表 组件（VIP组件）。

- 新增 SearchBar 搜索栏 组件（VIP组件）。

- 新增 登录（A）模板（物料）。

- 新增 登录（B）模板（物料）。

- 新增 登录（C）模板（物料）。

- 新增 登录（D）模板（物料）。

- 优化若干已知问题。


#### V1.0.0（2022-02-20）

- 新增 Color 色彩 ，First UI用色指南。

- 新增 Icon 图标 组件，First UI字体图标库。

- 新增 Button 按钮 组件。

- 新增 Footer 页脚 组件。

- 新增 Animation 动画 组件。

- 新增 StatusBar 状态栏 组件。

- 新增 Layout 栅格布局 组件（fui-row和fui-col）。

- 新增 Grid 宫格 组件（fui-grid和fui-grid-item）。

- 新增 List 列表 组件（fui-list和fui-list-cell）。

- 新增 Card 卡片 组件。

- 新增 Input 输入框 组件。

- 新增 InputNumber 数字输入框 组件。

- 新增 Label 标签 组件。

- 新增 FormField 表单数据传递 组件（微信/百度/QQ小程序）。

- 新增 Radio 单选框 组件。

- 新增 Checkbox 复选框 组件。

- 新增 Switch 开关 组件。

- 新增 Textarea 多行输入框 组件。

- 新增 Loading 加载 组件。

- 新增 LoadAni 加载动画 组件（VIP组件）。

- 新增 Badge 徽章 组件。

- 新增 Alert 警告框 组件。

- 新增 Divider 分割线 组件。

- 新增 LoadMore 加载更多 组件。

- 新增 Clipboard 复制文本 组件（VIP组件）。

- 新增 Request 网络请求 组件（VIP组件）。

- 新增 Utils 工具 类组件。

- 新增 Poster 绘制分享海报 组件（VIP组件）。