
var t = new Date();
var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours() + t.getMinutes() / 10;
Page({
  data: {
    bannerItems: [{ "itemId": 1, "url": "/image/banner1.jpg" },
      { "itemId": 1, "url": "/image/banner2.jpg" }
    
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    tt: time,
    items:[
      {
        id:1,
        src:'/image/icon2.jpg',
        url:'/page/component/pages/image/image?imageId=1&&type=content',
        mode: 'aspectFill',
        title:'小猫',
        text: '小猫内容'
      },
      {
        id:1,
        src: '/image/icon2.jpg',
        url: '/page/component/pages/image/image?imageId=1&&type=content',
        mode: 'aspectFill',
        title: '小猫2',
        text: '小猫内容2'
      }
     
    ]
  },
  onLoad: function (options) {

    
  },
  onShow: function () {
    var t = new Date();
    var time = '' + t.getYear() + t.getMonth() + t.getDate() + t.getHours();
    this.setData({ tt: time });
   /* wx.request({
      url: '/image/banner.json',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: this.showBanner
    });
    wx.request({
      url: '/image/list.json',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: this.showList
    })
    */
  },
  showBanner : function(res) {
    const length = this.data.bannerItems.length;
    for (let i = 0; i < length; ++i) {
      this.data.bannerItems[i].itemId = res.data[i].itemId;
      this.data.bannerItems[i].url = res.data[i].url;
    }
    this.setData({ bannerItems: this.data.bannerItems });
  },  
  showList : function (res) {
    const length = this.data.items.length;
    for (let i = 0; i < length; i++) {
      this.data.items[i].id = res.data[i].id;
      this.data.items[i].src = res.data[i].src;
      this.data.items[i].url = res.data[i].url;
      this.data.items[i].mode = res.data[i].mode;
      this.data.items[i].title = res.data[i].title;
      this.data.items[i].text = res.data[i].text;
    }
    this.setData({ items: this.data.items });
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
