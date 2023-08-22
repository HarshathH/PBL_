<script>
  import { Route, router } from "tinro";
  import Studprofile from "./studprofile.svelte";

  export let username;
  export let type;

  const user = JSON.parse(localStorage.getItem("user"));

  if (username === user.name) {
    switch (type) {
      case "mentor":
        router.goto("/mentor");
        break;

      case "hod":
        break;

      default:
        router.goto("/profile");
        break;
    }
  }
</script>
