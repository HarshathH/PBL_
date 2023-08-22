<script>
  import Icon from "./icon.svelte";
  import NavBar from "./NavBar.svelte";
  import Plus from "../assets/Plus.svg";
  const user = JSON.parse(localStorage.getItem("user"));
</script>
<div class="container">
   <div class="head">
    <!-- <h1>{user.name}</h1> -->
    <div class="title">
       <h2>PROFILE</h2>
    </div>
    <div class="link">
      <h3><a href="/steps">Home</a></h3>
      <h3><a href="/contact">Post</a></h3>
    </div>
  </div>
  <div class="box">
   <div class="box1">
    <div class="box2">
      <h4>PBL TEAMS</h4>
    </div>
   </div>
   <div class="plus">
      <img src={Plus} alt="fiygbfijyfguy" id="plus"/>
    </div>
</div>
<div class="total">
  <div class="profile">
    <div class="teams">
    </div>
    <div class="name">
     <div class="name1" >
      <h3>NAME:</h3>
     </div>
     <div class="name2">
      <h4>Mentor1</h4>
     </div>
    </div>
    <div class="email">
      <div class="email1">
        <h3>EMAIL:</h3>
      </div>
      <div class="email2">
        <h4>mentor@gmail.com</h4>
      </div>
    </div>
    <div class="phone">
      <div class="phone1">
        <h3>MOBILE:</h3>
      </div>
      <div class="phone2">
         <h4>1234567890</h4>
      </div>
    </div>
    <div class="info">
      <div class="info1">
        <h3>INFO:</h3>
      </div>
      <div class="info2">
        <h4>Information</h4>
      </div>
    </div>
    <div class="choice">
      <div class="myteam">
        <h3>MY TEAMS</h3>
      </div>
        <div class="team1">
          <div class="number">
            <h3>TEAM 1</h3>
            </div>
            <div class="links" id="trans">
              <a href="GO TO PROFILE">GO TO PROFILE</a>
            </div>
        </div>
        <div class="team2">
          <div class="number">
            <h3>TEAM 2</h3>
            </div>
            <div class="links" id="trans">
              <a href="GO TO PROFILE">GO TO PROFILE</a>
            </div>
        </div>
        <div class="team3">
          <div class="number">
            <h3>TEAM 3</h3>
            </div>
            <div class="links" id="trans">
              <a href="GO TO PROFILE">GO TO PROFILE</a>
            </div>
        </div>
    </div>
    </div>
  <div class="count">
  <div class="content">
    <div class="id">
        <h3>TEAM 1</h3>
    </div>
    <div class="detail">
      <div class="n1">
        <h4>Number 1</h4>
        <h5>Roll number</h5>
      </div>
      <div class="n2">
        <h4>Number 2</h4>
        <h5>Roll number</h5>
      </div>
      <div class="n3">
        <h4>Number 3</h4>
        <h5>Roll number</h5>
      </div>
      <div class="n4">
        <h4>Number 4</h4>
        <h5>Roll number</h5>
      </div>
    </div>
    <div class="icon">
      <div class="icons">
      <Icon icon="edit"></Icon>
      <Icon icon="delete"></Icon>
      </div>
    </div>
  </div>
  <div class="content">
   <div class="id">
      <h3>TEAM 2</h3>
  </div>
  <div class="detail">
    <div class="n1">
      <h4>Number 1</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n2">
      <h4>Number 2</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n3">
      <h4>Number 3</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n4">
      <h4>Number 4</h4>
      <h5>Roll number</h5>
    </div>
  </div>
  <div class="icon">
    <div class="icons">
    <Icon icon="edit"></Icon>
    <Icon icon="delete"></Icon>
    </div>
  </div>
 </div>
 <div class="content">
   <div class="id">
      <h3>TEAM 3</h3>
  </div>
  <div class="detail">
    <div class="n1">
      <h4>Number 1</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n2">
      <h4>Number 2</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n3">
      <h4>Number 3</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n4">
      <h4>Number 4</h4>
      <h5>Roll number</h5>
    </div>
  </div>
  <div class="icon">
    <div class="icons">
    <Icon icon="edit"></Icon>
    <Icon icon="delete"></Icon>
    </div>
  </div>
  </div>
  <div class="content">
    <div class="id">
       <h3>TEAM 4</h3>
   </div>
   <div class="detail">
     <div class="n1">
       <h4>Number 1</h4>
       <h5>Roll number</h5>
     </div>
     <div class="n2">
       <h4>Number 2</h4>
       <h5>Roll number</h5>
     </div>
     <div class="n3">
       <h4>Number 3</h4>
       <h5>Roll number</h5>
     </div>
     <div class="n4">
       <h4>Number 4</h4>
       <h5>Roll number</h5>
     </div>
   </div>
   <div class="icon">
    <div class="icons">
    <Icon icon="edit"></Icon>
    <Icon icon="delete"></Icon>
    </div>
   </div>
   </div>
   </div>
  </div>
</div>
<style>
  * {
    margin: 0;
  }
  .title{
    color: black;
    padding:1em;
    margin-left:1.5em;
    width:60vw;
  }
  .head{
    width: 100vw;
    background-color:#E1FF27;
    display: flex;
    margin: 0;
    height: 20vh;
    clip-path: polygon(0 2%, 100% 0%, 100% 90%, 0 60%);
    z-index:-1;
  }
  .link h3{
    padding:2em;
  }
  .box{
    margin:2em;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .box1{
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #E1FF27;
    width:28vw;
  }
  .box2{
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #6273CB;
    width:26vw;
  }
  .box2 h4{
    padding:1em;
    color:white;
  }
  .total{
    display:flex;
    flex-direction: row;
  }
  .profile{
    height:84vh;
    width:25vw;
    background-color:#E9ECFD;
    border-radius:1em 1em 0 0;
    flex-direction: column;
    justify-content: space-around;
    margin:0 6em 0 2em;
  }
  .profile h3{
    color:#4f4d4c;
    padding:1em;
    font-size: calc(0.9rem+1vmin);
  }
  .name,.email,.phone{
    background-color: #E9ECFD;
    border-bottom:0.1rem solid #a6a49d;
    height:9vh;
    display:flex;
    flex-direction: row;
    margin:0;
    width:25vw;
    justify-content: space-around;
  }
  .info{
    background-color: #E9ECFD;
    height:9vh;
    display:flex;
    flex-direction: row;
    margin:0;
    width:25vw;
    justify-content: space-around;
  }
  .name1,.email1,.phone1,.info1{
    width:10vw;
  }
  .name2,.email2,.phone2,.info2{
    width:15vw;
    padding:1em 0 0 0;
  }
  h4{
    font-size: calc(0.9rem+1vmin);
  }
  #plus{
    margin-right:5em;
  }
  .link{
    display: flex;
    flex-direction: row;
    margin:1em;
  }
  .teams{
    background-color: #6273CB;
    border-radius: 1em 1em 0 0;
    display:flex;
    align-items: center;
    justify-content: center;
    height:14vh;
  }
  .myteam{
    background-color:#6273CB;
    text-align: center;
    border-bottom:0.1em solid #a6a49d;
  }
  .myteam h3{
    color:white;
  }
  .team1,.team2,.team3{
    border-bottom:0.1em solid #a6a49d;
    text-align: center;
    color:black;
    display:flex;
    flex-direction: row;
    width:25vw;
    background-color: #E9ECFD;
    border-radius:0 0.5em 0.5em 0;
    height:9vh;
  }
  .team1:hover, .team2:hover,.team3:hover{
    width:32vw;
  }
  .number{
    width:25vw;
    height:9vh;
  }
  .links{
    display: none;
    background-color: #E1FF27;
    width:7vw;
    border-radius:0 0.5em 0.5em 0;
    border-left:0.1rem solid #a6a49d;
  }
  .team1:hover .links,.team2:hover .links,.team3:hover .links{
    display: block;
  }
  /* #trans{
    animation-name:transform ;
    animation-duration: 4s;
  }
   @keyframes transform{
       from{display:none;}
       to{display:block;}
    } */
   
  a{
    font-size:0.9rem;
  }
  .count{
    height:90vh;
    width:60vw;
    display: flex;
    flex-direction: column;
  }
  .content{
    background-color:#E9ECFD;
    height:12vh;
    display:flex;
    flex-direction: row;
    width:60vw;
    border-radius: 1em;
    margin-top:1.5rem; 
  }
  .id{
    background-color: #6273CB;
    width:11vw;
    padding:0.5em;
    border-radius: 0.5em 0 0 0.5em;
  }
  .id h3{
    color:black;
  }
  .detail{
    display:flex;
    flex-direction: row;
    width:37vw;
    margin:1em;
  }
  .icon{
    background-color: #E1FF27;
    width:12vw;
    border-radius: 0 0.5em 0.5em 0;
  }
  .n1,.n2,.n3,.n4{
    display: flex;
    flex-direction:column;
    padding:0 1em 1em 1em;
  }
  .icons{
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    padding-top: 1em;
  }
  @media(max-width:1000px){
    .total{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      }
      .profile{
        margin:0 1em 2em 0;
      }
      .profile,.team1,.team2,.team3,.name,.email,.phone,.info{
        width:230px;
      }
      .name1,.email1,.phone1,.info1{
        width:100px;
      }
      .name2,.email2,.phone2,.info2{
        width:135px;
      }
      .number{
        width:230px;
      }
      .links{
        width:87px;
      }
      a{
        font-size:0.7em;
     }
     .link{
      flex-direction: column;
     }
     .link h3{
      padding: 1em;
     }
     .content{
      height:100px;
     }
    }
@media(max-width:950px){
  .detail{
    flex-wrap: wrap;
  }
  .links{
    display:block;
  }
}
@media(max-width:700px){
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:350px;
    width:390px;
  }
  .id{
    width:372px;
    border-radius: 0.5em;
  }
 .icon{
    width:390px;
    border-radius: 0;
  }
}
@media (max-width:560px){
  .content{
    width:300px;
  }
  .icon{
    width:300px;
  }
  .id{
    width:284px;
  }
}
@media (max-width:380px){
   .content{
    margin-left: -2em;
   }
}
</style>
