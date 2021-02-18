module.exports = {
  "title": "lzb's blog",
  "description": "记录前端学习的个人博客",
  "dest": "public", // 打包生成的目录
  "base": '/myblogs/', //部署github相关配置
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco", // 使用的主题
  "themeConfig": { // 主题设置
    "nav": [ // 导航栏
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/stanlz06",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": { // 侧边导航栏
      "/blogs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "binaryman",
    "authorAvatar": "/avatar.png",
    "record": "MIT License",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}