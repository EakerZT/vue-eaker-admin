<template>
    <a-tooltip>
      <template #title>{{ $props.tooltip }}</template>
      <div v-bind="$attrs" class="icon-button">
        <remix-icon :icon="$props.icon" />
      </div>
    </a-tooltip>
</template>

<script>
import { defineComponent } from 'vue'
import RemixIcon from '@/components/RemixIcon'

export default defineComponent({
  name: 'IconButton',
  components: { RemixIcon },
  inheritAttrs: false,
  props: {
    tooltip: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="less">
@import '~ant-design-vue/dist/antd.less';

.icon-button {
  cursor: pointer;
  font-size: 20px;
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
  &:hover {
    background: @primary-1;
    color: @primary-color;
  }
}

</style>
