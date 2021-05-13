<template>
  <span>
    <i :class="[$props.icon,`ri-${$props.size}`]"></i>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RemixIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: () => '1x'
    }
  }
})
</script>

<style scoped>

</style>
