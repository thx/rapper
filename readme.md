# Rapper

## 有关于数组数据类型推导的规则

当类型为数组时，根据生成规则和初始值不同会有不同的表现

根据 [MockJS 的规则](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)

### 1.

如果 Array 下面有子数据节点，那么 array 的类型肯定是 `Array<Object>`

Object 的类型会根据子节点推断

### 2.

当 rule 为 +1 时 mockjs 从属性值 Array 中顺序选取 1 个元素，作为最终值。

当 rule 为 1 时 mockjs 从属性值 Array 中随机选取 1 个元素，作为最终值。

这时候这个属性的类型并非 Array，而是 Array 子元素的类型

类型会根据 Array 初始值的类型判断，初始值为 `[1,2,3]`, 那么会推断出 `number`

### 3.

当 rule 为空时，且有初始值的时候，会生成 `array<primitive>`

primitive 会根据 Array 初始值的类型判断，初始值为 `[1,2,3]` 或 `1` 都会推断出来 `number[]`

mockjs 并无这个规定，是弥补 rap 无法直接定义这样类型数据的缺陷设定

## basefetch 的函数签名

```typescript
/**
 *  如果关闭了 useCommonJsModule
 *  按照下面格式书写 baseFetch
 */
function(
  url: string,
  method: string,
  params: object,
  extra: {
    /* 自定义参数 interface */
  }
) {}

export default function<Res extends {[x: string]: any}>(
    url: string,
    method: string,
    params: object,
    extra: {
      /* 自定义参数 interface */
    }
  ) : Promise<Res["data"]> {
      return myfetch(url, method) as Promise<Res["data"]>
  }


/**
 *  如果开启了 useCommonJsModule
 *  按照下面格式书写 baseFetch
 */
export = function<Res extends {[x: string]: any}>(
    url: string,
    method: string,
    params: object,
    extra: {
      /* 自定义参数 interface */
    }
  ) : Promise<Res["data"]> {
      return myfetch(url, method)
  }
```

# Rap-Redux

## 使用手册

### 第一步、配置 redux 初始化信息

#### 在 createStore 的时候利用 compose 增加一个 store enhancer

```js
import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { rapEnhancer } from '@ali/rapper'
import reducers from './reducer'

const loggerMiddleware = createLogger()

const enhancer = compose(
    /** rapEnhancer 即为增加的 store enhancer */
    rapEnhancer(),
    applyMiddleware(loggerMiddleware)
)

const store = createStore(reducers, enhancer)
```

#### 在 combineReducers 的时候，增加 rapReducers （请求响应的数据就存在这里面）

```js
import { rapReducers } from '@ali/rapper'

combineReducers({
    duck: DuckReducer,
    ...rapReducers,
})
```

### 第二步、配置模板文件生成脚本，生成模板文件

```js
/** rap-redux.js */

const { createModel } = require('@ali/rapper')
const { resolve } = require('path')

createModel({
    /** 必须配置 */
    type: 'redux',
    /** 必须配置，rap项目id */
    projectId: 3564,
    /** 可选，输出文件的目录，默认是 ./model */
    outputPath: resolve(__dirname, '../requestModel'),
    /** 可选，rap地址，默认是 http://rap2api.taobao.org */
    rapUrl: 'https://rap2api.alibaba-inc.com',
    /** 可选，服务端api地址，默认是根目录相对路径 */
    serverAPI: 'https://rap2api.alibaba-inc.com/app/mock/3283',
})
    .then(() => {
        console.log('rapper:generate model success')
    })
    .catch(err => {
        console.log('rapper:generate model failed', err)
    })
```

配置好如上的配置文件后，执行 `node rap-redux.js` 就能生成模板文件了

### 第三步、愉快的使用

```js
/** import 的目录就是上面第二步配置的 outputPath */
import { fetch, useRap, useRapAll, clearRap } from 'requestModel'

/** 发送请求，返回的是一个 promise，会把响应数据返回 */
fetch['GET/adgroup/price/update$']()
    .then(response => {
        console.log('请求成功', response)
    })
    .catch(e => {
        console.log('请求失败', e)
    })

/** 以 Hooks 的方式获取请求回来的数据 */
const rapData = useRap['GET/adgroup/price/update$']()

/** 以 Hooks 的方式获取请求回来的所有数据（包括历史数据） */
const rapData = useRapAll['GET/adgroup/price/update$']()

/** 清除数据 */
clearRap['GET/adgroup/price/update$']()
```

## 高级配置

### 1、请求响应数据过滤

在实际业务中，我们的接口响应数据会有很多辅助参数，我们真正关心的数据可能只有部分，比如：

```json
{
    "errno": 0,
    "errmsg": "",
    "result": {
        "tableData": [
            {
                "id": 1
            },
            {
                "id": 2
            }
        ]
    }
}
```

我们真正想要的数据是 `result` 参数，`error`、`errmsg`等都只是通用的辅助参数

这里，可以给 `rapEnhancer` 传一个函数作为参数，来过滤响应数据，让存入 redux store 的数据更加纯净，类似下面这样：

```js
import { rapEnhancer } from '@ali/rapper'

rapEnhancer({
    responseMapper: responseData => responseData.result,
})
```

### 2、请求响应数据缓存长度设置

我们可以将多次请求响应的数据缓存起来，默认缓存最近两次请求的数据，当然也可以通过配置 `maxCahce` 来自定义缓存长度

```js
import { rapEnhancer } from '@ali/rapper'

rapEnhancer({
    maxCache: 3, // 也支持 Infinity
})
```

### 3、全局的请求成功、失败回调

在这里，我们可以定义全局的请求回调，比如定义请求失败后的提示框

```js
import { rapEnhancer } from '@ali/rapper'

rapEnhancer({
    successCb: (responseData) => {},
    failCb: (e) => {}
}),
```

### 4、单个请求是否调用请求成功回调、失败回调

在定义全局的请求回调后，对于部分请求，我们不希望给用户提示成功或者失败，所以这里也支持自定义，可以通过配置 `isHideSuccess`、`isHideFail` 来实现

```js
/** import 的目录就是上面第二步配置的 outputPath */
import { fetch } from 'requestModel'

/** 发送请求 */
fetch['GET/adgroup/price/update$']({}, { isHideSuccess: true, isHideFail: true })
```
