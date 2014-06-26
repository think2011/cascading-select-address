select-address2.1
========================

angularjs 实现的省市区地址级联选择器
---
找了很久的jquery地址联动的插件都没有合适的，封装进angularjs也略麻烦，干脆自己用angularjs写了一份。

目前是2.1版本

![](http://think2011.qiniudn.com/cascading-select-address-2.png)

![](http://think2011.qiniudn.com/cascading-select-address-1.gif)

说明：
```
#
# 地址选择器 2.1
# @param {scope} p 省份
# @param {scope} a 区域
# @param {scope} c 县级
# @param {scope} d 地址
# @example
# <input select-address p="p" a="a" c="c" d="d" value="{{p}} {{a}} {{c}} {{d}}" type="text" />
#
```
---
> ##### 技术： angularjs
> ##### 时间： 2014年4月
> ##### 源码： [cascading-select-address](https://github.com/think2011/cascading-select-address/tree/master)
> ##### 我的博客： [think2011](http://think2011.github.io)