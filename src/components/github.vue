<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            <button class="btn btn-primary" v-on:click="showUsers">Show Github Users</button>
            </div>
        </div>
        <div class="row mt-5" v-if="loader">
            <div class="col-md-12 text-center">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
        </div>
        <div class="row mt-5" v-else>
            <div class="col-md-3" v-for="(item,index) in githubUserData" :key="index">
            <div class="card">
                <img :src="item.avatar_url" width="100%" alt="">
                <p>{{item.login}}</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'GithubComponent',
        data:()=>({
            githubUserData:[],
            loader:false
        }),
        methods: {
            showUsers(){
                this.loader = true
                fetch('https://api.github.com/users').then(res=>res.json()).then(data=>{
                    console.log(data)
                    this.loader = false
                    this.githubUserData = data
                }).catch(e=>{
                    this.loader = false
                    console.log(e)
                })
            }
        },
    }
</script>