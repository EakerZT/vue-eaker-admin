<template>
  <div class="home-header">
    <div class="pane">
      <template v-if="!menuCollapsed">
        <icon-button tooltip="折叠" icon="ri-menu-fold-line" @click="foldMenu"/>
      </template>
      <template v-else>
        <icon-button tooltip="展开" icon="ri-menu-unfold-line" @click="unfoldMenu"/>
      </template>
    </div>
    <div class="pane">
      <template v-if="fullscreen">
        <icon-button tooltip="退出全屏" icon="ri-fullscreen-exit-line" @click="toggle"/>
      </template>
      <template v-else>
        <icon-button tooltip="进入全屏" icon="ri-fullscreen-line" @click="toggle"/>
      </template>
      <remix-icon/>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconButton from '@/components/IconButton'
import screenfull from 'screenfull'
import RemixIcon from '@/components/RemixIcon'

export default defineComponent({
  name: 'Header',
  components: { RemixIcon, IconButton },
  setup () {
    const store = useStore()
    const foldMenu = () => store.commit('foldMenu')
    const unfoldMenu = () => store.commit('unfoldMenu')
    const menuCollapsed = computed(() => store.state.menuCollapsed)
    const fullscreen = ref(false)
    document.addEventListener('fullscreenchange', () => fullscreen.value = !!document.fullscreenElement)
    const toggle = () => {
      screenfull.toggle()
    }
    return {
      foldMenu,
      unfoldMenu,
      menuCollapsed,
      fullscreen,
      toggle
    }
  }
})
</script>

<style lang="less">
.home-header {
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .pane{
    height: 60px;
    display: flex;
    flex-direction: row;
  }
}

</style>
