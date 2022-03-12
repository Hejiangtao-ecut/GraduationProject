// pages/ycc/index.js
// 云存储

Page({
  data:{
    imgSrc: ''
  },

  async chooseImg(){
    let tempFilePaths = '';
    await wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera']
    }).then(res =>{
      tempFilePaths = res.tempFilePaths
    })
    return tempFilePaths;
  },

  /**
   * 上传文件
   */
  async upLoad(){
    const path = await this.chooseImg();
    console.log(path);
    const THIS = this;

    wx.cloud.uploadFile({
      cloudPath: '桌面壁纸.jpg',
      filePath: path[0],
      success(res){
        console.log(res);
        THIS.setData({
          imgSrc: res.fileID
        })
      },
      fail(res){
        console.log(res);
      }

    })
  }
})