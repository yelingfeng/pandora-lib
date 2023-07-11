<script lang="ts" setup>
import { h } from 'vue'
import { useTheme } from '@/hooks/useTheme'
import { ElNotification } from 'element-plus'
// 将 Element Plus 的语言设置为中文
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const { initTheme } = useTheme()

/** 初始化主题 */
initTheme()

/** 作者小心思 */
ElNotification({
  title: 'Hello',
  message: '你好,欢迎登陆系统',
  duration: 0,
  position: 'bottom-right',
})
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>
