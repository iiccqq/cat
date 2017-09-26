
var t = new Date();
var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours() + t.getMinutes() / 10;
Page({
  data: {
    imgUrls: [{itemId:1,url:'https://iiccqq.github.io/wechat/banner1.jpg'},
      {itemId: 2, url:'https://iiccqq.github.io/wechat/banner2.jpg'},
      {itemId: 3, url:'https://iiccqq.github.io/wechat/banner3.jpg'}
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    tt: time,
    items:[
      {
        id:1,
        src:'https://iiccqq.github.io/wechat/icon1.png',
        url:'/page/component/pages/video/video?imageId=1&&type=content',
        mode: 'aspectFill',
        title:'东北虎',
        text: '只要1999元,保持纵横比缩放图片，只保证图片的短边能完全显示出来'
      },
      {
        id:2,
        src: 'https://iiccqq.github.io/wechat/icon2.png',
        url: '/page/component/pages/image/image?imageId=2&&type=content',
        mode: 'aspectFill',
        title: '东北猫',
        text: '只要1999元,保持纵横比缩放图片，只保证图片的短边能完全显示出来'
      },
      {
        id:3,
        src: 'https://iiccqq.github.io/wechat/icon3.png',
        url: '/page/component/pages/video/video?imageId=3&&type=content',
        mode: 'aspectFill',
        title: '东北虎',
        text: '保持纵横比缩放图片，只保证图片的短边能完全显示出来'
      },
      {
        id:4,
        src: 'https://iiccqq.github.io/wechat/icon4.png',
        url: '/page/component/pages/image/image?imageId=4&&type=content',
        mode: 'aspectFill',
        title: '东北虎',
        text: '保持纵横比缩放图片，只保证图片的短边能完全显示出来'
      }
    ]
  },
  onLoad: function (options) {
    
    
  },
  onShow: function () {
    var t = new Date();
    var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours();
    this.setData({ tt: time});
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
