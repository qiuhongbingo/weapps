export function request(payload) {
  wx.showNavigationBarLoading()

  return new Promise(resolve => {
    wx.request(
      Object.assign(
        {
          success: s => {
            wx.hideNavigationBarLoading()
            resolve(s.data)
          }
        },
        payload
      )
    )
  })
}
