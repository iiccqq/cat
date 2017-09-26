//image.js
Page({
  data: {
    imageId:1
  },
  onLoad: function (option) {
    this.setData({imageId:option.imageId,type:option.type});
  }
})