<script>
  let attributes = [
    {
      id: 1,
      content: "Project",
      content2:
        "The best day to start your project is today.Consistency is the key to successfully completing the project. ",
    },
    {
      id: 2,
      content: "Management",
      content2:
        "A go-to place to manage all your projects in a standardardised format that you will be able to understand in a jiffy. ",
    },
    {
      id: 3,
      content: "Idea",
      content2:
        "A place where you can submit all your ideas and get valuable suggestions in order to improve your project. ",
    },
    {
      id: 4,
      content: "Progress",
      content2:
        "A single platform which takes count of each progress that you make in your project ... You need not worry. ",
    },
    {
      id: 5,
      content: "Suggestions",
      content2:
        "A  single phrase is of greater value than a page of reviews. So gather them and keep it safe.",
    },
  ];
</script>

<div class="container">
  <h1>Multiple work.One workspace</h1>
  <div class="outer">
    {#each attributes as attribute}
      {#if attribute.id % 2 != 0}
        <div class="inner">
          <div class="upper">
            <div class="inner1">
              <div class="inner2">
                <div class="content">
                  {attribute.content}
                </div>
                <div class="inner3">
                  <div class="content2">
                    {attribute.content2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div class="inner">
          <div class="lower">
            <div class="inner1">
              <div class="inner2">
                <div class="content">
                  {attribute.content}
                </div>
                <div class="inner3">
                  <div class="content2">
                    {attribute.content2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&family=Yeseva+One&display=swap");

  .outer {
    justify-content: center;
    align-items: center;
    display: flex;

    height: 40vh;
    max-width: 100vw;
  }

  .container {
    height: 100vh;
  }
  .upper,
  .lower {
    height: 15vw;
    width: 15vw;
    margin: 2vw;
    background-color: #6273cb;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
    font-weight: 700;
    font-family: sans-serif;
  }
  .lower {
    margin-top: 6em;
  }
  h1 {
    padding: 15vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Yeseva One", sans-serif;
    color: rgb(74, 71, 71);
    margin-block: 0;
  }
  h3 {
    color: rgb(48, 47, 47);
    text-align: center;
  }
  .inner1:hover {
    box-shadow: 0px 4px 10px 4px rgb(0 0 0 / 25%);
  }

  .inner {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .inner1 {
    border-radius: 1em 1em 1em 1em;
    height: 17vw;
    width: 17vw;
    box-shadow: 0px 4px 10px 1px rgb(0 0 0 / 25%);
    background-color: #6273cb;
    transition: all ease-in-out 400ms;
  }
  .inner2 {
    height: 4vw;
    width: 17vw;

    border-radius: 1em 1em 0 0;
    background-color: #e1ff27;
    font-size: calc(0.75rem + 0.5vmin);
    transition: all ease-in-out 400ms;
  }
  .inner3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1em;
    height: 11vw;
    width: 15vw;
    font-size: calc(0.5vw + 0.5vmin);
  }
  .content {
    font-size: calc(1vw + 0.5vmin);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 4vw;

    width: 15vw;
  }
  .content2 {
    font-size: calc(0.75vw + 0.5vmin);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4vh;
    width: 15vw;
    padding-right: 3vw;
    color: white;
    font-weight: 500;
  }
  @media only screen and (max-width: 700px) {
    .container {
      height: 60vh;
      transition: all 50ms ease-in;
    }
    h1 {
      padding: 2vh 0;
    }
    .lower {
      margin-top: 4em;
    }
  }
</style>
