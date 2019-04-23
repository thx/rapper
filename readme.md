# Rapper

## 有关于数组数据类型推导的规则

当类型为数组时，根据生成规则和初始值不同会有不同的表现

根据 [MockJS 的规则](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)

### 1.

如果 Array 下面有子数据节点，那么 array 的类型肯定是 `Array<Object>`

Object 的类型会根据子节点推断

### 2.

当 rule 为 +1 时 mockjs 从属性值 a=Array 中顺序选取 1 个元素，作为最终值。

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
