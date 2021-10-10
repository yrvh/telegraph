// 网络请求工具类
export default function service(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data,
      dataType: options.dataType,
      enableCache: true,
      enableHttp2: true,
      enableQuic: true,
      header: options.header,
      method: options.method || 'get',
      responseType: options.responseType,
      timeout: 10000,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: (res) => {},
    })
  })
 
}

