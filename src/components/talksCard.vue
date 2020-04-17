<template>
    <div class="card p-3 m-1">
        <p>{{data.talktopic}}</p>
        <p>{{data.eventname}}</p>
        <p>{{data.date}}</p>
    </div>    
</template>

<script>
    export default {
        name:'TalkCard',
        props:['data'],
        data:()=>({

        }),
        methods:{

        }
    }
</script>