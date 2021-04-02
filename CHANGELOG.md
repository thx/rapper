## 2021.04.02 v1.2.0
- 增加请求防抖，默认时间片间隔是 1000ms [issue](https://work.aone.alibaba-inc.com/issue/33518480)
- 支持 `string`、`number` 组成的联合类型 [issue](https://github.com/thx/rapper/issues/9)

## 2020.10.28 v1.1.6-beta.0
- 修复 useAPI 请求参数匹配失败导致响应数据不更新的问题

## 2020.10.28 v1.1.5-beta.1
- 修复 useAPI 请求参数的 value isNaN 判断错误导致请求可能无法发送

## 2020.10.28 v1.1.5-beta.0
- 修复 useAPI 请求参数的 value 是 NaN 时可能导致的死循环问题

## 2020.10.28 v1.1.4-beta.1
- 修复 useAPI 请求参数每次都是 new object 导致的性能问题

## 2020.10.28 v1.1.4-beta.0
- 对于 application/json 接口，如果params传入 Array，会被转成 Object，现已修复

## 2020.09.01 v1.1.2-beta.1
- 修复 useAPI 请求参数为 objet 或 array 时，死循环的问题

## 2020.09.01 v1.1.2-beta.0
- 修复 useAPI manual 模式时，errorMessage 可能无法清除的bug

## 2020.08.07 v.1.1.1
- 添加 @ts-nocheck 避免 tsc 检查问题
- 修复 overrideFetch headers 设置不生效的bug [#7](https://github.com/thx/rapper/issues/7)
- 修复协同仓库拉取失败的bug
- 增加 `npm run rapper` 时的版本提示
- 变更 defaultFetch 行为：当 fetch 的 response.ok 为 false 时，抛出的异常中添加 response，以便获取响应码 ```{ message, response }```
- 修复协同仓库拉取失败
- 修复 useAPI request 可能导致的死循环
- 修复 useAPI request 不随请求参数更新的bug
- useAPI 手动发送请求时，默认带上请求参数
- useAPI 第二参新增 shouldAutoRequest，用于给自动发送请求场景加过滤器

## 2020.07.21 v.1.1.0
- useAPI 新增 updateTiming 参数，可用于配置响应数据更新时机（防止table数据更新时视觉抖动）
- 由于外网 rap2 暂不支持 https，修改外网链接地址
- 对接口中的空格兼容处理
- 对接口url格式校验提示优化
- 修复 useAPI 捕获异常 bug，默认捕获异常
- useAPI不再允许传入自定义的fetch，避免数据不一致的问题出现


## 2020.07.03 v.1.0.4

- rapper 生成失败及时停止
- 从不同的 registry 获取最新版本
- 修正数组参数中必填项无法正确标注的问题
- 修正 **root** 标记的根数组无法正确生成类型的问题
- 新增 overrideFetch API 用户自定义 fetch，即将废弃 createFetch API
- 修复 useAPI 的 bug

## 2020.05.13 v1.0.3

- 支持 user/{id} 类型的 restful API
- 更正 encoding 符合 ts 枚举：UTF-8 to utf-8
- 不露出 beta 版本的升级提示

## 2020.04.05 v1.0.2

- 修复 fetch 的 content-type 是 multipart/form-data 的情况下，请求参数的值为`0`、`undefined`、`null`时，可能会被自动过滤的 bug

## 2020.04.09 v1.0.1

- 修复 useAPI 默认 mode 在请求参数变化的情况下不发送请求的 bug

## 2020.03.20 v1.0.0

- 新增 useAPI
- lib 移入 node_modules，相应的，用户需要将包依赖由 devDependencies 改成 dependencies

## 2020.2.20 v0.2.3

- 增加 content-type 是 multipart/form-data 的场景，可用于上传文件，form 表单提交
- 修复了请求参数 params[key] = 0 时可能被忽略的 bug

## 2019.12.27 v0.2.2

- 修复 prefix 解析错误
- createFetch 支持 query 参数
- 增加生成的模板文件版本校验，防止低版本覆盖高版本

## 2019.12.13 v0.2.1

- GET 请求参数默认使用 `JSON.stringify` 处理
- 增加一大波友好的用户提示
- 修复 useResponse 类型定义错误
- 移除 rapperSelector，新增 rapperDataSelector、rapperBaseSelector 代替
- 类型定义优化，降低模板代码量

## 2019.12.03 v0.1.3

- rapper 生成的所有模板文件增加 md5，用于校验模板文件是否被用户手动更改了
- Rap 仓库 id 更改后，首次生成模板代码不再进行接口依赖检测
