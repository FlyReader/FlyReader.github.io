---
editLink: false
---


# 更新日志

::: tip 提示
1.5.x 将不再支持 Windows 10 1709 （Build 16299） 以下系统版本。</br>我们将继续维护 1.4.x 为使用早期 Windows 版本的用户提供支持。
:::

**1.5.41** -2021年7月1日
- UI 风格调整
- 细节改进

**1.5.39** -2021年2月19日
- 改进国际文件编码检测机制
- 修复了 1.5.38 中引入的可能造成极少数 EPUB 文件不能正常打开的问题

**1.5.38** -2021年2月19日
- 翻页文本选择支持 CTRL + C 快捷键
- 修复了文本选择相关 BUG
- 修复了快捷键处理相关 BUG

**1.5.35** -2021年2月8日
- 启用新 logo
- 阅读时默认开启双栏模式(仅横屏显示)
- 文本选择功能现在已经默认启用了，我们还更改了文本选择的样式
- 更改了滚屏阅读的章节切换模式：滚屏返回上一章的时候会自动跳转到章节末尾
- 改进了网络搜索功能
- 更新 mobi 文件解析方式
- 修复 yfb 文件可能无法导入的问题
- 更新软件内的一些本地化文本
- 【实验性】启用 docs.flyreader.com 作为新文档站点

**1.5.33** -2021年1月22日
- 完善进度跳转，修复相关 bug
- 修复阅读进度为 0.00% 时进度不显示的问题
- 细节改进

**1.4.98** -2021年1月22日
- 修复进度跳转相关 bug
- 修复阅读进度为 0.00% 时进度不显示的问题
- 修复一些网络解析问题
- 细节改进

**1.5.32** -2021年1月21日
- 界面整体大幅更新
- 开发工具链调整

**1.5.30** -2020年12月20日
- 修复图书推荐排行榜无法使用的问题
- 修复一些内容解析问题
- 其它常规更新和优化

**1.5.28** -2020年9月5日
- 鼠标后退细节改进
- 底层图形API使用优化
- *增加翻页模式文本选择功能。该功能暂只支持复制，当前仅对鼠标优化。
>可在首页>设置>基本>Allow Text Selection 中选择 On 来开启该功能 

**1.5.26** -2020年6月17日
- 修复某些 EPUB 无法打开的问题

**1.5.25（1.4.97）** -2020年6月6日
- 修复特殊情况下离开阅读界面闪退的问题
- 针对 Windows 10 2004 进行优化
- 专业版购买体验改进
- 优化插件支持
- 常规改进和优化

**1.5.24（1.4.96）** -2020年4月13日
- 修复向前翻页时有可能导致软件无响应的问题
- 修复非 UTF-8 编码的不导入打开 TXT 文件书籍阅读进度显示不准确的问题

**1.5.23（1.4.95）** -2020年3月20日
- 修复某些 EPUB 显示无效的链接并且链接点击即闪退的问题

**1.5.22（1.4.94）** -2020年3月17日
- 修复书籍目录页加载失败时可能闪退的问题

**1.5.21** -2020年3月17日
- 避免多数情况下阅读器的闪屏问题
- 修复某些 EPUB 无法显示封面的问题
- 修复一些内存泄漏问题
- 修复某些字体无法导入后使用的问题

**1.4.93** -2020年3月17日
-使用新的动画
-避免多数情况下阅读器的闪屏问题
-修复某些 EPUB 无法显示封面的问题
-修复一些内存泄漏问题

**1.5.20** -2020年3月14日
- 采用新动画
- 翻页细节改进

**1.5.19** -2020年3月3日
- 增加 .PRC 文件支持
- 修复 1.4.29 更新日志中所述的“解决多种情况下查找不准的问题”没有按预期工作的问题
- 修复不导入打开某些无封面书籍不正常的问题

**1.4.92** -2020年3月3日
- 增加 .PRC 文件支持
- 修复 1.4.29 更新日志中所述的“解决多种情况下查找不准的问题”没有按预期工作的问题
- 修复一键刷新等失效的问题
- 修复 CBZ CBR 的章节排序问题
- 修复不导入打开某些无封面书籍不正常的问题
- 性能优化

**1.5.18（1.4.91）** -2020年2月28日
- 修复处理 HTML 的一些不标准之处

**1.5.15** -2020年2月27日
- 增加原生 ARM64 支持

**1.4.90** -2020年2月27日
- 修复内容处理规则应用与带格式文本的一些问题
- 修改对某些 html 标签的处理方式

