<script>
  import { router } from "tinro";
  import Work from "../assets/Work.svg"
  import Rocket from "../assets/Rocket.svg"
  import Plus from  "../assets/Plus.svg"
</script>

<div class="body1">
  <nav>
    <div class="title" />
    <div class="content">
      <div class="left">
        <h2>Team Name</h2>
      </div>
      <div class="right">
        <h4 on:click={(_) => router.goto("/")}>Home</h4>
        <h4 on:click={(_) => router.goto("/user/student/progress")}>
          Progress
        </h4>

        <h4 on:click={(_) => router.goto("/posts")}>Posts</h4>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="left1">
      <h2 id="quote">PASSION.</h2>
      <h2 id="quote">PURPOSE.</h2>
      <h2 id="quote">PROGRESS.</h2>
      <h4 id="lines1">A single place to manage and keep track</h4>
      <h4 id="lines2">of all your projects</h4>
      <img src={Work} alt="fiygbfijyfguy" id="work"/>
    </div>
    <div class="right1">
      <div class="top">
        <h2>Team Name</h2>
      </div>
      <div class="bottom">
        <div class="one">
          <div class="m1">
            <h2>Members</h2>
          </div>
          <div class="m1">
            <h3>Tejaswini</h3>
            <h3>roll no.21BEC164</h3>
          </div>
          <div class="m1">
            <h3>Gowtham</h3>
            <h3>roll no. 21BCS028</h3>
          </div>
          <div class="m1">
            <h3>Nivashini</h3>
            <h3>roll no. 21BCS088</h3>
          </div>
          <div class="m2">
            <h3>Harshath</h3>
            <h3>roll no. 21BCS040</h3>
          </div>
        </div>
        <div class="two">
          <div class="m1">
            <h2>Faculties</h2>
          </div>
          <div class="m1">
            <h3>Faculty 1</h3>
            <h3>id: 1</h3>
          </div>
          <div class="m1">
            <h3>Faculty 2</h3>
            <h3>id: 2</h3>
          </div>
          <div class="m1">
            <h3>Faculty 3</h3>
            <h3>id: 3</h3>
          </div>
          <div class="m2">
            <h3>Faculty 4</h3>
            <h3>id: 4</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="body2">
  <div class="outer">
    <div class="inne1">
      <div class="inner3">
        <div class="inner4">
          <h3>PROJECTS</h3>
        </div>
      </div>
    </div>
    <div class="inner2">
      <h2 id="quote1">DREAM BIGGER.</h2>
      <h2 id="quote1">DO BIGGER.</h2>
      <h4 id="lines3">A single place to manage and keep track</h4>
      <h4 id="lines4">of all your projects</h4>
    </div>
  </div>
  <div class="container2">
    <div class="left2">
      <div class="box1" on:click={(_) => router.goto("/user/student/todo")}>
        <h3 class="project">PROJECT-NAME</h3>
        <h3>started on:05-06-2021</h3>
      </div>
      <div class="box2">
        <img src={Plus} alt="fiygbfijyfguy" />
      </div>
    </div>
    <div class="right2">
      <img src={Rocket} alt="fiygbfijyfguy" />
    </div>
  </div>
