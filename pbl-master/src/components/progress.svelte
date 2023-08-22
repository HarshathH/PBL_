<script>
  import Pie from "./pie.svelte";
  // Picture imports
  import CheckImg from "../assets/check.png";
  import Progress from "../assets/Progress.svg";
  import Download from "../assets/Download.svg"
  import { router } from "tinro";

  // @ts-ignore
</script>

<nav>
  <div class="title" />
  <div class="title-content">
    <div class="title-left">
      <h2>Team Name</h2>
    </div>
    <div class="title-right">
      <h4 on:click={(_) => router.goto("/")}>Home</h4>
      <h4 on:click={(_) => router.goto("/profile")}>Profile</h4>

      <h4 on:click={(_) => router.goto("/posts")}>Posts</h4>
    </div>
  </div>
</nav>

<body>
  <div class="b1">
    <div class="b1l">
      <p style="font-size:2.5vw;text-align:center;">
        A LITTLE PROGRESS<br />EACH DAY SUMS UP TO<br />GREAT SUCCESS.
      </p>
      <p style="font-size:1.5vw;text-align:center;">
        A single place to manage and keep track<br />of all your projects
      </p>
      <img src={Progress} alt="pro" style="height:50%;width:80%;" />
    </div>
    <div class="b1r">
      <div class="b1rcon">
        <div class="con1">
          <img src={CheckImg} alt="pro" style="height:40%;width:10%;" />
          <p>See your overall progress</p>
        </div>
        <div class="con1">
          <img src={CheckImg} alt="pro" style="height:40%;width:10%;" />
          <p>Get your personalized report</p>
        </div>
        <div class="con1">
          <img src={CheckImg} alt="pro" style="height:40%;width:10%;" />
          <p>Get your personalized report</p>
        </div>
        <div class="con1">
          <img src={CheckImg} alt="pro" style="height:40%;width:10%;" />
          <p>Get your personalized report</p>
        </div>
      </div>
    </div>
  </div>
  <div class="b2">
    <div class="report" />
    <h4>Report</h4>
    <img src={Download} alt="fiygbfijyfguy" />
  </div>
  <div class="b3">
    <div class="b3l">
      <div class="b3l1">
        <div class="tm">
          <p style="color:white;font-size:2vw;">Team Member</p>
        </div>
        <div class="mem">
          <p style="font-size:1.5vw;">Member1</p>
        </div>
        <div class="mem">
          <p style="font-size:1.5vw;">Member2</p>
        </div>
        <div class="mem">
          <p style="font-size:1.5vw;">Member3</p>
        </div>
        <div class="memlast">
          <p style="font-size:1.5vw;">Member3</p>
        </div>
      </div>
    </div>
    <div class="b3r">
      <div class="b3r1">
        <div class="con3">
          <div class="con311">
            <p style="color:white;font-size:1.5vw;">
              <b>Problem<br />Statement</b>
            </p>
          </div>
          <div class="con321">
            <p style="font-size:1.5vw;"><b>The Problem Statement</b></p>
          </div>
        </div>
        <div class="con3">
          <div class="con312">
            <p style="color:white;font-size:1.5vw;"><b>Solution</b></p>
          </div>
          <div class="con322">
            <p style="font-size:1.5vw;"><b>The Solution</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="progress">
    <div class="p1">
      <div class="pcon">
        <div class="phead">Completed</div>
        <div class="pbody"><b>20</b></div>
      </div>
      <div class="pcon">
        <div class="phead">On progress</div>
        <div class="pbody"><b>10</b></div>
      </div>
      <div class="pcon">
        <div class="phead">Overdue</div>
        <div class="pbody"><b>2</b></div>
      </div>
    </div>
    <div class="p2">
      <div class="pie">
        <div style="height:80%;width:80%;">
          <Pie />
        </div>
      </div>
    </div>
  </div>
  <div class="last">
    <div class="lasthead" />
    <div class="lastcon" />
  </div>
</body>

<style>
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
  nav h4 {
    cursor: pointer;
  }
  .title-content {
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
  .title-right {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-weight: 700;
    font-size: 2vh;
    width: 40vw;
  }
  .title-left {
    font-weight: 700;
    font-size: 2.2vh;
    width: 40vw;
  }
  body {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 3vw;
  }
  .b1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 60vh;
    margin: auto;
  }
  .b1l {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 100%;
  }
  .b1r {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    margin: auto;
  }
  .b1rcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    background-color: #e9ecfd;
    border-radius: 1.5vw;
    padding: auto;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
  }
  .con1 {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3vw;
    height: 100%;
  }
  .b2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 60vh;
    margin: auto;
    margin-top: 2vw;
  }
  h4:not(nav h4) {
    font-family: "Lato", sans-serif;
    display: flex;
    font-size: calc(0.75em + 0.5vmin);
    background-color: #6273cb;
    width: 8vw;
    height: 6vh;
    margin: 0;
    align-items: center;
    justify-content: left;
    padding-left: 0.6vw;
    z-index: 3;
  }
  .report {
    background-color: #e1ff27;
    width: 10vw;
    height: 6vh;
    margin: 0;
    position: absolute;
  }
  .b3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 60vh;
    margin: auto;
  }
  .b3l1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    background-color: #e9ecfd;
    border-radius: 1.5vw;
    padding: auto;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
  }
  .tm {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #6273cb;
    padding: auto;
    border-radius: 1.5vw 1.5vw 0 0;
  }
  .mem {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: auto;
    border-bottom: 1px solid;
  }
  .memlast {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: auto;
  }
  .b3l {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
  }
  .b3r {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: auto;
  }
  .b3r1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    border-radius: 5vw;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
  }
  .con3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .con311 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 20vh;
    background-color: #6273cb;
    border-bottom: 1px solid;
    border-radius: 1.5vw 0 0 0;
  }
  .con312 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 20vh;
    background-color: #6273cb;
    border-bottom: 1px solid;
    border-radius: 0 0 0 1.5vw;
  }
  .con321 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 20vh;
    background-color: #e9ecfd;
    border-bottom: 1px solid;
    border-radius: 0 1.5vw 0 0;
  }
  .con322 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 20vh;
    background-color: #e9ecfd;
    border-bottom: 1px solid;
    border-radius: 0 0 1.5vw 0;
  }
  .progress {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3vw;
    width: 80vw;
    height: 100vh;
    background: #ffffff;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
    padding: auto;
  }
  .p1 {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 50%;
    height: 100%;
  }
  .p2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
  }
  .pcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 25%;
    background-color: #ffffff;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
    border-radius: 1.5vw;
    font-size: 1.5vw;
  }
  .phead {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45%;
    width: 100%;
    border-radius: 1.5vw 1.5vw 0 0;
    background-color: #6273cb;
    color: #ffffff;
    font-size: 1.5vw;
  }
  .pbody {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55%;
    background-color: #ffffff;
    border-radius: 0 0 1.5vw 1.5vw;
  }
  .pie {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 80%;
    background-color: #ffffff;
    border-radius: 1.5vw;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
  }
  .last {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e9ecfd;
    height: 80vh;
    width: 80vw;
    margin-top: 2vw;
  }
  .lasthead {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6273cb;
    width: 100%;
    height: 15%;
  }
  .lastcon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85%;
  }
</style>
