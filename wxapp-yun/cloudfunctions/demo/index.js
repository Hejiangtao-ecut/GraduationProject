// 云函数入口文件
const cloud = require('wx-server-sdk');

// 导入自己写的云函数子模块
// const sum = require('./sum/index');
const getOpenId = require('./getOpenId/index');
const getCloudData = require('./getCloudData/index');


cloud.init()

// 云函数入口函数
// 所有参数最后会收敛带 event 里面
exports.main = async (event, context) => {
  switch(event.type){
    case 'getOpenId':
      return await getOpenId.main(event, context);
    case 'getCloudData':
      return await getCloudData.main(event, context);
  }
  
}