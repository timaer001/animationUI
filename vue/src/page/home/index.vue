<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/helloworld'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
