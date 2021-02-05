# 使用URL启动越飞阅读

越飞阅读支持通过 **URL（统一资源定位器）** 唤起，你可以通过这种方式来支持从应用到应用方案。

## flyreader:URL 方案引用

下面是越飞阅读支持的URL方案。

| 页面或功能      | URL           | 示例
| -------------- |:-------------:|:--------------:|
| 主界面          | yfreader:MainPage |            |
| 书籍信息页      | yfreader:bookInfo?name={} | yfreader:bookInfo?name=mybook |
| 书籍内容        | yfreader:bookConcent?name={} | yfreader:bookConcent?name=mybook |

::: tip
URL方案是否可用取决于越飞阅读和你的操作系统的版本。</br>如果URL的书籍尚未在软件中导入，你将会看到提示“该书籍不存在或已经删除”。
:::

## 相关主题

- [使用 URI 启动应用 - Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/uwp/launch-resume/launch-app-with-uri)