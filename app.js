import {myLogin, myOverdue} from './api/login/login.js'

const TOKEN = 'token'   // 定义一个常量TOKEN

App({
  global_data: {
    token: '',   // 存在对象里边的, 会随着小程序的关掉,内存回收, 变量被清空
  },
  
  onLaunch() {   // 生命周期函数
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 弹窗: 是否授权登录
    wx.showModal({
      title: '授权登录',
      content: '是否使用微信授权登录.',
      cancelText: '取消',
      confirmText: '确定',
      cancelColor: '#939393',
      confirmColor: '#39B54A',
      success: () => { this.confirmLogin },
      fail: () => { console.log('取消了授权登录') }
    })

  },

  // 点击了确认登录
  confirmLogin() {
    // 1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    // 2.判断token是否有值
    if(token && token.length !== 0) {   // 已经有token
      // 验证token是否过期
      const is_overdue = this.checkToken(token)   // 调用 验证token是否过期的函数
      if(is_overdue==1) {   // token有效
        this.global_data.token = token
      }
      else {
        this.loginStep()   // token过期重新发起请求
      }
    }
    else {   // 没有token
      this.loginStep()   // 调用登录的函数
    }
  },

  // 验证token, 是否过期的函数
  checkToken(token) {
    myOverdue({token: token}).then(res => {
      if(res.data == 1) {
        return 1   // 没过期
      }
      else if (res.data == 0) {
        return 0   // 过期
      }
    })
  },

  // 登录的函数
  loginStep() {
    wx.login({
      // code只有5分钟的有效期
      success: res => {
        // 1.获取code
        const code = res.code
        // 2.将code发送给自己的服务器
        myLogin({code: code}).then(res => {
          // 1.取出token
          const token = res.data.token
          // 2. 将token保存在 global_data中
          this.global_data.token = token
          // 3. 将token进行本地存储
          wx.setStorageSync(TOKEN, token)
        })
      }
    })
  },

  globalData: {
    userInfo: null
  }
})
