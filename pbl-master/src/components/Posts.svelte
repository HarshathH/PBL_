<script lang="ts">
  let title = "POSTS";
  import NavBar from "./NavBar.svelte";
  import PBL from "../assets/PBL.svg";
  import deleteIcon from "../assets/Delete.svg";
  import { fade } from "svelte/transition";
  import { router } from "tinro";
  import Icon from "./icon.svelte";
  export let proposals;

  let promise = [];

  async function setProposals() {
    promise = await proposals;
    console.log(promise);
  }

  setProposals();

  let formVisible = false;
  function input() {
    formVisible = true;
  }
  function revert() {
    formVisible = false;
  }

  const newProposal = {
    title: "",
    description: "",
    queries: "",
    teamId: JSON.parse(localStorage.getItem("team"))?.no,
  };

  function proposeNew() {
    console.log(newProposal, "proposed");
    formVisible = false;
  }

  const teamId = JSON.parse(localStorage.getItem("team"))?.no;
</script>

<div id="outer">
  {#if formVisible}
    <div id="input-div-wrapper" transition:fade>
      <!-- <form id="input-div" on:submit|preventDefault={proposeNew}>
        <input
          type="text"
          placeholder="problem"
          bind:value={newProposal.title}
          required
        />
        <input
          type="text"
          placeholder="solution"
          bind:value={newProposal.description}
          required
        />
        <input
          type="text"
          placeholder="queries"
          bind:value={newProposal.queries}
          required
        />
        <button type="submit">Submit</button>
        <button on:click={revert}>Close</button>
      </form> -->
      <form
        id="input-div"
        method="post"
        action="http://localhost:3000/api/proposals"
      >
        <input type="text" placeholder="problem" name="title" required />
        <input type="text" placeholder="solution" name="description" required />
        <input type="text" placeholder="queries" name="queries" required />
        <input type="text" name="teamId" value={teamId} readonly hidden />
        <div class="input-buttons">
          <button type="submit">Submit</button>
          <button on:click={revert}>Close</button>
        </div>
      </form>
    </div>
  {/if}
  <div class="home">
    <nav class="navbar">
      <div class="title">
        <div class="title-content">
          <div class="title-left">
            <h2>Team Name</h2>
          </div>
          <div class="title-right">
            <h4 on:click={() => router.goto("/")}>Home</h4>
            <h4 on:click={() => router.goto("/profile")}>Profile</h4>

            <h4 on:click={() => router.goto("/posts")}>Posts</h4>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="inner">
        <div class="lime-background">
          <div class="info-card">
            <p class="heading">PLACE TO PROPOSE YOUR IDEAS AND GET UPVOTES</p>
            <p class="description">
              Submit your ideas and get better ideas and approvals from
              officials
            </p>
          </div>
        </div>
      </div>
      <div class="illustration">
        <img src={PBL} alt="PBL management" />
      </div>
    </div>
  </div>
  <div class="ideas">
    <div class="idea">
      <h2>PROPOSED IDEAS</h2>
      <div class="icon" on:click={input}>
        <Icon icon="add" />
      </div>
      <div class="table">
        {#if !!promise}
          {#each promise as post, index}
            <div class="name">
              <div class="number">
                <h3>Team - {post.teamId}</h3>
              </div>
              <div class="proposal">
                <h3>{post.title}</h3>
              </div>
              <img
                src={deleteIcon}
                alt="delete icon"
                style="width:2em;"
                on:click={async () => {
                  await fetch(`/api/proposals/${index}`, {
                    method: "DELETE",
                  });
                  location.reload();
                }}
                class="delete"
              />
            </div>
            <div class="post">
              <div class="display">
                <div class="statement">
                  <h3>PROBLEM STATEMENT</h3>
                </div>
                <div class="space">
                  {post.description}
                </div>
              </div>
              <div class="display">
                <div class="solution">
                  <h3>PROPOSED SOLUTION</h3>
                </div>
                <div class="space">
                  {post.description}
                </div>
              </div>
              <div class="display">
                <div class="queries">
                  <h3>QUERIES</h3>
                </div>
                <div class="space">
                  {post.queries}
                </div>
              </div>
            </div>
            <div class="comment">
              <div class="head">
                <h3>Comments</h3>
              </div>

              <div class="suggestions">
                {#if !!post.comments}
                  {#each post.comments as comments}
                    <div class="nice">
                      <h3>{comments.comment}</h3>
                      <h4>{comments.by}</h4>
                    </div>
                    <hr />
                  {/each}
                {/if}
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .title {
    width: 100vw;
    background-color: #e1ff27;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    top: -3vh;
    clip-path: polygon(0 1%, 100% 0, 100% 100%, 0 75%);
    z-index: -2;
    margin-bottom: 10vh;
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

  #outer {
    position: relative;
  }
  #input-div-wrapper {
    min-width: 100%;
    min-height: 100%;
    display: grid;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1em);

    z-index: 10;
    place-content: center;
    position: fixed;
    overflow: hidden;
  }

  .input-buttons {
    display: flex;
    gap: 2em;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-radius: 1em;
    align-items: center;
  }

  form input {
    padding: 0.5em 1em;
    border-radius: 0.5em;
    outline: 0;
    border: 0;
    opacity: 0.75;
  }

  form button {
    border: 0;
    outline: 0;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    background-color: rgba(0, 0, 0, 0.25);
    color: white;
  }

  #input-div {
    opacity: 1;
    padding: 2em;
    z-index: 11;
    background: rgba(0, 0, 0, 0.5);
  }
  .info-card {
    background: #6273cb;
    height: 30vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5em;
    transform: skew(-14deg);
    border-radius: 1em;
    box-shadow: 0 0 10px 0 black;
  }
  .illustration {
    min-width: 30vw;
  }
  .lime-background {
    display: grid;
    place-content: center;
    width: 30vw;
    height: 45vh;
    border-radius: 1em;
    background: #e1ff27;
  }
  .inner {
    display: flex;
    align-items: center;
  }
  .container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  .home {
    position: relative;
    background: #e9ecfd;
  }
  .heading,
  .description {
    transform: skew(14deg);
    font-size: 70%;
    color: white;
    font-family: sans-serif;
  }
  .heading {
    font-weight: 700;
    font-size: medium;
  }
  .table {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 20vh;
  }
  .name {
    display: flex;
    flex-direction: row;
    z-index: 1;
    width: 80vw;
    height: 12vh;
    margin: 2em 2em 0 2em;
    box-shadow: 0 0 10px 0 black;
    border-radius: 0.5em 0.5em 0 0;
  }

  .number {
    background-color: #6273cb;
    width: 12vw;
    text-align: center;
  }
  .proposal {
    background-color: #e9ecfd;
    width: 66vw;
    text-align: center;
  }
  /* .icon {
    background-color: #e9ecfd;
    width: 12vw;
  } */
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
    border-radius: 0.5em 0 0 0.5em;
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
    margin-left: 1em;
  }
  hr {
    border: 1.5px solid black;
    width: 80%;
  }
</style>
