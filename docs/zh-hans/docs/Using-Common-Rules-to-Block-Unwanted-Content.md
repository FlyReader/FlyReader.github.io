# 使用阅读屏蔽词功能屏蔽不需要的内容

在越飞阅读中，我们提供了直接的精确字符屏蔽和内容替换功能。在本文中我们讲主要讲述基于正则表达式的模糊替换。

## 快速入门

下面是一个为只希望迅速解决问题的用户准备的快速向导。

请参照以下步骤解决问题。

- **第一步：** 打开设置界面内的 **内容处理规则** 页面，点击 **添加自定义规则** 按钮；
- **第二步：** 参照下表填写您需要的屏蔽规则；

| 可以达到的效果 | 使用方法 |
| ------------- |:---------------:|
| 过滤所有多余换行(忽略空白段落) | 第一个文本框填“(\n\s*){2,}”；</br>第二个文本框填“\n”; |
| 忽略段落内部空格 | 第一个文本框填“(?<=\S)([^\S\n])+?(?=\S)”；</br>第二个文本框为空 |
| 替换两个选定内容之间所有的文字</br>例：替换今天和很好之间所有的文字 | 第一个文本框填“(?<=今天).+?(?=很好)”；</br>第二个文本框填想要替换的内容 |
| 例：替换今天某某某......很好为想要替换的内容 | 第一个文本框填“今天.+?很好”；</br>第二个文本框填想要替换的内容 |
| 增加段间距 | 第一个文本框填“\n”；</br>第二个文本框填“\n\n” |
| 首行缩进 | 第一个文本框填“\n”；</br>第二个文本框填“\n　　” |
| 固定段间距为1 | 第一个文本框填“(\n\s*)+”；</br>第二个文本框填“\n\n” |

- **第三步：** 勾选使用正则表达式选项；
- **第四步：** 点击确定按钮保存规则；

::: warning 注意
其它标题中含有正则表达式的选项请保持默认状态，除非您真的知道那是做什么的。
:::

### 补充内容
参阅以下页面可了解更多的示例：
- [在 Visual Studio 中使用正则表达式 | Microsoft Docs](https://docs.microsoft.com/zh-cn/visualstudio/ide/using-regular-expressions-in-visual-studio)


## 更进一步

下面的内容是为已经详细了解正则表达式的用户准备的。

**越飞阅读正则表达式选项介绍**

| 名称 | 译名 | 说明 |
| ------------- |:---------------:|:---------------:|
| IgnoreCase | 忽略大小写 | 匹配时不区分大小写。 |
| Multiline | 多行模式 | 更改^和$的含义，使它们分别在任意一行的行首和行尾匹配，而不仅仅在整个字符串的开头和结尾匹配</br>(在此模式下,$的精确含意是:匹配\n之前的位置以及字符串结束前的位置 . )。 |
| Singleline | 单行模式 | 更改.的含义，使它与每一个字符匹配（包括换行符\n）。 |
| IgnorePatternWhitespace | 忽略空白 | 忽略表达式中的非转义空白并启用由#标记的注释。 |

## 相关主题

- [正则表达式 | 百度百科](http://baike.baidu.com/view/94238.htm)
- [正则表达式30分钟入门教程 | deerchao](http://deerchao.net/tutorials/regex/regex.htm)
- [正则表达式语言 - 快速参考 | Microsoft Docs](https://docs.microsoft.com/zh-cn/dotnet/standard/base-types/regular-expression-language-quick-reference)