**1.5.12** -2020年2月26日
- 修复内容处理规则应用与带格式文本的一些问题
- 修复在线源的一些问题
- 修改对某些 html 标签的处理方式

**1.5.11** -2020年2月25日
- 修复刷新在线书籍的章节后需要重新进入才能使修改生效的问题
- 修复此前版本引入的在线书籍无法一键刷新的问题
- 修复此前版本引入的在线书籍图片无法显示的问题

**1.5.10** -2020年2月23日
- 修复此前版本引入的某些书籍图片无法查看的问题
- 修复此前版本引入的遵守 W3C 标准导致无法处理自闭合 title 标签的问题
- 修复此前版本引入的内容处理规则对某些带格式书籍无效的问题

**1.5.9** -2020年2月17日
- 修复此前版本引入的 MOBI 只能正常显示第一章的问题
- 修复此前版本引入的 EPUB 锚点链接失效的问题

**1.5.8** -2020年2月8日
- 由于性能问题，暂时移除 CSS 支持
- 修复 CBZ CBR 的章节排序问题

**1.5.7** -2020年2月2日
- 支持预装书籍支持包扩展1

**1.4.89** -2020年2月2日
- 允许 HTTPS 重定向至 HTTP
- 改进刷新错误界面
- 改进插件中心

**1.5.5** -2020年1月31日
>该版本是一个内测版本
- 允许 HTTPS 重定向至 HTTP
- 对搜索引擎进行了测试
- 部分支持 CSS
- 大量内部改进

**1.4.88** -2020年1月19日
- 优化搜索引擎，移除过时代码

**1.4.87** -2019年12月28日
- 改善了针对 EPUB3 格式的目录支持

**1.4.86** -2019年12月22日
- 优化搜索引擎，移除过时代码
- 修复搜索只显示部分结果的问题

**1.4.85** -2019年12月15日
- 修复某些书籍无法查看的问题
- 修复某些书籍内容显示不正确的问题

**1.4.82** -2019年12月1日
- 修复数个陈旧源站的加载问题
- 其它问题修复和改进


**1.4.80** -2019年10月1日

**热烈庆祝中华人民共和国成立70周年**
- 解除专业版对于本地导入书籍书名的50字上限
- 尝试改善软件内自动语言选择机制

**1.4.77** -2019年9月29日
- 完善插件安装编码判断机制
- 修复书籍内容搜索无法正常显示结果的问题
- 修复设置选项的一些问题（汇报活动开关和缓存不导入书籍信息开关不正常）
- 修复下载设置页面的文字和措辞问题
- 代码预防性改进和优化

**1.4.76** -2019年9月15日
- 修复国际编码检测功能工作状态与预计相反的问题
- 富文本支持的一些改进

**1.4.75** -2019年9月14日
- 更新了部分翻译
- 修复包含图片的书籍中向前翻页的一些BUG
- FB2 书籍中标题加大字号显示
- 支持 FB2,EPUB,MOBI 等书籍中加粗或者斜体显示的部分内容，完善部分处理机制
- 使用外部查看器打开书籍内图片成为专业版功能

**1.4.72** -2019年8月31日
- 下载设置文案修改
- 批量删除语音文件逻辑优化
- 其它代码优化和改进

**1.4.70** -2019年7月22日
- 增加批量删除语音文件功能

**1.4.67** -2019年5月11日
- 修复插件系统的一些问题
- 修复网址解析不支持HTTPS链接等问题

**1.4.66** -2019年5月4日
- 修复一些小问题

**1.4.65** -2019年4月27日
- 增加 MOBI AZW AZW3 书籍受 DRM 保护无法打开的提示

**1.4.61** -2019年4月7日
- 修复一些细节问题
- 图书推荐部分问题修复

**1.4.59** -2019年3月24日
- 修复 Windows 10 1607 （Build 14393） 无法进入处理规则设置的问题
- 修复高级渲染关闭时翻页的一些问题
- 修复快速下载的一些问题
- 改善设置界面的辅助功能体验
- 更新 English 翻译

**1.4.56** -2019年3月14日
- 修复快速下载无法使用的问题
- 点击新版一键刷新的快捷按钮后自动隐藏应隐藏的汉堡菜单

**1.4.55** -2019年3月9日
- 修复书籍列表的上下文菜单的一些问题

**1.4.54** -2019年3月9日
- 修复阅读器在 Windows 10 1607 （Build 14393）下的一些闪退问题

**1.4.51** -2019年2月24日
- 版本管理的相关需求

