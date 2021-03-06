// pages/nostandard/nostandard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteMaxLen: 500,//备注最多字数  
    info: "",  
    noteNowLen: 0,//备注当前字数
    },
    //字数改变触发事件 
    bindTextAreaChange: function (e) {
      var that=this
      var value = e.detail.value, len = parseInt(value.length);
      if (len > that.data.noteMaxLen) return;   
      that.setData({    
      info: value,     
      noteNowLen: len
      })
      }, 
      //提交数据 
      bindSubmit: function () {
      var that = this;   
      wx.showToast({
        title: '提交成功',     
        icon: 'success',     
        duration: 1500,     
        mask: false,     
        success: function() {       
          that.setData({         
            info: '',         
            noteNowLen: 0})
            },
            })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})