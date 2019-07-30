<template>
  <ul id="app">
    <li class="item">
      <h1>位置</h1>
      <div>
        <button @click="top">top</button>
        <button @click="center">center</button>
        <button @click="bottom">bottom</button>
      </div>
    </li>
    <li class="item">
      <h1>动画</h1>
      <div>
        <button @click="$toast('fade')">fade</button>
        <button @click="zoom">zoom</button>
        <button @click="none">none</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'app',
  methods: {
    top: function() {
      this.$toast({
        message: '顶部信息',
        position: 'top',
      })
    },
    center: function() {
      this.$toast({
        message: '中间信息',
        position: 'center'
      })
    },
    bottom: function() {
      this.$toast({
        message: '底部信息',
        position: 'bottom'
      })
    },
    zoom() {
      this.$toast({
        message: 'zoom',
        animate: 'zoom'
      })
    },
    none() {
      this.$toast({
        message: 'none',
        animate: 'none'
      })
    }
  }
};
</script>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}
button {
  width: 150px;
  margin: 10px;
  height: 40px;
  background: #42BC85;
  outline: none;
  border: none;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
</style>
