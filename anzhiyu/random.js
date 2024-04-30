var posts=["2024/04/29/hello-world/","2024/04/30/页面配置/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };