---
title: clash verge
sidebar: false
--- 

# 常见问题
## dns解析问题

> 问题：TUN模式下，访问外网OK，访问内网却很慢，通过日志查看，发现dns解析有问题

1. 配置全局merge规则

![image-20260417175953641](./image/image-20260417175953641.png)

2. 在merge中配置DNS，注意和如果内网有要求，则配置对应内网的dns解析服务，比如

![image-20260417180045318](./image/image-20260417180045318.png)
