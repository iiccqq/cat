//image.js
var t = new Date();
var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours() + t.getMinutes() / 10;

Page({
  data: {
    imageId:1,
    showQR: false,
    tt:time,
    items: [{ title: '', url: '' }, { title: '', url: '' }]
  },
  onLoad: function (option) {
    this.setData({ imageId: option.imageId, type: option.type });
  },
  onShow: function () {
    wx.request({
      url: 'https://iiccqq.github.io/wechat/detail/' + this.data.imageId +'.json',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: this.showContent
    }); 
  },
  showContent: function (res) {
    const length = this.data.items.length;
    for (let i = 0; i < length; i++) {
      this.data.items[i].title = res.data[i].title;
      this.data.items[i].url = res.data[i].url;
    }
    this.setData({ items: this.data.items });
    var t = new Date();
    var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours();
    this.setData({ tt: time });
  },
  bindSendDanmu: function () {    
    this.setData({ showQZ: !this.data.showQZ });
  }
})