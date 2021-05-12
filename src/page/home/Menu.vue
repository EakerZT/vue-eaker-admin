<template>
    <a-menu
      mode="inline"
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="menu1">
        <PieChartOutlined />
        <span>菜单项</span>
      </a-menu-item>
      <a-menu-item key="menu2">
        <PieChartOutlined />
        <span>菜单项2</span>
      </a-menu-item>
    </a-menu>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Menu',
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
.ant-menu-item {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  height: 48px !important;
  line-height: 48px !important;
  &:hover{
    background: @primary-1;
  }
}

.ant-menu-submenu-title {
  &:hover{
    background: @primary-1;
  }
}
</style>
