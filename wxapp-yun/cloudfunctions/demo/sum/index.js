// 简单实现两数相加

// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init();

exports.main = async (event) => event.a + event.b;  