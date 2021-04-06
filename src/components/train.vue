<template>
<div>
<h1>
     Hello {{ firstName }}

</h1>
<ul v-if="showInfo">
    <li>{{ firstName }} - {{lastName}}</li>
    <li>{{age}}</li>
    <li>{{job}}</li>
</ul>
<!-- v-on:click ="javascript code"-->
<!-- we dont need curly braces inside directives-->
<button @click="age++">Increase Age</button>
<button @click="age--">Decrease Age </button>
<div class="change" v-on:click="changeJob('Doctor')">
    Change Career
</div>
<div class="change" v-on:click="toggleShowInfo">
    <span v-if="!showInfo">Hide Info</span>
    <span v-else>Show Info</span>
    <!-- <span  v-if="showInfo">Hide Info</span> -->
    <!-- Another Way -->
  
</div>
<div v-show="showInfo">
    This content will appear and disappear
</div>
<!--
    The difference between (v-show) and (v-if) is that :
      1- v-if removes the element from the dom and this process is expensive.
      2- v-show uses css property to hide and display the element which is le
-->
<div class="box-wrap">
    <div class="box" @mouseover = "eventHandler">MouseOver</div>
    <div class="box" @mouseleave = "eventHandler">MouseLeave</div>
    <div class="box" @dblclick = "eventHandler">DoubleClick</div>
    <div class="box" @mousemove = "handleMouseMove">Mouse position- {{x}} {{y}}</div>
</div>
<div class="our-team">
    <h2>Our Team</h2>
    <ul >
        <!-- li will get myClass class when (dev.style= true) -->
        <li  v-for = "dev in developers"  :key= "dev.id" :class = "{ myClass : dev.style}" @click= "dev.style = !dev.style">
            <img :src = "dev.img" :alt = "dev.name" />
            <h2>{{dev.name}}</h2>
            <p>
                {{ dev.job }}
            </p>
        </li>
    </ul>
</div>
<div class="our-favourite-team-members">
    <ul>
        <li v-for = "fDev in filteredBooks" :key = "fDev.id" :class= "{myClass:fDev.style}">
            <img :src = "fDev.img" :alt = "fDev.name" />
            <h2>{{fDev.name}}</h2>
            <p>
                {{ fDev.job }}
            </p>
        </li>
    </ul>
</div>
<!--
    To make the value of an attribute dynamic we can use attribute binding
-->

<a href="www.google.com"> This is not Dynamic:Google</a>
<!--
    v-bind:href  ===  :href
    and it means that this attribute is dynamic
-->
<a v-bind:href = "url"  >This is Dynamic:Google</a>\
<hr/>
<div class="second-chapter">
    <!--
        capture the input element using reference template 
        -->
    <input type="text" ref="firstName">
    <button @click = "handleClick">Click me</button>

</div>
<hr/>
<h1>{{header}}</h1>
<p> {{ text }} </p>
<span style="color:red">{{bindedProps}}</span>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data(){
      //we can use string - boolean - array - number
      return{
          url:"www.facebook.com",
          showInfo:true,
          firstName:"Arwa",
          lastName:"Fahoud",
          age:25,
          job:"software Engineer",
          x:0,
          y:0,
          developers:[
              {
                  id: 0,
                  name: "arwa",
                  job: "FrontEnd Developer",
                  img: "assets/message.svg",
                  style: true
              },
              {   id: 1,
                  name: "azzam",
                  job: "Andriod Developer",
                  img: "assets/twetter.svg",
                  style:false
              },
              {   id: 2,
                  name: "amira",
                  job: "Flutter Developer",
                  style:true,
                  img: "assets/twetter.svg",
              }

          ]
          }
  },
  //Any method that I want to define for this component will go here
  methods:{
      changeJob(newJob){
          //To access the data in this component we have to say (this) before the data name
          this.job = newJob;
      },
      toggleShowInfo(){
          this.showInfo = !this.showInfo;     
      },
      eventHandler(e,data){
          //e is the event object it has to be the first parameter
          console.log(e);
          console.log(e.type);
          if(data){
              console.log(data);
          }
      },
      handleMouseMove(e){
          this.x = e.offsetX;
          this.y = e.offsetY; 
      },
      handleClick(){
          //this refers to (the current component)
          //I can access any ref that I has named
          console.log(this.$refs.firstName);
          //Add class (active to the input)
          this.$refs.firstName.classList.add('active');
          this .$refs.firstName.focus();
      }

  },
  //Computed property is a property that depend on the previousely defined data.
  //When the data changes this computed property will update.
  computed:{
      filteredBooks(){
          //This will filter the developers array acording to (style) attribute
          return this.developers.filter( (dev)=> dev.style);
      }
  },
  //We have to register the props that are passed from the parent component
  props: ['header',
          'text',
          'bindedProps']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .change{
        width:160px;
        height:60px;
        background-color:red;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        margin:20px auto;
        cursor: pointer;
    }
    .box{
        width:400px;
        padding:100px 0px;
        background-color:#eee;
        margin:10px;
    }
    .box-wrap{
        display: flex;
        flex-wrap: wrap;
    }
    .myClass{
        font-weight: bold;
        color:lightblue;
        font-size: 30px;
    }
    input{
        width:100%;
        border-radius:30px;
        height:60px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .active{
        border:1px solid #eee;
        background-color:pink;
       
    }
</style>
<!-- first challenge -->
<!--
toggle the class when an item is clicked:
   1- Attach a click event to the item.
   2- When the user clicks the item we have to toggle the boolean property attached to the class.
-->

<!-- Naming Convention
     Try to make the name of the component start with a capital letter.
     If it doesnt start with a capital letter, try not to name it as html tags' names because it will
     cause conflict
     -->
<!-- Style methods 
     To make style apply only on the component we have two ways:
        1. scoped.
        2. give the root of that component a class and then use the class of the root in the selectors.
     If we want the style to apply all over the webpage we have to us (global.css) file we 
        1. add it in the (assets folder).
        2. import it in the (main.js folder)  -- import './assets/global.css'

    -->

<!-- Probs
     We can pass data from the parent component to the child component using (probs).
     This makes :
       1. Components more reusable.
       2. Single source of (truth) data.
     -->