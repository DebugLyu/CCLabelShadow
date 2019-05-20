label shadow

1 替换 CocosCreator\resources\engine\jsb 目录 jsb-label.js文件
2 替换 CocosCreator\resources\engine\cocos2d\core\label 目录下 CCSGLabel.js 和 CCSGLabelCanvasRenderCmd.js文件
3 将 CCLabelShadow.js 放入 CocosCreator\resources\engine\cocos2d\core\components 目录下
4 替换 CocosCreator\resources\engine\cocos2d\core\components 目录下 index.js 文件
5 到引擎目录 CocosCreator\resources\engine 下 执行

##没安装过 gulp 先安装工具
>npm install -g gulp
>npm install

执行构建
>gulp build