</div>
<div class="ideas">
  <div class="idea">
    <div class="Outer">
      <div class="l">
        <div class="inner3">
          <div class="inner4">
            <h3>PROPOSALS</h3>
          </div>
        </div>
      </div>
      <div class="r">
        <a href="/posts">Go to Posts Page</a>
      </div>
    </div>
    <div class="table">
      <button class="name">
        <div class="proposal">
          <h3>PROPOSAL-1</h3>
        </div>
      </button>
      <div class="post">
        <div class="display">
          <div class="statement">
            <h3>PROBLEM STATEMENT</h3>
          </div>
          <div class="space" />
        </div>
        <div class="display">
          <div class="solution">
            <h3>PROPOSED SOLUTION</h3>
          </div>
          <div class="space" />
        </div>
        <div class="display">
          <div class="queries">
            <h3>QUERIES</h3>
          </div>
          <div class="space" />
        </div>
      </div>
      <div class="comment">
        <div class="head">
          <h3>Comments</h3>
        </div>
        <div class="suggestions">
          <div class="nice">
            <h4>Nice one</h4>
            <h4>HOD</h4>
          </div>
          <hr />
          <div class="good">
            <h4>Good</h4>
            <h4>Mentor</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .body1 {
    height: 110vh;
    overflow: hidden;
  }
  .box1:hover {
    cursor: pointer;
    padding: 1.25em;
  }

  .title {
    width: 100vw;
    background-color: #e1ff27;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    height: 20vh;
    top: -3vh;
    position: absolute;
    clip-path: polygon(0 1%, 100% 0, 100% 100%, 0 75%);
    z-index: -2;
    /*border-radius: 0 0 60px 60px;*/
  }

  .content{
   display: flex;
   flex-direction:row;
   justify-content: space-around;
   align-items: center;
   width:100vw;
   height: 13vh; 
   font-size: clamp(1em 2em 3em);
   font-weight:700;
   overflow:hidden;
  } 
  .right{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    font-weight:700;
    font-size:2vh;
    width:40vw;
  }
  .left{
    font-weight:700;
    font-size:2.2vh;
    width:40vw;
  }
  .container{
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    height:100vh;
  }
  .left1{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:40vw;
    font-size: 3vh;
    font-family:sans-serif ;
  }
  .right2{
    margin-left:8em;
  }
h2{
  margin-block-start:0.1em;
  margin-block-end:0.1em;
  font-size:2em;
}
#lines1{
  margin-block-start:0.3em;
  margin-block-end:0.1em;
  font-size: clamp(1em 2em 3em); 
}
#lines2{
  margin-block-start:0.1em;
  margin-block-end:0.1em;
  font-size: clamp(1em 2em 3em);
}
#quote{
  font-size: clamp(1em 2em 3em);
}
.bottom{
  display:grid;
  grid-template-columns:1fr 1fr;
  font-size: clamp(1em 2em 3em);
  place-items:center;
  border-radius:0 0 1em 1em;
}
.top{
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#6273CB;
  font-size: clamp(1em 2em 3em);
  width:40vw;
  height:10vh;
  border-radius:1em 1em 0 0;
}
.right1{
  display:flex;
  flex-direction :column;
  justify-content:center;
  align-items:center;
  width:40vw;
  border-radius:1em;
  box-shadow:0 0 1.5em 0 #a8a9a8;
}
.one{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:20vw;
  border-right:solid #9d9e9d 0.1em;
}
.two{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:20vw;
}
.m1{
  border-bottom:solid #9d9e9d 0.1em;
  font-size: clamp(1em 2em 3em);
  width:20vw;
  height:12vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#E9ECFD;
}
.m2{
  width:20vw;
  height:12vh;
  font-size: clamp(1em 2em 3em);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#E9ECFD;
}
h3{
  margin-block-start:0.2em;
  margin-block-end:0.2em;
}

