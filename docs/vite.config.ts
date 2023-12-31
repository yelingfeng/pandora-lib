import path from 'path'
import Unocss from 'unocss/vite'
import { MarkdownTransform } from './.vitepress/plugins/md-transform'

export default {
  lintOnSave: false,
  resolve: {
    alias: {
      'pandora-lib/': `${path.resolve(
        __dirname,
        '../dist/es'
      )}/`,
    },
  },
  plugins: [MarkdownTransform(), Unocss()],
  vite: {
    ssr: {
      noExternal: ['echarts', 'zrender', 'resize-detector'],
    },
  },
}
