# github仓库搭建

## git特点

分布式版本控制，快，社区成熟；认为文件区、暂存区、提交区

## [安装地址](https://gitforwindows.org/)

## .gitigore 忽略文件，只针对未跟踪文件
[.gitignore](../.gitignore)

## 本地关联github

> 创建远端服务器<主机名><地址>
```
git remote add origin https://github.com/study-how-study/vuepractice.git
git remote -v //查看远端服务器信息
```

> 本地git配置
```
git config --global user.email "1345566571@qq.com"
git config --global user.name "study-how-study"
git config --global -l //查看用户配置
```

> 本地提交代码

```
git add .
git commit -m "vue练习"
git commit -a -m "vue练习"(添加到缓存区并且提交)
```

> 推送到远端
```
git push origin master
```


## git常用命令

>配置 git config
```
git config --global user.email "1345566571@qq.com"
git config --global user.name "study-how-study"
git config --global -l 查看用户配置
```
>查看状态
```
git status
```

>文件区到缓存区
```
git add  
git add .
git add *
```

>暂存区到提交区
```
git commit
git commit -a -m '注释'
```
>查看历史记录
```
git log 
```
>版本差异

```
git diff 
```