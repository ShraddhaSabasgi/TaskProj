<template>
    <div class="container">
        <h2> Hello from Store </h2>
        

        <div class="row">
            <div class="form-group">
                <t-button class="btn btn-primary" v-on:click= buttonClicked> Click Me </t-button> 
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5">
                <h2 id="mainTitleVar" name="mainTitleVar"> {{$store.state.mainTitle}} </h2>
            </div>
            <div class="col-lg-6">
                <h2>{{  combinedValue   }}</h2>
            </div>
        </div>
        <div class="row" style="background-color:#ffff02">
            <div class="col-lg-4">
                <h1  id="Welcometxt"> Welcome Guest ! </h1>
            </div>
            <div class="col-lg-3">
                <t-input type="text" name="userName" id="userName1" placeholder="Enter Name " />
                <br>
                <t-button value="Click me" v-on:click="saveUsername"> Save me  </t-button>
            </div>
        </div>
    </div>
</template>
<script>


export default ({
    name:"StorePratice",
    data(){
        return {
            User : ''
        }

    },
    computed:{
        combinedValue()
        {
            return this.$store.getters.valueCombined
        }

    },
    methods:
    {
        mounted()
        {
            if(localStorage.getItem('User') === null)
            {
                document.getElementById('Welcometxt').innerHTML = "Welcome Guest !"
            }
            else{
                this.User = localStorage.getItem('User')
                document.getElementById('Welcometxt').innerHTML = "Welcome -"+this.User+"! "
            
            }

        },
        buttonClicked : function()
        {
            // this.$store.commit('setMainTitle', {title : "Changed State using mutations - commit"}) 
            this.$store.dispatch('setMainTitle', {title:'Title Changed from Actions - dispatch'})  
        },
        saveUsername:function()
        {
            this.User  = document.getElementById("userName1").value;
            localStorage. setItem('User',this.User)
            document.getElementById('Welcometxt').innerHTML = "Thank You -"+this.User
            document.getElementById("userName1").innerHTML= ""
            //alert(User)
            // if(localStorage.getItem('User') == "")
            // {
            
            // }

        }
    }
})
</script>
<style>
</style>
