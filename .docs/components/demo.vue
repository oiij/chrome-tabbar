<script setup lang='ts'>
import type { TabsOptions } from '../../src/index'
import { reactive, ref } from 'vue'
import { CTabItem, CTabs } from '../../src/index'

const value = ref('tab1')
const options: TabsOptions[] = reactive([
  {
    name: 'tab1',
  },
  {
    name: 'tab2',
  },
])
function handleAdd() {
  const name = `tab${options.length + 1}`
  options.push({
    name,
  })
  value.value = name
}
function onClose(v: string) {
  const index = options.findIndex(f => f.name === v)
  options.splice(index, 1)
}
</script>

<template>
  <CTabs v-model:value="value" @close="onClose">
    <CTabItem v-for="(item, index) in options" :key="index" :name="item.name" closeable>
      {{ item.name }}
    </CTabItem>
    <template #suffix>
      <div class="w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center cursor-pointer m-r-[5px]" @click="handleAdd">
        <i class="i-ri-add-fill" />
      </div>
    </template>
  </CTabs>
</template>

<style scoped>

</style>
