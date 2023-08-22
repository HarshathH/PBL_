<script>
  import { Route } from "tinro";
  import robot from "../assets/robot.png";
  import Phone from "../assets/Phone.svg";
  import Mail from "../assets/Mail.svg";
  import Facebook from "../assets/Facebook.svg";
  import Instagram from "../assets/Instagram.svg";
  import Twitter from "../assets/Twitter.svg";
</script>

<!-- <div class="container">
  <div class="outer1">
  <div class="outer">
    <div class="inner">
      <h3>Contact</h3>
      </div>
      </div>
      </div>
      <div class="contact">
        <h4>0422-1234567</h4>
        <br>
        <a href="https://www.kct.ac.in/">www.kct.ac.in</a><br>
     </div>
     <div class="media">
         <a href="https://www.kct.ac.in/">www.kct.ac.in</a><br>
         <a href="https://www.kct.ac.in/">www.kct.ac.in</a><br>
         <a href="https://www.kct.ac.in/">www.kct.ac.in</a><br>
     </div>

</div> -->

<!-- <style>
  .inner {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #6273CB;
    width:15vw;
    

  }
  .outer {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #E1FF27;
    width:17vw;
    margin-left:1rem;
  }
  
  .container {
    background-color: #E9ECFD;
    display:flex;
    width:100vw;
    height: 40vh;
    
  }
  h3{
    text-align:left;
    
    padding: 0.5em 0.25em 0.5em 0.25em;
    font-size: calc(0.85em + 0.4vmin);
  }
  .contact{
    padding:2em 0 8em 3em;
  }
  .media{
  
  }
</style> -->

<div class="container">
  <div class="container1">
    <div class="inner-container">
      <div class="inner1">
        <div class="inner-container">
          <div class="inner2">
            <h3>CONTACT US</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="inner3">
      <div class="contact">
        <img src={Phone} alt="fiygbfijyfguy" id="phone" />
        <h4>0422-1234567</h4>
      </div>
      <div class="contact">
        <img src={Mail} alt="fiygbfijyfguy" id="mail" />
        <a href="https://www.kct.ac.in/">www.kct.ac.in</a>
      </div>
    </div>
  </div>

  <div class="container2">
    <div class="contact">
      <img src={Facebook} alt="fiygbfijyfguy" id="facebook" />
      <a href="https://www.facebook.com/KCT.edu/" target="blank">@KCT.edu</a>
    </div>
    <div class="contact">
      <img src={Instagram} alt="fiygbfijyfguy" id="instagram" />
      <a href="https://www.instagram.com/kct_84" target="blank">@kct_84</a>
    </div>
    <div class="contact">
      <img src={Twitter} alt="fiygbfijyfguy" id="twitter" />
      <a href="https://twitter.com/KCTOfficial " target="blank">@KCTOFFICIAL</a>
    </div>
  </div>
  <div class="container3">
    <img src={robot} alt="fiygbfijyfguy" id="robot" />
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vw 0 0 6vw;
    width: 100vw;
    height: 50vh;
    font-family: sans-serif;
    background-color: #e9ecfd;
    overflow: hidden;
  }
  .inner1 {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #e1ff27;
    width: 24vh;
    margin-top: 5em;
  }
  .inner2 {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #6273cb;
    width: 22vh;
    padding: 0.2px;
  }
  .inner3 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 3em;
  }
  h3 {
    text-align: left;
    padding-left: 1em;
    color: white;
    font-size: calc(0.75em + 0.5vmin);
  }
  h4 {
    font-size: 1.2em;
  }
  .container2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .inner-container {
    filter: drop-shadow(4px 0 5px rgba(64, 64, 65, 0.41));
  }

  #robot {
    width: 15vh;
    margin-right: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container3 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    cursor: pointer;
    color: black;
    text-decoration: none;
    font-size: 1.2em;
    transition: all ease-in-out 300ms;
  }

  .contact {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1em;
    gap: 1em;
    font-weight: 600;
  }
  a:hover {
    text-decoration: underline;
    color: #6273cb;
  }
  img:not(#robot) {
    height: 2em;
  }
  @media only screen and (max-width: 360px) {
    .container {
      display: block;
      height: 70vh;
      padding: 0;
    }
    a {
      margin: 1.6vw;
    }
    .contact {
      padding: 0;
      justify-content: left;
    }

    .container3 {
      display: none;
    }
  }
  @media only screen and (max-width: 570px) {
    #robot {
      width: 0;
    }
    .contact {
      padding: 0;
    }

    .container {
      justify-content: space-evenly;
      padding: 0;
    }
    .container3 {
      display: none;
    }
  }
  @media only screen and (max-width: 680px) {
    .contact {
      padding: 0;
    }

    #robot {
      width: 0;
    }
    .container {
      justify-content: space-evenly;
      padding: 0;
    }
    .container3 {
      display: none;
    }
  }
</style>