**1.4.48-1.4.49** -2019年2月24日 **【紧急更新】**
- 修复由于编译工具链的问题导致插件系统整体失效的问题
>已知 1.4.38-1.4.47 受该问题影响，受影响的用户请立即升级到最新版本

**1.4.45** -2019年2月20日
- 修复阅读界面部分问题

**1.4.43** -2019年2月20日
- 更新阅读屏蔽词规则，阅读屏蔽词开始受简繁转换影响
- 修复关于界面提示更新内容开关无效的问题
- 修复简繁转换对 EPUB, MOBI, AZW ,AZW3书籍无效的问题
- 修复 EPUB ,MOBI ,AZW ,AZW3书籍进度跳转和显示阅读进度功能无效的问题
- 修复有时过滤章节名功能无效的问题
- 修复按词语转换简繁转换对导入 TXT 生效两次的问题
- 修复 Windows 10 1809 （Build 17134）及更高版本后台语音朗读章节信息不在系统播放控制中显示的问题
- 修复 Windows 10 1809 （Build 17134）及更高版本后台语音朗读章节信息无视定时关闭功能的问题
- 尝试修复在线搜索有时无限加载的问题
- 大幅优化显示阅读进度功能的性能
- 优化软件启动速度

**1.4.39** -2019年2月17日
- 修复阅读屏蔽词的一些问题
- 修复某些阅读设置修改后需要重新进入才能正常显示章节图片的问题
- 修复不开启高级渲染时的图片缩放问题
- 修复右键菜单失效问题
- 更新 English (United States) 的翻译
- 在基本设置中增加实验性功能
- 性能优化

**1.4.37** -2019年2月8日
- 修复 EPUB 无法通过在阅读界面一直上一页回退到第一页的问题
- 修复 EPUB 从头开始的位置可能不正确的问题
- 更新 English (United States) 的翻译

**1.4.36** -2019年2月1日
- 修复FB2书籍不导入打开时的一些问题
- 修复读取不包含目录的FB2文件的一些问题
- 修复找回不导入打开书籍窗口的一些可用性问题
- 新增对FB2.ZIP格式的支持（仅可通过拖拽到阅读器，导入文件夹等方式导入）

**1.4.35** -2019年2月1日
- 修复在 Windows 10 1809 （Build 17134）上后台朗读的一些问题

**1.4.34** -2019年1月31日
- 修复章节名搜索的问题（位于目录页省略号菜单内）
- 修复搜索书籍内容正则表达式选项的 BUG

**1.4.33** -2019年1月31日
- 修复用户报告的一些解析问题
- 修复1.3.31版本引入的阅读屏蔽词非正则表达式项目无效的问题
- 修复1.3.31版本引入的阅读屏蔽词可能导致EPUB,MOBI,AZW,AZW3章节列表和下划线信息偏移的问题
- 修复1.3.32版本引入的在 Windows 10 1709（Build 16299）以下系统版本软件无法启动的问题
- 大幅优化EPUB,MOBI,AZW,AZW3书籍进入书籍目录的速度
- 使用更加激进的内存缓存机制

**1.4.32** -2019年1月30日
- 更新西班牙语翻译（感谢 **@mbmigone** ）
- 修复首页汉堡菜单的一个 BUG
- 部分细节 UI 改变，移除首页导入书籍旁的书籍格式举例

**1.4.31** -2019年1月30日
- 修复某些MOBI，AZW,AZW3书籍加载缓慢的问题
- 修复 AZW,AZW3,MOBI 某些情况下使用上一章下一章出错的问题
- 增强软件稳定性，解决某些导致丢失书籍的问题
- 改进找回丢失书籍功能，修复有时找回不全的问题
- 改善某些情况下的EPUB加载速度（严格限制目录页从 HTML title 属性中读取目录）
- 大幅改进阅读屏蔽词，修复使用阅读屏蔽词导致目录、搜索等定位不准的问题
- 允许TXT章节列表某些情况随用户的修改而更新
- 删除阅读屏蔽词使用不可见空白填充的选项
- 大幅提高较大 AZW,AZW3,MOBI 文件的加载速度
- 修改了 EPUB，AZW,AZW3,MOBI 章节名读取机制，降低出现未知章节或空白章节名的几率
- 自动移除图片后换行和自动移除页尾换行
- 改进了有关“从头开始”的设计

