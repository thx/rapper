## 2019.12.13 v0.2.1

- GET 请求参数默认使用 `JSON.stringfgify` 处理
- 增加一大波友好的用户提示
- 修复 useResponse 类型定义错误
- 移除 rapperSelector，新增 rapperDataSelector、rapperBaseSelector 代替
- 类型定义优化，降低模板代码量

## 2019.12.03 v0.1.3

- rapper 生成的所有模板文件增加 md5，用于校验模板文件是否被用户手动更改了
- Rap 仓库 id 更改后，首次生成模板代码不再进行接口依赖检测
