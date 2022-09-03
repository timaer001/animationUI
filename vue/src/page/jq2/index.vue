<template>
  <div class="home">
       <div id="test2">
          what a fuck
       </div>
       <input id="myname2" value="heloo" />
       <div id="msg" @click="toast">提醒</div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'jq1',
  mounted(){
     console.log($("#test2").html())
     console.log($("#myname2").val())
  },
  methods:{
     toast(){
        alert($("#test2").html())
     }
  }
}
</script>
