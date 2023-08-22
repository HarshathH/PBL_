<script>
  // @ts-nocheck

  import Saos from "saos";

  let processes = [
    {
      title: "Is there a Problem?",
      description:
        "The student must form a team of 4 or 5 and identify their problem statement. They must clear about the problem that is being faced and a rough idea on the solution for the problem.",
    },
    {
      title: "Do you need Help?",
      description:
        "The team will be allocated an industry /faculty /student mentor who can guide them,develop a realistic solution and get an idea on what major domain they are going to work on.",
    },
    {
      title: "Is it Ready?",
      description:
        "The team can get ready for their project along with the requirements. Once they complete their project they can check for concepts used and refine their project.",
    },
    {
      title: "Is it so good?",
      description:
        "The team can present their final working prototype and they can collabrate with industry mentors to match their project with industry standards.",
    },
    {
      title: "Is the work complete?",
      description:
        "The team can prepare a research paper based on various facts, information and innovative ideas found in the process and quote the research gap if any.",
    },
  ];
</script>

<div class="outer">
  <h1>STUCK UP WITH PROJECT?</h1>
  {#each processes as process}
    {@const { title, description } = process}
    <div class="inner">
      <div class="circle">{title}</div>
      <Saos
        animation={`scroll${
          processes.indexOf(process) % 2 ? 2 : 1
        } 0.4s ease-in-out both`}
        once
      >
        <div class="rectangle">
          <div class="inner1">
            <div class="inner2">
              <div class="content">
                {description}
              </div>
            </div>
          </div>
        </div></Saos
      >
    </div>
  {/each}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&family=Yeseva+One&display=swap");
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 74vh;
  }

  .inner:nth-child(even) {
    flex-direction: row-reverse;
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 16vw;
    box-shadow: 0 5px 10px 2px rgb(0 0 0 / 25%);
    width: 16vw;
    background: #6273cb;
    color: white;
    border-radius: 50em;
    padding: 1rem;
    font-size: 1.5em;
    font-weight: 700;
    font-family: sans-serif;
  }
  .inner1 {
    height: 50vh;
    width: 36vw;
    display: grid;
    place-items: center;
    border-radius: 2em;
    background: #e1ff27;
    padding: 0 1rem 0 1rem;
    box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 25%);
    transition: height 0.5s ease-in-out;
  }
  .inner2 {
    transform: matrix(1, 0, -0.2, 1, 0, 0);
    border-radius: 2em;
    background-color: #6273cb;
    width: 35vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 25%);
    font-size: calc(0.75rem + 0.5vmin);
    transition: all ease-in-out 300ms;
  }
  .inner2:hover {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  .inner2:hover .content {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1.5em;
    width: 80%;
    transform: matrix(1, 0, 0.2, 1, 0, 0);
    color: white;
    transition: all ease-in-out 300ms;
  }
  h1 {
    text-align: center;
    font-family: "Yeseva One", sans-serif;
    color: rgb(74, 71, 71);
    padding: 4rem 0 2rem 0;
  }
  .outer {
    background-color: #eee;
    font-family: sans-serif;
    padding-bottom: 5em;
  }
  @keyframes -global-scroll1 {
    0% {
      height: 0;
      margin-right: 30vw;
    }
    100% {
      height: 15em;
    }
  }
  @keyframes -global-scroll2 {
    0% {
      height: 0;
      margin-left: 30vw;
    }
    100% {
      height: 15em;
    }
  }
  @media only screen and (max-width: 900px) {
    .inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 200ms ease-in;
      height: 100vh;
      margin: 0;
    }
    .inner:nth-child(even) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 200ms ease-in;
      margin: 0;
    }
    .circle {
      margin: 1em;
      justify-content: center;
      align-items: center;
      height: 16vh;
      width: 16vh;
      transition: all 200ms ease-in;
    }
    .inner2 {
      width: 50vh;
      height: 50vh;
      transition: all 200ms ease-in;
    }
    .inner1 {
      width: 50vh;
      height: 50vh;
      transition: all 200ms ease-in;
    }
  }
  @media only screen and (max-width: 420px) {
    .circle {
      height: 12vh;
      width: 12vh;
      transition: all 100ms ease-in;
    }
    .inner2 {
      width: 35vh;
      height: 40vh;
      transition: all 100ms ease-in;
    }
    .inner1 {
      width: 35vh;
      height: 40vh;
      transition: all 100ms ease-in;
    }
  }
  /* @media screen and (max-width:740px){
    .circle{
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }
    .rectangle{
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }
  } */
</style>
