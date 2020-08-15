<template>
  <div class="hello">
    <h1 ref='el'>{{ msg }}</h1>
    {{ state.count }} doulbe is {{ double }}
    <input type="button" value='+' @click='inc' />
  </div>
</template>

<script>
import { ref, reactive, computed, watch, onMounted } from 'vue'

export default {
  name: 'HelloWorld',
  props: { msg: String },
  setup(props) {
    // props
    console.log(20200814205739, props.msg)

    // data
    let state = reactive({ count: 0 })

    // computed
    let double = computed(() => state.count * 2)

    // method
    let inc = () => ++state.count

    // watch
    watch(() => state.count, (newV, oldV) => console.log(newV, oldV), { immediate: true, deep: true })

    // $refs
    let el = ref(null)

    // mounted
    onMounted(() => {
      // $refs 只有在 onMounted 才能使用。
      let dom = el.value
      // 修改标题顔色
      dom.style.color = 'blue'
    })

    return { state, double, inc, el }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
