<template>
   <div class="menuBox">
     <Slide
       class="slideMenu"
       width="200"
     >
       <router-link to="/" tag="li">
         Top
       </router-link>
       <router-link to="/about" tag="li">
         About
       </router-link>
     </Slide>
   </div>
 </template>

 <script>
 import { Slide } from 'vue-burger-menu'

 export default {
   components: {
     Slide
   }
 }
 </script>

 <style>
   .menuBox {
     position: fixed;
     left: -17px;
     top: 40px;
     z-index: 100;
   }
   .bm-burger-button {
     top: 0;
   }
   .bm-item-list {
     position: relative;
     width: 100%;
     color: #b8b7ad;
     left: -17px;
     margin-top: 20px;
     font-size: 20px;
     cursor: pointer;
   }
   .bm-item-list > *:hover {
     background-color: #c67b66;
   }
 </style>
