<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import icons from '../../../data/icons'

const members = [{
  avatar: '/logo.png',
  name: 'Yinux',
  title: '',
  links: [
    { link: 'https://github.com/Yinux', icon: 'github' },
    { link: 'https://gitee.com/Yinux', icon: { svg: icons.gitee } }
  ]
}]
</script>

<template>
  <VPTeamMembers size="small" :members="members" />
</template>