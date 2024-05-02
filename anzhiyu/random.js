var posts=["Markdown/页面配置/","Markdown/anzhiyu添加新页面基于已有模板/","芝士学习/激活函数/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };