var posts=["Markdown/anzhiyu添加新页面基于已有模板/","杂学/python打包成.exe/","uncategorized/数学物理方程第一章/","杂学/激活函数/","Markdown/页面配置/","杂学/AAAMLprob/index/","杂学/AAAMLprob/处理分类变量/","杂学/AAAMLprob/特征工程/","杂学/AAAMLprob/特征选择/","杂学/AAAMLprob/组织机器学习项目/","杂学/AAAMLprob/评估指标/","杂学/AAAMLprob/超参数优化/","杂学/AAAMLprob/交叉检验/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };