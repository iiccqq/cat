function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
var t = new Date();
var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours() + t.getMinutes() / 10;
Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  onLoad: function (option) {
    wx.request({
      url: 'https://iiccqq.github.io/wechat/detail/' + option.imageId + '.json',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: this.showContent
    });
    
  },
  showContent: function (res) {
   
    var videoUrl;
    if (res.data.length>0) {
      videoUrl = res.data[0].url;
    }
    this.setData({ imageId: this.data.imageId, url: videoUrl});
  },
  onShow: function () {
    var t = new Date();
    var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours();
    this.setData({
      tt: time});
    
  },
  data: {
    showQR: false,
    tt: time
  },
  inputValue: '',
  data: {

    src: '',
    danmuList:
    [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    },
    {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }]
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    });
    this.setData({ showQZ: !this.data.showQZ });
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})