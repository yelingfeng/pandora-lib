
## pandora-lib 介绍

![gitub](https://img.shields.io/github/package-json/v/yelingfeng/pandora-lib)
![npm](https://img.shields.io/npm/v/pandora-lib)

pandora 组件库

## 文档

- [文档示例](https://yelingfeng.github.io/pandora-lib/)


### 安装

```bash
yarn
```

### 开发模式

> Benefited from  [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages), the `src/pages/index.vue` is the entry page for development. You can visit `/[component-name]/demo` to check component, like `http://localhost:3000/#/button/demo`.

```bash
yarn dev
```

### 构建

```bash
yarn build
```

### 测试

```bash
yarn test
```

### 生成入口文件

> 入口文件是 rollup 的 `input` 选项。

```bash
yarn gen-entry
```

### 生成一个新的组件

> 您必须为此命令指定组件名称。

```bash
yarn gen [component\'s name]
```

### 生成 d.ts 文件

```bash
npx esno ./scripts/gen-dts.ts
```

### 发布你的组件库

> This command will add git tag、generate changelog. You can test your lib with argument `--dry`

```bash
yarn release [--dry]
```

## 文档的构建

> :exclamation: Noted: you should run `yarn build:lib` before run this command. Because the docs need the build bundle.

### 开发文档

```bash
yarn docs:dev
```

### 构建文档

```bash
yarn docs:build
```

#

## 推荐编辑器配置

[VSCode](https://code.visualstudio.com/) + [Volar](https://github.com/johnsoncodehk/volar).

### 如果你使用 `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## 此项目离不开以下开源项目

- [unplugin-vue](https://github.com/sxzz/unplugin-vue)
- [esbuild-plugin-vue](https://github.com/egoist/esbuild-plugin-vue)
- [vue-dts-gen](https://github.com/egoist/vue-dts-gen)
- [vueuse](https://github.com/vueuse/vueuse)
- [vitepress-for-component](https://github.com/dewfall123/vitepress-for-component)
- [unocss](https://github.com/unocss/unocss)
- [Element Plus](https://github.com/element-plus/element-plus)

