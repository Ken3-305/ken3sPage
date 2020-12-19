<template lang="html">
   <div class="descriptionBox">
     <div class="column">
       <img
         class="image"
         src="http://naoto.nkmr.io/images/matsuken.JPG"
       >
     </div>
   </div>
 </template>

 <script>
 export default {
 }
 </script>

 <style lang="css" scoped>
   .descriptionBox{
     /* width: 60vw; */
     position: relative;
     display: flex;
     align-items: center;
     margin: auto;
     margin-top: 30px;
   }
   .image {
     width: 45vw;
     height: 50vh;
     object-fit: cover;

     margin: auto;
     /* overflow: hidden; */
   }

   @media(max-width: 670px){
      .image {
        width: 100vw;
        height: 50vh;
        object-fit: cover;

        margin: auto;
        /* overflow: hidden; */
      }
   }

   .message {
     width: 40vw;
   }
 </style>