.body2{
  height:100vh;
  overflow: hidden;
}
.outer{
  display:flex;
  padding:5em;
  width:100vw;
  height:20vh;
  justify-content:space-between;
  align-items:center;
  background-color:#E9ECFD;
}
.container2{
  height:100vh;
  background-color:#E9ECFD;
}
.inner3{
  clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
  background-color: #E1FF27;
  width:34vh;
  margin:10px;
}
.inner4{
  clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
  background-color: #6273CB;
  width:24vh;
  padding:20px;
  
}
.inner2{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-weight:700;
  font-size: 3vh;
  font-family:sans-serif ;
  width:50vw;
  margin-top:220px;
}
.left2{
  display:flex;
  justify-content:space-evenly;
  align-items:center;    
  flex-direction:row;
  font-size: clamp(1em 2em 3em);
  width:50vw;
}
.container2{
  display:grid;
  place-items:center;
  grid-template-columns:1fr 1fr;
  overflow:hidden;
  height:70vh;
}
.box1{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:25vh;
  height:25vh;
  background-color:#fff;
  padding:1em;
  border-radius:1em;
  box-shadow:0 0 1.5em 0 #a8a9a8;
}
.box2{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:25vh;
  height:25vh;
  background-color:#fff;
  padding:1em;
  border-radius:1em;
  box-shadow:0 0 1.5em 0 #a8a9a8;
}
#lines3{
  margin-block-start:2em;
  margin-block-end:0.1em;
  width:auto;
  font-size: clamp(1em 2em 3em); 
}
#lines4{
  margin-block-start:0.1em;
  margin-block-end:0.1em;
  font-size: clamp(1em 2em 3em);
}
#quote1{
  font-size: clamp(1em 2em 3em);
}
.Outer{
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:2em 8em 0 8em;
}
.table{
    display:flex;
    flex-direction: column;
    align-items: center;
   }
   
  .content {

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 13vh;
    font-size: clamp(1em 2em 3em);
    font-weight: 700;
    overflow: hidden;
  }
  .right {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-weight: 700;
    font-size: 2vh;
    width: 40vw;
  }
  .left {
    font-weight: 700;
    font-size: 2.2vh;
    width: 40vw;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;
  }
  .left1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    font-size: 3vh;
    font-family: sans-serif;
  }
  h2 {
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
    font-size: 2em;
  }
  #lines1 {
    margin-block-start: 0.3em;
    margin-block-end: 0.1em;
    font-size: clamp(1em 2em 3em);
  }
  #lines2 {
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
    font-size: clamp(1em 2em 3em);
  }
  #quote {
    font-size: clamp(1em 2em 3em);
  }
  .bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: clamp(1em 2em 3em);
    place-items: center;
    border-radius: 0 0 1em 1em;
  }
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6273cb;
    font-size: clamp(1em 2em 3em);
    width: 40vw;
    height: 10vh;
    border-radius: 1em 1em 0 0;
  }
  .right1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    border-radius: 1em;
    box-shadow: 0 0 1.5em 0 #a8a9a8;
  }
  .one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
    border-right: solid #9d9e9d 0.1em;
  }
  .two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
  }
  .m1 {
    border-bottom: solid #9d9e9d 0.1em;
    font-size: clamp(1em 2em 3em);
    width: 20vw;
    height: 12vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e9ecfd;
  }
  .m2 {
    width: 20vw;
    height: 12vh;
    font-size: clamp(1em 2em 3em);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e9ecfd;
  }
  h3 {
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
  }

  .body2 {
    height: 100vh;
    overflow: hidden;
  }
  .outer {
    display: flex;
    padding: 5em;
    width: 100vw;
    height: 20vh;
    justify-content: space-between;
    align-items: center;
    background-color: #e9ecfd;
  }
  .container2 {
    height: 100vh;
    background-color: #e9ecfd;
  }
  .inner3 {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #e1ff27;
    width: 34vh;
    margin: 10px;
  }
  .inner4 {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #6273cb;
    width: 24vh;
    padding: 20px;
  }
  .inner2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 3vh;
    font-family: sans-serif;
    width: 50vw;
    margin-top: 220px;
  }
  .left2 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    font-size: clamp(1em 2em 3em);
    width: 50vw;
  }
  .container2 {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    height: 70vh;
  }
  .box1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 25vh;
    height: 25vh;
    background-color: #fff;
    padding: 1em;
    border-radius: 1em;
    box-shadow: 0 0 1.5em 0 #a8a9a8;
  }
  .right h4 {
    cursor: pointer;
  }
  .box2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 25vh;
    height: 25vh;
    background-color: #fff;
    padding: 1em;
    border-radius: 1em;
    box-shadow: 0 0 1.5em 0 #a8a9a8;
  }
  #lines3 {
    margin-block-start: 2em;
    margin-block-end: 0.1em;
    font-size: clamp(1em 2em 3em);
  }
  #lines4 {
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
    font-size: clamp(1em 2em 3em);
  }
  #quote1 {
    font-size: clamp(1em 2em 3em);
  }
  .Outer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 8em 0 8em;
  }
  .table {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .name {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin-top: 2em;
    border: 0;
    width: 80vw;
    height: 12vh;
    box-shadow: 0 0 2em 0 #4f4f4f;
    border-radius: 1em;
  }
  .proposal {
    background-color: #e9ecfd;
    width: 80vw;
    height: 12vh;
    border-radius: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .post {
    background-color: #e1ff27;
    width: 80vw;
    display: flex;
    flex-direction: column;
  }
  .display {
    display: flex;
    flex-direction: row;
    width: 70vw;
    align-items: center;
    margin: 0.5em 2em 0 2em;
  }
  .statement,
  .solution,
  .queries {
    background-color: #6273cb;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1em 0 0 1em;
    width: 15vw;
    height: 14vh;
    margin: 2em 0 2em 2em;
    padding: 0.5em;
  }
  .statement,
  .solution,
  .queries h3 {
    color: white;
  }
  .space {
    background-color: white;
    border-radius: 0 0.5em 0.5em 0;
    width: 55vw;
    height: 14vh;
    margin: 2em 0 2em 0;
    padding: 0.5em;
  }
  /* h3{
    font-size: calc(0.75em+1vmin);
   } */
  .comment {
    background-color: #6273cb;
    display: flex;
    flex-direction: column;
    width: 80vw;
  }
  .nice,
  .good {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .head {
    margin: 1em 1em 0 3em;
  }
  .suggestions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  hr {
    border: 1.5px solid black;
    width: 80%;
  }
  a {
    text-decoration: none;
    color: black;
  }

  @media only screen and (max-width: 960px) {
    .body1 {
      height: 120vh;
    }
    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-top: 50px;
    }
    .top {
      width: 45vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bottom {
      width: 45vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .m1,
    .m2 {
      width: 22.5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vh;
    }
    .right1 {
      width: 45vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    .left1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2vh;
      width: 100vw;
      font-family: sans-serif;
    }
    #work{
      width:0;
      height:0;
    }
    .one {
      width: 22.5vh;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: solid #9d9e9d 0.1vh;
    }
    .two {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 22.5vh;
    }
    .inner3 {
      width: 30vh;
    }
    .inner4 {
      width: 20vh;
      padding: 15px;
    }
    .title {
      height: 16vh;
    }
    .content {
      height: 10vh;
    }

    .body2 {
      height: 120vh;
    }
    .outer {
      display: flex;
      flex-direction: column;
      padding: 0;
      padding-top: 4em;
      height: 40vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
      background-color: #e9ecfd;
    }
    .inner2 {
      display: flex;
      flex-direction: column;
      font-weight: 700;
      font-size: 1em;
      font-family: sans-serif;
      width: 100vw;
      margin-top: 20px;
    }
    .left2 {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      font-size: clamp(1em 2em 3em);
      width: 100vw;
      height: 70vh;
    }
    .Outer {
      padding: 2em 2em 0 1em;
      justify-content: space-evenly;
    }
    .statement,
    .solution,
    .queries {
      flex-direction: column;
      border-radius: 1em;
      width: 55vw;
      height: 10vh;
      margin: 0;
    }
    .display {
      flex-direction: column;
      margin: 1em 2em 0 2em;
    }
    .space {
      border-radius: 1em;
      margin: 1em 0 1em 0;
      height: 10vh;
    }
  }
  @media only screen and (max-width: 550px) {
    .body1 {
      height: 120vh;
    }
    .body2 {
      height: 120vh;
    }
    .title {
      height: 12vh;
    }
    .content {
      height: 8vh;
    }
    .right {
      font-size: 3vw;
    }
    .left {
      font-size: 2.2vw;
    }
    .top {
      width: 40vh;
    }
    .bottom {
      width: 40vh;
    }
    .m1,
    .m2 {
      width: 20vh;
      font-size: 2vh;
    }
    .right1 {
      width: 40vh;
      margin-top: 20px;
    }
    .one {
      width: 20vh;
    }
    .two {
      width: 20vh;
    }
    .outer {
      padding-top: 0;
    }
    .inner2 {
      font-weight: 700;
      font-size: 0.8em;
      font-family: sans-serif;
    }
    .inner3 {
      width: 20vh;
      margin: 0;
    }
    .inner4 {
      width: 16vh;
      padding: 5px;
      margin: 0;
      font-size: 2vh;
    }
    .Outer {
      padding: 0 0 0 1em;
      justify-content: space-evenly;
    }
    .statement,
    .solution,
    .queries {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 1em;
      width: 25vh;
      height: 10vh;
      margin: 0;
      font-size: 1.8vh;
    }
    .display {
      flex-direction: column;
      margin: 1em;
    }
    .space {
      border-radius: 1em;
      margin: 1em 0 0 0;
      height: 10vh;
    }
  }
</style>
