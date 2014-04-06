cascading-select-address
========================

angularjs 实现的省市区地址级联选择器
---
找了很久的jquery地址联动的插件都没有合适的，封装进angularjs也略麻烦，干脆自己用angularjs写了一份。

![](http://think2011.qiniudn.com/cascading-select-address-2.png)

![](http://think2011.qiniudn.com/cascading-select-address-1.gif)

说明：
```
 * @directive
 * @param {scope} p 省份
 * @param {scope} a 区域
 * @param {scope} c 县级
 * @param {scope} d 地址
 * @example
 * <cascading-address p="p" a="a" c="c" d="d"></cascading-address>
 */

html示例:
<div class="form-group">
    <label class="col-sm-4 control-label">地址</label>
    <div class="col-sm-6">
        <cascading-address p="p" a="a" c="c" d="d"></cascading-address>
    </div>
</div>
```
---
> ##### 技术： angularjs
> ##### 时间： 2014年4月
> ##### 源码： [cascading-select-address](https://github.com/think2011/cascading-select-address/tree/master)
> ##### 我的博客： [think2011](http://think2011.github.io)