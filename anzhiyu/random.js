var posts=["杂学/python打包成.exe/","正学/数学物理方程/数学物理方程第一章/","uncategorized/机器学习/激活函数/","杂学/网页内容/anzhiyu添加新页面基于已有模板/","AAAMLP/机器学习/AAAMLprob/index/","AAAMLP/机器学习/AAAMLprob/准备环境/","AAAMLP/机器学习/AAAMLprob/可重复代码和模型方法/","杂学/网页内容/页面配置/","AAAMLP/机器学习/AAAMLprob/交叉检验/","AAAMLP/机器学习/AAAMLprob/图像分类和分割方法/","AAAMLP/机器学习/AAAMLprob/文本分类或回归方法/","AAAMLP/机器学习/AAAMLprob/处理分类变量/","AAAMLP/机器学习/AAAMLprob/无监督和有监督学习/","AAAMLP/机器学习/AAAMLprob/特征工程/","AAAMLP/机器学习/AAAMLprob/特征选择/","AAAMLP/机器学习/AAAMLprob/组合和堆叠方法/","AAAMLP/机器学习/AAAMLprob/组织机器学习项目/","AAAMLP/机器学习/AAAMLprob/超参数优化/","AAAMLP/机器学习/AAAMLprob/评估指标/","杂学/LLaMA-Factory使用/","杂学/PaddleDetection基础训练/","杂学/cuda的安装/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };