<script>
  import { router } from "tinro";
  import Delete from "../assets/Delete.svg";
  import Edit from "../assets/Edit.svg";
  import Task from "../assets/Task.svg";
  import Plus from "../assets/Plus.svg";
</script>

<body>
  <nav>
    <div class="title" />
    <div class="title-content">
      <div class="title-left">
        <h2>Team Name</h2>
      </div>
      <div class="title-right">
        <h4 on:click={(_) => router.goto("/")}>Home</h4>
        <h4 on:click={(_) => router.goto("/user/student/progress")}>
          Progress
        </h4>

        <h4 on:click={(_) => router.goto("/posts")}>Posts</h4>
        <h4 on:click={(_) => router.goto("/profile")}>Profile</h4>
      </div>
    </div>
  </nav>
  <div class="bodytodo">
    <div class="work">
      <p style="font-size:1.5rem;"><b>WORKSPACE</b></p>
      <img src={Plus} alt="fiygbfijyfguy" id="plus"/>    
    </div>
    <div class="content">
      <div class="c1">
        <div class="todo">
          <div class="head">
            <p><b>TASK TO DO</b></p>
          </div>
          <div class="inner">
            <div class="up">
              <div class="left">
                <div class="left1">
                  <p style="font-size:1.5rem;"><b>Completing the UI</b></p>
                </div>
                <div class="left2">
                  <div class="left21">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">
                      Assigned Date
                    </p>
                    <p><b>12-06-2022</b></p>
                  </div>
                  <div class="left22">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">
                      Due Date
                    </p>
                    <p><b>12-07-2022</b></p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="right1">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assigner</p>
                  <p style="font-size:1.2rem;"><b>MENTOR</b></p>
                </div>
                <div class="right2">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assignee</p>
                  <p style="font-size:1.2rem;"><b>MEMBER-1</b></p>
                </div>
              </div>
            </div>
            <div class="bottom" >
              <img src={Delete} alt="fiygbfijyfguy" id="one" />
              <img src={Edit} alt="fiygbfijyfguy" id="one"/>
              <img src={Task} alt="fiygbfijyfguy" id="one"/>
            </div>

          </div>
        </div>
      </div>
      <div class="c2">
        <div class="todo">
          <div class="head">
            <p><b>OVER-DUE</b></p>
          </div>
          <div class="inner">
            <div class="up">
              <div class="left">
                <div class="left1">
                  <p style="font-size:1.5rem;"><b>Completing the UI</b></p>
                </div>
                <div class="left2">
                  <div class="left21">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">
                      Assigned Date
                    </p>
                    <p><b>12-06-2022</b></p>
                  </div>
                  <div class="left22">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">
                      Due Date
                    </p>
                    <p><b>12-07-2022</b></p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="right1">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assigner</p>
                  <p style="font-size:1.2rem;"><b>MENTOR</b></p>
                </div>
                <div class="right2">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assignee</p>
                  <p style="font-size:1.2rem;"><b>MEMBER-1</b></p>
                </div>
              </div>
            </div>
            <div class="bottom">
              <img src={Delete} alt="fiygbfijyfguy" id="one"/>
              <img src={Edit} alt="fiygbfijyfguy" id="one"/>
              <img src={Task} alt="fiygbfijyfguy" id="one"/>
            </div>
          </div>
        </div>
      </div>
      <div class="c3">
        <div class="todo">
          <div class="head">
            <p><b>COMPLETED</b></p>
          </div>
          <div class="innercom">
            <div class="up">
              <div class="left">
                <div class="left1">
                  <p style="font-size:1.5rem;"><b>Completing the UI</b></p>
                </div>
                <div class="left2">
                  <div class="left21">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">
                      Assigned Date
                    </p>
                    <p><b>12-06-2022</b></p>
                  </div>
                  <div class="left22">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">
                      Due Date
                    </p>
                    <p><b>12-07-2022</b></p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="right1">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assigner</p>
                  <p style="font-size:1.2rem;"><b>MENTOR</b></p>
                </div>
                <div class="right2">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assignee</p>
                  <p style="font-size:1.2rem;"><b>MEMBER-1</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  .bodytodo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 96rem;
    height: 32rem;
  }
  .work {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90rem;
  }
  .content {
    display: flex;
    width: 90rem;
  }
  .c1 {
    display: flex;
    align-items: center;
    width: 30rem;
    padding: auto;
  }
  .c2 {
    display: flex;
    align-items: center;
    width: 30rem;
  }
  .c3 {
    display: flex;
    align-items: center;
    width: 30rem;
  }
  .todo {
    display: flex;
    flex-direction: column;
    width: 28rem;
    height: 26.5rem;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
  }
  .head {
    display: flex;
    height: 3rem;
    background-color: #6273cb;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .inner {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 70%;
    background-color: #e1ff27;
    margin-left: 1.3rem;
    margin-top: 1.5rem;
    border-radius: 2rem;
  }
  .up {
    display: flex;
    height: 80%;
    background-color: #e9ecfd;
    border-radius: 2rem;
  }
  .left {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    border-right: 1px solid;
  }
  .left1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
  }
  .left2 {
    display: flex;
    width: 100%;
    height: 60%;
  }
  .left21 {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .left22 {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
  }
  .right1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
  }
  .right2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
  }
  .bottom {
    display: flex;
    justify-content: right;
    align-items: center;
    background-color: #e1ff27;
    height: 20%;
    border-radius: 0 0 2rem 2rem;
  }
  .innercom {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 70%;
    margin-left: 1.3rem;
    margin-top: 1.5rem;
    border-radius: 2rem;
  }
  #one{
    width:5vh;
  }
  #plus{
    margin-right:35em;
  }
  @media only screen and (max-width: 1000px) {
    .content {
      display: flex;
      flex-direction: column;
      height: 40rem;
      width: 100%;
      position: relative;
      margin-left: 3.5rem;
    }
  }
</style>
