使用NodeJS构建一个简单的RESTful API.

##### 依赖环境
```
express
mysql
body-parser
```

##### 使用方式
- 创建MySQL数据库`mydb`，表`tasks`，并添加初始数据：
    ```sql
    CREATE DATABASE mydb;
    
    USE mydb;
    
    CREATE TABLE IF NOT EXISTS `tasks` (
      `id` int(11) NOT NULL,
      `task` varchar(200) NOT NULL,
      `status` tinyint(1) NOT NULL DEFAULT '1',
      `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    
    INSERT INTO `tasks` (`id`, `task`, `status`, `created_at`) VALUES
    (1, 'Find bugs', 1, '2016-04-10 23:50:40'),
    (2, 'Review code', 1, '2016-04-10 23:50:40'),
    (3, 'Fix bugs', 1, '2016-04-10 23:50:40'),
    (4, 'Refactor Code', 1, '2016-04-10 23:50:40'),
    (5, 'Push to prod', 1, '2016-04-10 23:50:50');
    ```
- git clone项目代码 `https://github.com/mingchau/nodejs-restful-api-demo`
- 切换到项目目录`cd nodejs-restful-api-demo`，安装依赖环境 `npm install`
- 使用`node server.js`启动项目

##### 实现的HTTP方法
- GET `/tasks` 获取所有的tasks；`/task/id` 根据id获取task
- POST 添加一个task
- PUT  更新一个task
- DELETE 删除一个task


##### 代码结构
```
│  package-lock.json 
│  package.json 第三方包的依赖关系
│  README.md 文档
│  server.js 服务入口
├─app
│  ├─controller
│  │      appController.js 负责把route转发到model
│  ├─model
│  │      appModel.js 数据操作
│  │      db.js 数据库配置
│  └─routes
│          appRoutes.js 路由文件
├─node_modules 第三方依赖包
```


##### 参考
https://www.codementor.io/julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