1.4.29版本 2019年1月27日
- 为 Windows 10 1809 （Build 17134）重构了后台朗读功能
>本软件会根据系统版本自动决定使用的后台朗读（新版、旧版）解决方案。
- 重写了TXT的章节名查找机制，解决多种情况下查找不准的问题
- 重写了EPUB的章节名查找系统，以兼容锚点链接的目录系统
- 修复了一个可能导致阅读界面无限加载的问题

1.4.26版本 2019年1月26日
- 新增对 mobi azw azw3 等格式的支持（暂时只能通过拖动文件到阅读器的方式导入）
- 新增对 EPUB 锚点目录的支持

1.4.25版本 2018年12月2日
- 简单适配系统文本缩放（见设置>轻松使用>显示>放大文本）
- 修复在线解析引擎的一些问题

**1.4.23** -2018年10月1日
- 修复章节切换的一些问题
- 修复不导入打开书籍无法更换自定义封面的问题
- 重构多线程下载等功能的部分代码，提升稳定性和性能

**1.4.22** -2018年9月16日
- 修复多线程下载的一些 BUG

**1.4.20** -2018年9月15日
- 修复桌面等设备上自动全屏开关无效的问题
- 修复 EPUB 导入的一些问题
- 改进无效封面处理方式
- 支持调整字间距
- 支持调整字间距

**1.4.18** -2018年8月22日
- 改善辅助功能体验

**1.4.17** -2018年8月19日
- 修复网络书籍搜索的跳过按钮可能变灰的问题
- 增加缓存机制，提升不导入书籍于书架的性能
>在 **设置>基本设置** 页面启用 **“启用缓存以尝试提升保护不导入书籍的书架的性能”** 开关即可使用。

**1.4.16** -2018年8月1日
- 修复在线解析引擎的一些问题
- 提升不导入打开书籍相关的性能问题

**1.4.15** -2018年6月24日
- 修复不导入打开的一些兼容性问题
- 修复在线解析引擎的一些问题
- 增加对离线 OneDrive 文件的支持
- 从文件管理器打开已经出现在最近列表中的不导入书籍不再清空书签

**1.4.14** -2018年6月10日
- 正式上线“书籍不导入打开”功能，快来体验吧！
>**“书籍不导入打开”** 功能可以在不导入书籍的前提下直接阅读书籍。</br>
**使用方法：** 在 **设置>基本设置** 页面启用 **“直接打开文件时不导入书籍”** 开关，在 **文件管理器** 使用越飞阅读打开书籍文件即可体验。
- 修复已经在阅读界面时从时间线导航无效的问题
- 修复滚屏模式下某些 EPUB 文件闪退的问题
- 修复不导入打开自动分章在非 Unicode 编码下不能正常工作的问题

**1.4.12** -2018年6月9日
- 修复此前版本引入的一些可能导致闪退的问题
- 修复文字显示区域可能计算错误的问题
- 改善了阅读设置的键盘操作体验

**1.4.10** -2018年5月27日
- 修复当阅读器内存在任何不导入打开书籍时，云同步功能无法使用的问题

**1.4.9** -2018年5月27日
- 修复 Unicode 编码的直接打开的 TXT 文件不能正确识别书籍末尾的问题
- 在书籍简介中显示不导入书籍的路径
- 在时间线中显示不导入书籍的路径

**1.4.8** -2018年5月19日
- 支持“Windows时间线”，增加时间线功能开关
- 修复向不导入书籍添加书签无效的问题
- 修复滚屏模式无法加载某些带图书籍图片的问题
- 修复不导入打开设置无效的问题

**1.4.7** -2018年5月12日
- 新增“不导入打开”功能：现在可以无需导入直接阅览书籍了
- 增加对 Windows 10 1803 （Build 17134）的支持

**1.4.6** -2018年5月1日
- 修复书籍内搜索无法使用的问题
- 代码优化

**1.4.4** -2018年2月23日
- 修复前一版本版本引入的 MiniMef 组件的一些问题
>该问题可能导致进度跳转，书籍显示名称以及某些类型书籍的内容显示不正常

**1.4.3** -2018年2月12日 **【紧急更新】**
- 修复在线书籍大量源失效的问题
- 修复无法导入和阅读本地书籍的问题

**1.4.1** -2018年2月11日
- 解决有一定几率无法在首页调整窗口大小的问题

**1.4.0** -2018年2月9日
- 细节改进

::: tip 提示
早前版本的更新提示可以在[这里](http://www.yinyue200.com/zh-cn/appList/yfxsrt/gxrz.aspx?language=zh-CN&tover=1.3.500.0)阅读。
:::
