<!DOCTYPE html>
<html>

  <head>
    <meta name = "viewport" content = "user-scalable=no,width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi">
    <link href = "css/css/main.css" rel = "stylesheet" type = "text/css">
    <title>Daniel La Rocca</title>

  </head>

  <body>
    <div id='container'>
        <canvas id='background-canvas'></canvas>
        <canvas id='player-canvas'></canvas>
    </div>
    <div id='content'>
        <div id="Portfolio">
            <h1>Portfolio</h1>
            <div>
                <div>
                    <img src='images/rocc.jpg'/>
                    <div>
                        <h3>title of project</h3>
                        <a href='#'>Github</a>
                        <!-- list of language used icons -->
                        <p>Description of project</p>
                    </div>
                </div>
                <div>
                    <img src='images/cutncomb.jpg'/>
                    <div>
                        <h3>title of project</h3>
                        <a href='#'>Github</a>
                        <!-- list of language used icons -->
                        <p>Description of project</p>
                    </div>
                </div>
                <div>
                    <img src='images/forum.jpg'/>
                    <div>
                        <h3>title of project</h3>
                        <a href='#'>Github</a>
                        <!-- list of language used icons -->
                        <p>Description of project</p>
                    </div>
                </div>
                <!-- can include nodejs projects once i figure out how to launch them online -->
            </div>
        </div>
        <div id="Contact">
            <h1>Contact Me</h1>
            <a href='#'>dglarocca@hotmail.com</a><a href='tel:+61402509254'>+61 402 509 254</a>
            <form method="POST" action="https://script.google.com/macros/s/AKfycbyUt8_Gw_AZFg7mEzTmb10-Y898hQpya-8ob_-9Iht0gBsu-oJE/exec">
                <input id="name" name="name" placeholder="Zapp Brannigan"/>
                <input id="email" name="email" type="email" value="" required placeholder="zappb@doop.com"/>
                <span id="email-invalid" style="display: none;"></span>
                <textarea id="message" name="message" placeholder="In the game of chess, you can never let your adversary see your pieces."></textarea>
                <button class="buttonStyle textTitle" style="font-size: 26px;"><b>Send</b></button>
            </form>
            <div class="textFlairD" style="display:none;text-align: center;" id="thankyou_message">
                <h1 class="textTitle" style="font-size: 24px;color: #f26522;"><i>Your request has been submitted.</i></h1>
                <h3>We appreciate you for contacting us, we will get back to you as soon as possible.</h2>
            </div>
        </div>
        <div id="Skills">
            <h1>Skills</h1>
            <p>Big List of skill icons</p>
            <div>
                <h3>Technologies</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <h3>Frameworks</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <h3>Adobe Suite</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <p>In addition to my current capabilities I am actively working my way through additional NodeJs tutorials to increase my experience with Front to Back-End interaction.<br>Following NodeJs tutorials, I intend to begin learning Vue with eyes on wielding React in the future.<br>
            I also have previous experience collaborating and leading a startup mobile application studio where my role was being the bridge between the art and programming teams while drafting design solutions for both. This gave me incredible insight to the workow and requirements of each side of the development process.</p>
        </div>
        <div id="About">
            <h1>About Me</h1>
            <p>Hey there, nice to meet you! My name is <span>Daniel La Rocca</span>, I'm a <span>Front-End Developer.</span><br>Ever since I was a kid I've had a love for puzzles and building. I'd spend hours on end waist-deep in a big box of Lego. Growing up I'd even take things apart to see how they were put together, but never successfully managed to put them back together, R.I.P. my first car.</p>

            <p>Eventually growing up seeing the advent of the internet, i was attracted towards development where I get to enjoy the best of both worlds. My main education was in Game Development but it extended to application design and UX design, the culmination of this was creating a startup mobile application studio with some friends. Fortunately we <a href='https://steamcommunity.com/sharedfiles/filedetails/?id=93036192' target="_blank">released one game!</a> before we shut down.</p>
            
            <p>When I'm not coding you'll likely find me cooking, working, reading science fiction, playing a few games, or backpacking my way around the world.</p>
            <img src='images/Daniel.jpg'/>
        </div>
    </div>
  </body>

<script type = "text/javascript" src="js/main.js">
    </script>
    <script type = "text/javascript" src="js/engine.js">
    </script>
    <script type = "text/javascript" src="js/display.js">
    </script>
    <script type = "text/javascript" src="js/controller.js">
    </script>
    <script type = "text/javascript" src="js/game.js">
</script>

</html>