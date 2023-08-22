<script>
  let proposals = fetch("http://localhost:3000/api/proposals")
    .then((json) => json.json())
    .then((a) => {
      return a.proposals;
    });

  import { Route, router } from "tinro";
  import Attribute from "./components/attribute.svelte";
  import Header from "./components/Header.svelte";

  import Steps from "./components/steps.svelte";
  import Contact from "./components/contact.svelte";
  import Choice from "./components/Choice.svelte";
  import Login from "./components/Login.svelte";
  import Todo from "./components/todo.svelte";

  import Progress from "./components/progress.svelte";
  import Studprofile from "./components/studprofile.svelte";
  import Teamprofile from "./components/Teamprofile.svelte";
  import Mentor from "./components/Mentor.svelte";
  import User from "./components/User.svelte";
  import Posts from "./components/Posts.svelte";

  router.mode.hash();

  window["ab"] = (_) => router.goto("/user/student");
  const steps = document.getElementById("steps");
</script>

<Route path="/">
  <Header />
  <Steps />
  <Attribute />

  <Contact />
</Route>

<Route path="/choice">
  <Choice />
</Route>
<Route path="/user/teamprofile">
  <Teamprofile />
</Route>
<Route path="/login">
  <Login />
</Route>
<Route path="/posts">
  <Posts {proposals} />
</Route>
<Route path="/user/:type/:username" let:meta>
  <User username={meta.params.username} type={meta.params.type} />
</Route>
<Route path="/user/student/todo">
  <Todo />
</Route>

<Route path="/user/student/progress">
  <Progress />
</Route>
<Route path="/student/profile">
  <Studprofile />
</Route>

<Route path="/mentor/profile">
  <Mentor />
</Route>

<style>
  /* #EAE7DC (LIGHT GREY)  #D8C3A5 (SANDAL)  #8E8D8A (DARK GREY)    
  #e2a9a9 (LIGHT PINK)  #d36767 (DARK PINK) 
  
  h1:    #4a4747  
  * {
    margin: 0;
    padding: 0;
    overflow-y: none;
  }*/
</style>
