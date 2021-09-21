export default {
  pages: [
    'pages/index/index',
    'pages/accounting-page/accounting-page',
    'pages/accounting-records/accounting-records'
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#eee',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于获取天气信息",
    }
  }
}
