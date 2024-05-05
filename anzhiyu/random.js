var posts=["Markdown/页面配置/","Markdown/anzhiyu添加新页面基于已有模板/","杂学/激活函数/","杂学/python打包成.exe/","uncategorized/数学物理方程第一章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };