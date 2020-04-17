<template>
  <div>
    <NavBar/>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
            <Slider/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h1>Hello From Salman</h1>
          <p>{{msg}}</p>
        </div>
        <div class="col-md-12">
          <Talks/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <GitHubUserComponent/>
        </div>
        <div class="col-md-6">
          <GitHubUserComponent/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GitHubUserComponent from '@/components/github'
import NavBar from '@/components/navbar'
import Slider from '@/components/slider'
import Talks from '@/components/talks'
  export default {
    name: 'MainComponent',
    components:{
      GitHubUserComponent,
      NavBar,
      Slider,
      Talks
    },
    data:()=>({
      msg:'Trump is Modi',
    }),
    methods:{
      
    }
  }
</script>

<style>
  
</style>