<!DOCTYPE html>
<html>

    <head>
        <meta name = "viewport" content = "user-scalable=no,width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi">
        <link href = "css/css/main.css" rel = "stylesheet" type = "text/css">
        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
        <title>Daniel La Rocca</title>

    </head>

    <body>
        <div id="overlay">
        </div>
    <div id="introduction">
            <h1>Hi, I'm Daniel :)</h1>
            <h4>I am a Sydney based Web Developer with a love for strong, bold colours, challenging problem solving, and engaging interactive experiences.</h4>
    </div>
    <nav id="menu">
        <ul>
            <li><a onclick="showItem(this)" href="#Portfolio">Portfolio</a></li>
            <li><a onclick="showItem(this)" href="#Skills">Skills</a></li>
            <li><a onclick="showItem(this)" href="#About">About Me</a></li>
            <li><a onclick="showItem(this)" href="#Contact">Contact</a></li>
        </ul>
    </nav>
    <div id="instruction">
        <p>Use your keyboard arrow keys to navigate the planets.</p>
        <p>Otherwise the menu above can help you.</p>
    </div>
    <div id='container'>
        <canvas id='background-canvas'></canvas>
        <canvas id='player-canvas'></canvas>
    </div>
    <div id='content'>
        <div id="Portfolio">
            <h1>Portfolio<div class="border"></div></h1>
            <div>
                <div>
                    <img onmouseover="showPortInfo(this)" src='images/rocc.jpg'/>
                    <div>
                        <h2>Rocc Plumbing</h2>
                        <a href='#'>https://github.com/doodleslr/roccplumbing</a>
                        <!-- list of language used icons -->
                        <p>Active business website for Rocc Plumbing, a successful Sydney-based plumbing company.<br>
                        Developed in HTML5 and utilising SASS, CSS animations, jQuery, PHP for templating and Bootstrap for a reliable UI.</p>
                    </div>
                </div>
                <div>
                    <img onmouseover="showPortInfo(this)" src='images/cutncomb.jpg'/>
                    <div>
                        <h2>Cut and Comb</h2>
                        <a href='#'>https://github.com/doodleslr/cutandcomb</a>
                        <!-- list of language used icons -->
                        <p>Active business website for Cut and Comb, another successful Sydney-based Hairdressing Salon.<br>
                        Developed in HTML5 and utilising SASS, jQuery, PHP and Bootstrap for a reliable UI.</p>
                    </div>
                </div>
                <div>
                    <img onmouseover="showPortInfo(this)" src='images/forum.jpg'/>
                    <div>
                        <h2>CRUD Forum</h2>
                        <a href='#'>https://github.com/doodleslr/dglarocca-forum</a>
                        <!-- list of language used icons -->
                        <p>A responsive forum with Reddit inspired voting system, also including image media upload.<br>
                        Developed mainly in PHP and utilising SASS, HTML5, SQLite for user and post sotrage, and Bootstrap for a quick and reliable UI.</p>
                    </div>
                </div>
                <!-- can include nodejs projects once i figure out how to launch them online -->
                <!-- also wiki project, and maybe weather if i fix it -->
            </div>
        </div>
        <div id="Contact">
            <h1>Contact Me<div class="border"></div></h1>
            <a href='#'>dglarocca@hotmail.com</a><a href='tel:+61402509254'>+61 402 509 254</a>
            <form method="POST" action="https://script.google.com/macros/s/AKfycbyUt8_Gw_AZFg7mEzTmb10-Y898hQpya-8ob_-9Iht0gBsu-oJE/exec">
                <div>
                    <label>Name:</label>
                    <input id="name" name="name" placeholder="Zapp Brannigan"/>
                    <label>Email</label>
                    <input id="email" name="email" type="email" value="" required placeholder="zappb@doop.com"/>
                    <span id="email-invalid" style="display: none;"></span>
                    <label>Subject:</label>
                    <input id="subject" name="subject" placeholder="The key to victory is the element of surprise. Surprise!"/>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea id="message" name="message" placeholder="In the game of chess, you can never let your adversary see your pieces."></textarea>
                </div>
                <button><b>Send</b></button>
            </form>
            <div class="textFlairD" style="display:none;text-align: center;" id="thankyou_message">
                <h1 class="textTitle" style="font-size: 24px;color: #f26522;"><i>Your request has been submitted.</i></h1>
                <h3>We appreciate you for contacting us, we will get back to you as soon as possible.</h2>
            </div>
        </div>
        <div id="Skills">
            <h1>Skills<div class="border"></div></h1>
            <p>Icon list of languages</p>
            <div class="skill-list">
                <div onclick="showSkill(this)">
                    <h2>Languages</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>PHP</li>
                        <li>SQLite</li>
                        <li>JSON</li>
                    </ul>
                </div>
                <div onclick="showSkill(this)">
                    <h2>Technologies</h2>
                    <ul>
                        <li>SASS</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Twig</li>
                        <li>REST</li>
                    </ul>
                </div>
                <div onclick="showSkill(this)">
                    <h2>Software</h2>
                    <ul>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Blender</li>
                        <li>Autodesk Maya</li>
                    </ul>
                </div>
            </div>
            <div class="skill-p">
                <p>In addition to my current capabilities I am actively working my way through additional NodeJs tutorials to increase my experience with Front to Back-End interaction.<br>Following NodeJs tutorials, I intend to begin learning Vue with eyes on wielding React in the future.</p>
                <p>I also have previous experience collaborating and leading a startup mobile application studio where my role was being the bridge between the art and programming teams while drafting design solutions for both. This gave me incredible insight to the workflow and requirements of each side of the development process.</p>
            </div>
        </div>
        <div id="About">
            <h1>About Me<div class="border"></div></h1>
            <div>
                <div>
                    <h3>Hey there, nice to meet you! My name is <span>Daniel La Rocca</span></h3>
                    <p>I'm a <span>Front-End Developer.</span> My learning journay has at times been difficult but i have regularly been inspired by a little known jogger character in the TV show Bojack Horseman who said</p>

                    <h4>"It gets easier. Every day it gets a little easier. But you gotta do it every day. That's the hard part. But it does get easier."</h4>

                    <p>My main take away from these words were that anything can be done, by leaps and bounds or even incrementally over time, and as a result I try, every day to at least write one line, because the world wasn't built in a day.<br><br>Growing up seeing the advent of the internet, i was attracted towards development where now I get to enjoy the best of both worlds. My main education was in Game Development but it extended to application design and UX design, the culmination of this was creating a startup mobile application studio with some friends. Fortunately we <a href='https://steamcommunity.com/sharedfiles/filedetails/?id=93036192' target="_blank">released one game!</a> before we shut down.<br><br>When I'm not coding you'll likely find me cooking, working, reading science fiction, playing a few games, or backpacking my way around the world.</p>
                </div>
                <div>
                    <img src='images/Daniel.jpg'/>
                </div>
            </div>
        </div>
    </div>
</body>

<footer>
    <a href='#'>dglarocca@hotmail.com</a><a href='tel:+61402509254'>+61 402 509 254</a>
</footer>


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

<script type = "text/javascript">

itemArr = ['#Portfolio', '#Skills', '#About', '#Contact'];
    const showItem = function(e){
        let p = itemArr.length - 1;
        for(p; p > -1; --p){
            var pg = itemArr[p];
            item = document.querySelector(pg);
            item.classList.remove('active');
        }
        hrf = e.getAttribute('href');
        item = document.querySelector(hrf);
        item.classList.add('active');
    }

    const showSkill = function(e){
        let target = e.childNodes[3];
        console.log(target);
        target.classList.toggle('active-skill');
    }

    const showPortInfo = function(e){
        let target = e.nextElementSibling;
        target.classList.add('portfolio-item');
    }
</script>
</html>