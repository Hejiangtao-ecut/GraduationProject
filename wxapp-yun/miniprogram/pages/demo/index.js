// pages/demo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 云函数加法
   */
  add(){
    wx.cloud.callFunction({
      // name 需要调用的云函数
      name: 'demo',
      // data 云函数的参数，最后会进行收敛到 event
      // 这也是为什么 data 和 event 都是对象
      data: {
        a: 3,
        b: 6,
        type: 'sum'
      },
      success(res){
        // 成功的回调
        console.log(res);
      },
      fail(res){
        // 失败的回调
        console.log(res);
      }
    })
  },

  /**
   * 获取 openID
   */
  getOpenId(){
    wx.cloud.callFunction({
      name: 'demo',
      data: {
        type: 'getOpenId'
      }
    })
    .then(res =>{
      console.log(res);
    })
  },

  /**
   * 云函数获取数据库数据
   */
  cloudApi(){
    // wx.cloud.database().collection("produce").get({
    //   success(res){
    //     console.log('success');
    //     console.log(res);
    //   },
    //   fail(res){
    //     console.log('fail');
    //     console.log(res);
    //   }
    // })

    // 改成云函数获取数据
    wx.cloud.callFunction({
      name: "demo",
      data:{
        type: "getCloudData"
      }
        // success(res){
        //   console.log('success');
        //   console.log(res);
        // },
        // fail(res){ 
        //   console.log('fail');
        //   console.log(res);
        // }
    }).then(res=>{
      console.log(res);
    })
  }
})