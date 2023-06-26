import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import vue from 'unplugin-vue/rollup'
import alias from '@rollup/plugin-alias'
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'

const outPubOptions = {
  globals: {
    vue: 'Vue',
  },
}

const input = 'src/packages/pandora-lib.ts'

const getPlugins = () => [
  replace({
    preventAssignment: true,
    values: {
      'import.meta.env.PROD': 'true',
    },
  }),
  nodeResolve(),
  vue({
    style: {
      preprocessLang: 'styl',
      preprocessOptions: {
        stylus: {
          additionalData: `@import '${process.cwd()}/src/styles/index.styl'`,
        },
      },
    },
  }),
  alias({
    entries: [
      {
        find: /^(pandora-lib\/)(.*)/,
        replacement: `${path.resolve(
          __dirname,
          '../src/packages'
        )}/$2/index.ts`,
      },
    ],
  }),
  esbuild({
    minify: true,
  }),
  // genCss(),
  postcss({
    extract: true,
  }),
]

const configs = []

configs.push({
  input,
  output: {
    file: `dist/es/pandora-lib.esm.js`,
    format: 'es',
    ...outPubOptions,
  },
  plugins: getPlugins(),
  external(id) {
    const reg = /^vue/.test(id) || /^@vue/.test(id)
    return reg
  },
})

configs.push({
  input,
  output: {
    file: `dist/lib/pandora-lib.umd.js`,
    format: 'umd',
    name: `pandora-lib`,
    ...outPubOptions,
  },
  plugins: getPlugins(),
  external(id) {
    const reg =
      /^vue/.test(id) ||
      /^@vue/.test(id) ||
      /^jpeg-js/.test(id)
    return reg
  },
})

export default configs
