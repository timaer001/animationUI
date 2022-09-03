<template>
  <div class="home">
       <div id="test1">
          what a fuck
       </div>
       <input id="myname1" value="heloo" />
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'jq1',
  mounted(){
     console.log($("#test1").html())
     console.log($("#myname1").val())
  },
  methods:{
   
  }
}
</script>
