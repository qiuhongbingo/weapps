# weapps

> 支持用一个项目管理多个微信小程序

## 安装

```bash
git clone git@github.com:qhbhq/weapps.git
```

```bash
npm install
```

## 目录结构

* `apps/`：存放全部小程序，可在微信开发者工具打开对应小程序
* `build/`：存放构建脚本
* `common/`：存放公共代码
* `components/`：存放公共组件
* `styles/`：存放公共样式
* `templates/`：存放公共模版

## 开发

```bash
npm run dev
```

`dev` 命令公共代码同步给全部小程序，存放在以下划线开头的文件夹，供各小程序调用

```bash
npm run clean
```

`clean` 命令清理公共代码

```bash
npm run lint
```

`lint` 命令执行代码校验

## 规范

* 项目集成了 `husky` 和 `eslint`，代码 `commit` 前会自动执行校验
