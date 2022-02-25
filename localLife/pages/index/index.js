// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    swiperList: [],
    // 九宫格数据
    gridList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let newSwiperList = [];
    let newGridList = [];
    await this.getRequset('https://www.escook.cn/slides')
      .then(res => {
        newSwiperList = res;
      });
    await this.getRequset('https://www.escook.cn/categories')
      .then(res => {
        newGridList = res;
      });
    this.setData({
      swiperList: newSwiperList,
      gridList: newGridList
    })
  },

  // 封装获取异步数据方法
  getRequset(url, method = 'GET') {
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method,
        success: (res)=>{
          resolve(res.data);
        },
        fail: (res) => {
          reject('err')
        }
      });
    })
  }
})