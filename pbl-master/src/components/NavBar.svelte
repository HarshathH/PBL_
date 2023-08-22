<script>
  export let title;
  export let links;
</script>

<div class="outerContainer">
  <div class="container-wrap">
    <div class="container">
      <div class="title">
        {title}
      </div>

      <nav>
        <div class="links">
          <a href={links[0].link}><p>{links[0].name}</p></a>

          <a href={links[1].link}><p>{links[1].name}</p></a>

          <a href={links[2].link}><p>{links[2].name}</p></a>
        </div>
      </nav>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100vw;
    min-height: 30vh;
    background: #e1ff27;
    display: flex;
    flex-direction: row;
    clip-path: polygon(0 0, 100% 0%, 100% 50%, 0 25%);
    justify-content: space-between;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
  }
  .container-wrap {
    filter: drop-shadow(-1px 0 10px rgba(104, 104, 4, 0.5));
  }

  .title {
    margin: 2%;
    font-size: 85%;
    font-weight: 750;
    font-family: sans-serif;
  }
  .links {
    margin: 1em;
    display: flex;
    flex-direction: row;
    font-size: 0.8em;
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
    color: black;
  }
  p {
    margin: 0.8em;
    margin-inline: 2.5em;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.592);
  }
</style>
