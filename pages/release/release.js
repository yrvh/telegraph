// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cut_index: 0,
    cut_city: 110000,
    cut_ordertype: 0,
    cut_keyword: 0,
    cut_city_name: '城市',   // 当前城市的名字
    show_select_city: false,   // 显示城市的选择器
    // areaList,   // 省市区数据 
    area_list: {
      province_list: {
        110000: '北京市',
        120000: '天津市',
      },
      city_list: {
        110100: '北京市',
        120100: '天津市',
      },
      county_list: {
        110101: '东城区',
        110102: '西城区',
        // ....
      },
    },
    ordertype_option:[
      { text: '推荐', value: 0 },
      { text: '附近', value: 1 },
      { text: '最新', value: 2 },
  ],
    keyword_option: [
      { text: '全部', value: 0 },
      { text: '跑腿帮忙', value: 1 },
      { text: '短期劳务', value: 2 },
    ],
    list: [   // 数据列表
      {
        id: 1,
        title: '婚礼主持',
        errand: true,
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 2,
        title: '水电工',
        errand: false,
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: true,
      },
      {
        id: 3,
        title: '婚礼主持',
        errand: true,
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 4,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: true,
      },
      {
        id: 5,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: true,
      },
      {
        id: 6,
        title: '水电工',
        errand: true,
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: false,
      },
      {
        id: 8,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 9,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: true,
      },
      {
        id: 7,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 10,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: true,
      },
      {
        id: 11,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 12,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: false,
      },
      {
        id: 13,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 14,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: false,
      },
      {
        id: 15,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 16,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: false,
      },
      {
        id: 17,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 18,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: false,
      },
      {
        id: 19,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 20,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: false,
      },
      {
        id: 21,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 22,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: false,
      },
      {
        id: 23,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 24,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: true,
      },
      {
        id: 25,
        title: '婚礼主持',
        hurry: true,
        price: '1000元/场',
        tag: ['有经验','形象好','气质佳','口才优'],
        profile: ['时间一天', '先给定金','结束立马结账'],
        name: '张先生',
        the_type: '商场招聘',
        addr: {
          pro: '广东',
          city: '深圳',
          area: '南山'
        },
        collect: false,
      },
      {
        id: 26,
        title: '水电工',
        hurry: false,
        price: '800元/天',
        tag: ['老师傅','认真','负责','技术好'],
        profile: ['约25天的活', '先给定金','完工立马结账'],
        name: '赵先生',
        the_type: '个人招聘',
        addr: {
          pro: '湖南',
          city: '长沙',
          area: '天河'
        },
        collect: false,
      },
    ]

  },
  // 在职位和精英 之间进行切换
  changeRole(e) {
    let {id} = e.currentTarget.dataset
    this.setData({cut_index: id})
  },
  // 选择城市----显示选择框
  handleCity() {
    this.setData({
      show_select_city : true
    })
  },
  // 选择城市----确认选择
  confirmCity(obj) {
    this.setData({
      show_select_city: false
    })
    console.log(obj)
    console.log(this.cut_city)
  },
  // 城市选择----点击'取消'
  cancelCity() {
    this.setData({
      show_select_city: false
    })
  },
  // 点击新增发布
  handleAdd() {
    wx.navigateTo({
      url: `/pages/release/release_add/release_add`,
    })
  },


  // 子组件触发的事件--------------------------------
  handleCard(e) {
    let {the_id} = e.detail
    wx.navigateTo({
      url: `pages/detail/detail?the_id=${the_id}`,
    })
    
  },
  handleCollect(e) {
    let {the_id} = e.detail
    let {list} = this.data
    list.map( (item,i) => {
      if(item.id == the_id) {
        item.collect = !item.collect
      }
    })
    this.setData({list})
    console.log(the_id,999)
  },


  // 生命周期函数-----------------------------------------
  onLoad: function (options) {

  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  // 下拉刷新
  onPullDownRefresh: function () {

  },
  // 上拉触底
  onReachBottom: function () {

  },
  // 分享
  onShareAppMessage: function () {

  }
})