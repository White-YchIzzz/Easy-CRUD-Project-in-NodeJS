# 目录结构说明

## routes

  用于管理接口

## controllers

  用于管理接口对应的回调方法

## db

  用于连接MongoDB相关的代码

## models

  用于管理Collection的Schema规范，换句话说制定表里每个字段的数据类型等

  MongoDB中需要了解的一些概念：

    1.文档 - Document
      文档是最基本的存储单元，在MongoDB中以Binary JSON形式存储（类似JSON）。通俗来说也就是一张表里的一行数据

    2.集合 - Collection
      集合石存储文档的容器，通俗而言就是表

    3.数据库 - Database
      数据库是存储集合的容器，同关系型数据库中的说辞“库”

## middleware

## errors

# 累计遇到的问题

Q: 为什么服务启动后能看见public中index.html的页面？

A: 在app.js中使用了中间件 express.static()

Q: 为什么app.get("/", getAllTasks)访问主页的时候不会执行getAllTasks？

A: 因为使用了 express.static() 优先返回的是index.html