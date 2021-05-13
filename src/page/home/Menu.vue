<template>
  <div class="menu-title">
    <div>
      <remix-icon style="color: white" icon="ri-sun-line" size="2x"/>
    </div>
    <div v-if="!menuCollapsed" class="name">
      Vue Eaker Admin
    </div>
  </div>
  <a-menu
    mode="inline"
    theme="dark"
    style="height: 100vh"
    v-model:selectedKeys="selectedKeys">
    <a-menu-item key="menu1">
      <remix-icon icon="ri-apps-line" class="anticon"/>
      <span>菜单项</span>
    </a-menu-item>
    <a-menu-item key="menu2">
      <remix-icon icon="ri-apps-line" class="anticon"/>
      <span>菜单项2</span>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import RemixIcon from '@/components/RemixIcon'

export default defineComponent({
  name: 'Menu',
  components: { RemixIcon },
  setup () {
    const store = useStore()
    const menuCollapsed = computed(() => store.state.menuCollapsed)
    const selectedKeys = ref([])
    return {
      selectedKeys,
      menuCollapsed
    }
  }
})
</script>

<style lang="less">
@import '~ant-design-vue/dist/antd.less';

.menu-title {
  display: flex;
  flex-direction: row;
  height: 60px;
  color: white;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow: hidden;

  .name {
    margin-left: 8px;
    color: white;
    font-size: 20px;
    overflow: hidden;
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    user-select: none
  }
}

.ant-menu-item {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  height: 48px !important;
  line-height: 48px !important;

  &:hover {
    background: @primary-1;
  }
}

.ant-menu-submenu-title {
  &:hover {
    background: @primary-1;
  }
}
</style>
