<template>
  <div class="home-header">
    <template v-if="!menuCollapsed">
      <icon-button tooltip="折叠" icon="MenuFoldOutlined" @click="foldMenu"/>
    </template>
    <template v-else>
      <icon-button tooltip="展开" icon="MenuUnfoldOutlined" @click="unfoldMenu"/>
    </template>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import IconButton from '@/components/IconButton'

export default defineComponent({
  name: 'Header',
  components: { IconButton },
  setup () {
    const store = useStore()
    const foldMenu = () => store.commit('foldMenu')
    const unfoldMenu = () => store.commit('unfoldMenu')
    const menuCollapsed = computed(() => store.state.menuCollapsed)
    return {
      foldMenu,
      unfoldMenu,
      menuCollapsed
    }
  }
})
</script>

<style lang="less">
.home-header {
  height: 60px;
  display: flex;
  flex-direction: row;
}

</style>
