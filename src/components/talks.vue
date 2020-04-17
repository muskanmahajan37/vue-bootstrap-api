<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <button class="btn btn-info" v-on:click="showData">Show Talks</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4" v-for="(item,index) in talksData" :key="index">
                <TalkCard :data="item" />
            </div>
        </div>
    </div>
</template>

<script>
import TalkCard from '@/components/talksCard'
    export default {
        name:'talksComponent',
        components:{
            TalkCard
        },
        data:()=>({
            talksData:[]
        }),
        methods:{
            showData(){
                fetch('https://vrijraj-backend-server.herokuapp.com/api/v1/talks').then(res=>res.json()).then(data=>{
                    console.log(data.data)
                    this.talksData = data.data
                }).catch(e=>{
                    console.log(e)
                })
            }
        }
    }
</script>