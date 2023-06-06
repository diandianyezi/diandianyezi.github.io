---
title: Typora里配置的Picgo-github图床的图显示不出来
date: 2023-06-04
category: github
---



# Mac PicGo 上传图片后，Typora不显示

## 现象

![image-20230408181149140](https://img-blog.csdnimg.cn/img_convert/e24d93f72ab189a46253ee93c7ad942e.png)

## 方法

通过查阅，发现问题在于Github仓库的域名`raw.githubusercontent.com` 的IP解析出错，需要手动配置域名解析。

1. 打开 域名解析网站 https://www.ipaddress.com/site/raw.githubusercontent.com，查询`raw.Githubusercontent.com`，获取该域名的IP；

2. 打开Mac OS终端，将hosts的域名解析添加IP与`raw.Githubusercontent.com`的映射关系；

3. 打开域名映射文件`/etc/hosts`；

    ```shell
    sudo vim /etc/hosts
    ```

4. 添加一行ip与域名的映射关系，保存后，重新打开Typora就发现图片可以展示了。