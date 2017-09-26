//image.js
Page({
  data: {
    imageId:1,
    showQR: false
  },
  onLoad: function (option) {
    this.setData({imageId:option.imageId,type:option.type});
  },
  bindSendDanmu: function () {    
    this.setData({ showQZ: !this.data.showQZ });
  }
})