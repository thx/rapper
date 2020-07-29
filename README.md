[![MIT License][license-shield]][license-url]
[![npm version](https://img.shields.io/npm/v/rap.svg)](https://www.npmjs.com/package/rap)
[![npm downloads](https://img.shields.io/npm/dt/rap.svg)](https://www.npmjs.com/package/rap)

<p align="center">
  <a href="https://github.com/thx/rapper">
    <img src="https://img.alicdn.com/tfs/TB1SlW9lQT2gK0jSZPcXXcKkpXa-1138-220.png" alt="Logo" width="250">
  </a>

  <h3 align="center">一个自带类型的请求库</h3>

  <p align="center">
    <a href="https://www.yuque.com/rap/rapper/readme">文档</a>
  </p>
</p>

## Rapper 是什么？

Rapper 是 TypeScript 的最佳拍档，它可以帮你生成具有类型定义的请求方案。

- 无需自行书写请求代码，把 HTTP 接口当做函数调用
- 请求参数/返回数据类型化，静态校验、自动补全快到飞起
- 对 React/Redux 特别优化，提供全局数据方案，hooks 轻松使用

## 来自阿里的 THX 团队

十年前我们创立了 [Rap](https://github.com/thx/rap2-delos) 项目，如今已经有相当多的用户在 Rap 中管理接口文档和 Mock 数据。

Rapper 在此基础上更进一步，利用这些已经录入的接口数据为你生成 TypeScript 类型定义以及配套的数据请求方案，让你在代码开发中省去重复的劳动。

## 快速开始

0. 如果你还没使用过 Rap，请先去我们的官方站点：http://rap2.taobao.org/ 注册一个账户并新建一个仓库，再向下进行。

1. 进入仓库，点击配置「生成 TS 代码」

<img src="https://img.alicdn.com/tfs/TB1hcail.Y1gK0jSZFMXXaWcVXa-1470-834.png" alt="install" width="700">

2. 按照指引把 Rapper 安装到项目中

3. 执行 `npm run rapper` 生成代码

4. 引入生成的 fetch 函数，调用它就能发起请求并返回带有类型的响应数据

```javascript
// 从生成的代码中引入 fetch
import { fetch } from './rapper';
// 直接使用 fetch 调用请求函数，能获得请求/返回类型校验/提示
(async function() {
  // alt+点击可以查看接口信息
  const res = await fetch['GET/example/rapper']({
    foo: '123',
  });
  const nameList = res.taskList.map(e => e.name);
})();
```

### 友好的类型约束/提示

<img src="https://img.alicdn.com/tfs/TB1xV9Dl8r0gK0jSZFnXXbRRXXa-958-422.gif" alt="smart" width="1000">

### 随时跳转到 Rap 查看接口文档

<img src="https://img.alicdn.com/tfs/TB1ejyGl4D1gK0jSZFKXXcJrVXa-1008-463.gif" alt="jump" width="1000">

## 在 React/Redux 场景下强大的数据管理方案

如果你使用 React 和 Redux，在以上基础的请求函数之外，Rapper 还为你提供精心设计过的全局数据管理方案。

以往发送一个请求要写繁杂的 interface/action/reducer/effect，现在这些都会为你准备好，你只需要一行代码即可：

```javascript
const [responseData, { isPending, errorMessage }] = useAPI['GET/duck/fetchColor'](requestParams);
```

## 文档

想要在生产中深度使用 Rapper，你可能还需要自定义请求函数、对返回的数据做统一的类型转换

具体请参考我们的文档：[https://www.yuque.com/rap/rapper](https://www.yuque.com/rap/rapper)

## 联系我们

- [Github Issue](https://github.com/thx/rapper/issues)
- 钉钉群：11789704

