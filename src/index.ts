import type { Ref } from 'vue'
import { useInjectionKey } from '@oiij/use'
import 'uno.css'

import './index.css'

export const tabsBarInjectionKey = useInjectionKey<{
  list: Ref<string[]>
  activeName: Ref<string | undefined>
  pushItem: (name: string) => void
  removeItem: (name: string) => void
  itemClick: (name: string) => void
}>('tabs-bar-injection-key')

export { default as CTabItem } from './TabItem.vue'
export { default as CTabs } from './Tabs.vue'
export type { TabsOptions } from './Tabs.vue'
