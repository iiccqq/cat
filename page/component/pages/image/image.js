//image.js
var t = new Date();
var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours() + t.getMinutes() / 10;

Page({
  data: {
    imageId:1,
    showQR: false,
    tt:time
  },
  onLoad: function (option) {
    this.setData({imageId:option.imageId,type:option.type});
  },
  onShow: function () {
    var t = new Date();
    var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours();
    this.setData({ tt: time });
  },
  bindSendDanmu: function () {    
    this.setData({ showQZ: !this.data.showQZ });
  }
})