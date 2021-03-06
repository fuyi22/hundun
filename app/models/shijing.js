var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../../config'); //读取配置文件config.js信息
const shici = mongoose.createConnection(config.database2); // 连接数据库

module.exports = shici.model('shijing', new Schema({
    title: String,
    chapter: String,
    section: String,
    content: [{
        type: String
    }],
    created_at: {type: Number, default: (Date.now()/1000).toPrecision(10)}
}), 'shijing');