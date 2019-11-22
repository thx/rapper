# craco-cli

**C**reate **R**eact **A**pp **C**onfiguration **O**verride 用以创建react项目脚手架。同时基于[create-react-app](https://github.com/facebook/create-react-app)、[react-app-rewired](https://github.com/timarney/react-app-rewired)和[customize-cra](https://github.com/arackaf/customize-cra) 进行`webpack`的自定义配置。

## Usage

> 由于该npm包安装在tnpm上，需要使用`tnpx`进行一次性安装运行，`tnpx`与`npx`实现上差异，执行时无任何按安装进度，请耐心等待。

```bash
tnpx @ali/craco-cli init <projectName>

### 或使用如下方式，下面这种方式可以看到交互的安装进度
npm_config_registry=http://registry.antfin-inc.com npx @ali/craco-cli init <projectName>

```

成功创建项目后，包含如下内置命令

### `npm run start`

本地开发模式下启动服务器， 默认运行 http://localhost:3000。 如需自定义设置打开的URL以及配置代理，支持下面参数方式更改。

```bash

PORT=443 npm run start # 自定义设置端口
HOST=https://subway.simba.local.taobao.com npm run start # 自定义设置打开的URL 需要绑定127.0.0.1
PROXY=https://subway.simba.taobao.com npm run start # 配置反向代理的域名
HTTPS=true npm run start # 支持HTTPS代理
MOCK=true npm run start # 支持rap项目代理数据
```

> 以上命令运行的方式，都是一次性执行的参数配置，如果想长久生效，可以在项目的`.env`文件中进行持久化配置。

```bash

### .env

PORT=443 # 自定义设置端口
HOST=https://subway.simba.local.taobao.com # 自定义设置打开的URL
PROXY=https://subway.simba.taobao.com # 配置反向代理的域名
HTTPS=true # 支持HTTPS代理
MOCK=true # 支持rap项目代理数据
RAPID=1004 # rap ProjectId

```

### `npm run build`

在默认的压缩情况下，支持dll配置，对于加速启动速度和命中缓存有很大提升，默认已经集成到start和build命令中


### `npm run daily`

日常发布，日常发布将会自动产生一个新的`daily/时间戳`分支进行发布

### `npm run publish`

正式发布，发布分支必须在`master`分支

### `npm run bundle-report`

执行此命令，可打开资源打包视图，用于分析打包文件大小，及时定位大文件。

### `npm run test`

执行测试命令
