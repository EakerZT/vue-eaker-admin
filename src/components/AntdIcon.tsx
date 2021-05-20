import { defineComponent, createVNode } from 'vue'
import * as ANTDIcon from '@ant-design/icons-vue'

export default defineComponent({
  name: 'AntdIcon',
  emits: [],
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  components: { ...ANTDIcon },
  setup (props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const e = () => createVNode(ANTDIcon[props.icon])
    return () => (
      <>
        {e()}
      </>
    )
  }
})
