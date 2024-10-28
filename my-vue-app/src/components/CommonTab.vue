<script setup>
import {ref,computed} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {useAllDataStore} from '@/stores'

const store = useAllDataStore()
const tags = computed(() => store.state.tags)
const route = useRoute()
const router = useRouter()
const handleMenu = (tag)=>{
  router.push(tag.name)
  store.selectMenu(tag)
}
const handleClose = (tag,index)=>{
  //通过pinia管理
 store.updateTags(tag)
 //如果点击的关闭的tag不是当前页面
 if(tag.name!== route.name) return 

 if(index === store.state.tags.length){
  store.selectMenu(tags.value[index-1])
  router.push(tags.value[index-1].name)
 }else{
  store.selectMenu(tags.value[index])
  router.push(tags.value[index].name)

 }
}

</script>

<template>
  <div class="tags">
    <el-tag
    v-for="(tag,index) in tags"
    :key="tag.name"
    :closable="tag.name!== 'home'"
    :effect="route.name === tag.name ? 'dark' : 'plain'"
    @click="handleMenu(tag)"
    @close="handleClose(tag,index)"
    >
    {{ tag.label }}
    </el-tag>
  </div>
    </template>

  <style lang="less" scoped>
.tags{
  margin: 20px 0 0 20px;
}
.el-tab{
  margin-right: 10px;
}

  </style>