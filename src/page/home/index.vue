<template>
  <a-layout>
    <a-layout-sider :collapsed="menuCollapsed" :trigger="null" collapsible width="256px">
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header/>
      </a-layout-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Header from '@/page/home/Header.vue'
import Menu from '@/page/home/Menu.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'PageHome',
  components: {
    Menu,
    Header
  },
  setup () {
    const store = useStore()
    const menuCollapsed = computed(() => store.state.menuCollapsed)
    return {
      menuCollapsed
    }
  }
})
</script>

<style lang="less">
.home-page {
  display: flex;
  flex-direction: row;

  .right-pane {
    flex: 1;
  }
}
</style>
