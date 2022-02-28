# localLife

手写一个本地生活的首页进行练练手

## 接口地址
https://www.escook.cn/slides

## 页面导航方式
1. 声明式导航
  - 在页面声明 navigate 组件进行导航
  - 跳转到 tabBar 页面必需要使用 open-type=『switchTab』 否则会导致跳转失败
  - 跳转非 tabBar 页面 open-type=『navigate』,这个也可以省略
  - url 属性必需 / 开头，否则也无法跳转
  - 返回上一页使用 open-type=『navigateBack』

2. 编程式导航
  - 在 js 中使用跳转的 API 进行导航
  - 跳转 tabBar 页面需要使用 wx.switchTab 方法
  - 跳转非 tabBar 页面使用 wx.navigate 方法
  - 返回上一页使用 wx.navigateBack 方法

3. 导航传参
  - 导航传参可以在页面 onLoad 的 options 中获取到

## 页面事件
1. 下拉刷新
  - 启用下拉刷新
    1. 全局开启下拉刷新，在 app.json 里面设置
    2. 单页面开启下拉刷新，在页面级别的 json 文件设置
    3. 开启关键字：enablePullDownRefresh

  - 配制下拉刷新的背景样式，详细见 index.json
  - 监听事件： onPullDownRefresh
  - 下拉刷新效果实际在真机上不会自动消失，需要手动调用 wx.stopPullDownRefresh 方法才行

2. 上拉触底
  - 更多用于数据分页，进行下一页数据加载
  - onReachBottom 可以监听页面的上拉触底事件,页面内容必需大于1屏才能触发
  - 在 json 文件中使用关键字 onReachBottonDistance 来配制上拉触底的距离，达到提前触发该事件,默认值是50px