// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    isLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getColorList();
  },

  /**
   * 获取颜色数据
   */
  getColorList() {
    this.setData({
      isLoading: true
    });
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method: 'get',
      success: ({ data }) => {
        this.setData({
          colorList: [...this.data.colorList, ...data.data]
        });
      },
      complete: () => {
        this.setData({
          isLoading: false
        });
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    !this.data.isLoading && this.getColorList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})