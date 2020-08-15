<template>
  <div class="about">
    {{ count }}
    <input type="button" value='+' @click='inc' />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from "vuex"

export default {
  name: 'about',
  setup(props) {
   let store = useStore()

   let count = computed(() => store.state.count)

   let inc = () => store.commit('inc')

   return { count, inc }
  }
}
</script>

<style scoped lang="scss">

</style>
