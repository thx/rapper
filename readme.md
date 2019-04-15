# Rapper

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
