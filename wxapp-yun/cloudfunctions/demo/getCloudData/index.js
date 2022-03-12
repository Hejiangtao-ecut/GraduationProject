const cloud = require('wx-server-sdk');
cloud.init();

// 获取openId云函数入口函数
exports.main = async (event, context) => {
   return cloud.database().collection("produce").get();
};