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
            <h1>Hi, I'm Daniel.</h1>
            <h4>I am a Sydney based Web Developer with a love for strong, bold colours, challenging problem solving, and engaging interactive experiences.</h4>
    </div>
    <nav id="menu">
        <ul>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#About">About Me</a></li>
            <li><a href="#Contact">Contact</a></li>
            <!-- <li><a href="invaders.php">Game</a></li> -->
        </ul>
    </nav>

    <div id='content'>
        <div id="Portfolio">
            <h1>Portfolio<div class="border"></div></h1>
            <div>
                <div ontouchstart="showMobileInfo(this)">
                    <img onmouseover="showPortInfo(this)" src='images/rocc.jpg'/>
                    <div>
                        <a class="inactive" target="_blank" href="https://roccplumbing.com.au/"><h2>Rocc Plumbing</h2></a>
                        <a class="inactive" target="_blank" href='https://github.com/doodleslr/roccplumbing'>https://github.com/doodleslr/roccplumbing</a>
                        <ul>
                            <li><img src='images/icons/1.gif'/></li>
                            <li><img src='images/icons/2.gif'/></li>
                            <li><img src='images/icons/3.gif'/></li>
                            <li><img src='images/icons/4.gif'/></li>
                            <li><img src='images/icons/6.gif'/></li>
                            <li><img src='images/icons/7.gif'/></li>
                            <li><img src='images/icons/8.gif'/></li>
                            <li><img src='images/icons/11.gif'/></li>
                        </ul>
                        <div>
                            <p><span>My Role</span><br>Tasked with creating a business website for Rocc Plumbing, a successful Sydney-based plumbing company.<br>
                            I developed this in HTML5 and utilised SASS, CSS animations, Javascript, PHP for modular templating and Bootstrap for a reliable UI.</p>
                            <p><span>Project Difficulties</span><br>The major difficulty was getting accustomed to using what I learned outside of a tutorial as this was my first real project.<br>
                            I included multiple unnecessary frameworks, like a jQuery library being used instead of simply using CSS text justify.</p>
                            <p><span>My Solutions</span><br>I removed all jQuery dependancies and replaced them with faster and more efficient CSS and Javascript. I revised and minified all my "error filled, rookie, !important heavy CSS" with SASS and implemented a regex spam filter for the contact form.</p>
                        </div>
                    </div>
                </div>
                <div ontouchstart="showMobileInfo(this)">
                    <img class="portImg" onmouseover="showPortInfo(this)" src='images/cutncomb.jpg'/>
                    <div>
                        <a class="inactive" target="_blank" href="http://www.cutandcomb.com.au/"><h2>Cut and Comb</h2></a>
                        <a class="inactive" target="_blank" href='https://github.com/doodleslr/cutandcomb'>https://github.com/doodleslr/cutandcomb</a>
                        <ul>
                            <li><img src='images/icons/1.gif'/></li>
                            <li><img src='images/icons/2.gif'/></li>
                            <li><img src='images/icons/3.gif'/></li>
                            <li><img src='images/icons/4.gif'/></li>
                            <li><img src='images/icons/6.gif'/></li>
                            <li><img src='images/icons/8.gif'/></li>
                            <li><img src='images/icons/11.gif'/></li>
                        </ul>
                        <div>
                            <p><span>My Role</span><br>Tasked with creating a business website for Cut and Comb, another successful Sydney-based hairdressing salon.<br>
                            I developed this in HTML5 and utilised SASS, Javascript, PHP for modular templating and Bootstrap for easy page layouts.</p>
                            <p><span>Project Difficulties</span><br>My major challenge in this project was making this site responsive, while still presenting a clean design.<br>
                            Many layouts were unique, making it difficult to create modular pieces to reuse across the site. The Services page was especially a challenge at the time because of the amount of information to present.</p>
                            <p><span>My Solutions</span><br>I relied upon Bootstrap to help significantly with the layout as it provided me with the means to create the clean design I was after, while allowing me to easily adjust the layouts for each of my CSS breakpoints.</p>
                        </div>
                    </div>
                </div>
                <div ontouchstart="showMobileInfo(this)">
                    <img class="portImg" onmouseover="showPortInfo(this)" src='images/rijks.jpg'/>
                    <div>
                        <a class="inactive" target="_blank" href="http://www.dglarocca.com/rijks/"><h2>Rijksmuseum Browser</h2></a>
                        <a class="inactive" target="_blank" href='https://github.com/doodleslr/Rijksmuseum'>https://github.com/doodleslr/Rijksmuseum</a>
                        <ul>
                            <li><img src='images/icons/2.gif'/></li>
                            <li><img src='images/icons/3.gif'/></li>
                            <li><img src='images/icons/4.gif'/></li>
                            <li><img src='images/icons/16.gif'/></li>
                        </ul>
                        <div>
                            <p><span>Project</span><br>This website was used to develop my Reactjs skills and to become more comfortable in a React environment.<br>
                            I developed this in entirely with React and utilised SASS.</p>
                            <p><span>Project Difficulties</span><br>A challenge in this project was being too ambitious with the Rijksmuseum API, I had grand ideas but the schema for the API allowed only strict use with queries and information navigation. Another difficulty was implementing the tile swap puzzle in a React environment with state.</p>
                            <p><span>My Solutions</span><br>I challenged myself to manipulate the API information and that helped me find the limits of what I could do with the API.<br>
                            For the tile puzzle I followed a tutorial on how to setup a vanila JS tile puzzle, which helped me figure what to pass in my state.</p>
                        </div>
                    </div>
                </div>
                <div ontouchstart="showMobileInfo(this)">
                    <img class="portImg" onmouseover="showPortInfo(this)" src='images/forum.jpg'/>
                    <div>
                        <a class="inactive" target="_blank" href="https://www.dglarocca.com/forum/login.php"><h2>PHP Forum</h2></a>
                        <a class="inactive" target="_blank" href='https://github.com/doodleslr/dglarocca-forum'>https://github.com/doodleslr/dglarocca-forum</a>
                        <ul>
                            <li><img src='images/icons/1.gif'/></li>
                            <li><img src='images/icons/2.gif'/></li>
                            <li><img src='images/icons/3.gif'/></li>
                            <li><img src='images/icons/4.gif'/></li>
                            <li><img src='images/icons/6.gif'/></li>
                            <li><img src='images/icons/7.gif'/></li>
                            <li><img src='images/icons/9.gif'/></li>
                            <li><img src='images/icons/11.gif'/></li>
                            <li><img src='images/icons/12.gif'/></li>
                        </ul>
                        <div>
                            <p><span>Project</span><br>This was a fun project I used to warm up my PHP skills before working on a PHP e-Commerce site.<br>
                            I developed this mainly in PHP and utilised SASS, HTML5, SQLite for user and data storage, and Bootstrap for a quick and reliable UI.</p>
                            <p><span>Project Difficulties</span><br>My major challenge in this project was encountering a PHP error that halted all POST and GET requests.<br>
                            I rewrote all code for two weeks before I reached out to a friend who correctly suggested looking at the memory limit in php.ini.<br>
                            Another challenge was only counting unique votes on posts to prevent duplicates.</p>
                            <p><span>My Solutions</span><br>From the memory limit error I learned a powerful lesson about collaboration, fresh eyes, and that coding alone can and will lead to tunnel vision.<br>
                            For my unique votes problem I bound the username and vote to the post and only updated the tally if the vote didn't exist or was unique.</p>
                        </div>
                    </div>
                </div>
                <div ontouchstart="showMobileInfo(this)">
                    <img class="portImg" onmouseover="showPortInfo(this)" src='images/accounting.jpg'/>
                    <div>
                        <h2>Accounting Site Design</h2>
                    
                        <ul>
                            <li><img src='images/icons/14.gif'/></li>
                            <li><img src='images/icons/15.gif'/></li>
                        </ul>
                        <div>
                            <p><span>My Role</span><br>This was a early design mockup for an accounting business client.<br>
                            I made this design in Illustrator for layout and Photoshop to edit image assets.<br>
                            Unfortunately the time was not right and this project has been put on hold for the time being.</p>
                            <p><span>Project Difficulties</span><br>The challenge was creating a design with little to no direction in aesthetic.</p>
                            <p><span>My Solutions</span><br>I resolved to create something clean, simple and blue while recycling content used on their current site.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div id="Skills">
            <h1>Skills<div class="border"></div></h1>
            <div class="icon-list">
                <ul>
                    <li><img src='images/icons/1.gif'/></li>
                    <li><img src='images/icons/2.gif'/></li>
                    <li><img src='images/icons/3.gif'/></li>
                    <li><img src='images/icons/4.gif'/></li>
                    <li><img src='images/icons/5.gif'/></li>
                    <li><img src='images/icons/6.gif'/></li>
                    <li><img src='images/icons/7.gif'/></li>
                    <li><img src='images/icons/8.gif'/></li>
                    <li><img src='images/icons/9.gif'/></li>
                    <li><img src='images/icons/10.gif'/></li>
                    <li><img src='images/icons/11.gif'/></li>
                    <li><img src='images/icons/12.gif'/></li>
                    <li><img src='images/icons/13.gif'/></li>
                    <li><img src='images/icons/14.gif'/></li>
                    <li><img src='images/icons/15.gif'/></li>
                </ul>
            </div>
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
                        <li>Maya</li>
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
                    <h3>Hey there, nice to meet you! My name is Daniel La Rocca</h3>
                    <p>I'm a Front-End Developer. I am a determined, results-driven person who always enjoys a challenge.<br>I have knowledge in design and Front-End Development with ongoing self-education in additional Front and Back-End technologies.<br>My learning journey has at times been difficult but i have regularly been inspired by a quote from a minor character in a TV show who said...</p>

                    <h4>"It gets easier. Every day it gets a little easier.<br>But you gotta do it every day. That's the hard part.<br>But it does get easier."</h4>

                    <p>This has become a mantra for me and helped me realise anything can be done, by leaps and bounds or even incrementally over time. As a result I try, every day to at least write something, anything, because the world wasn't built in a day.<br><br>Growing up seeing the advent of the internet, i was attracted towards development where now I get to enjoy the best of both worlds.<br>My main education was in Game Development but it extended to application design and UX design, the culmination of this was creating a startup mobile application studio with some friends. Fortunately we <a href='https://steamcommunity.com/sharedfiles/filedetails/?id=93036192' target="_blank">released one game!</a> before we shut down.<br><br>When I'm not coding you'll likely find me cooking, working, reading science fiction, playing a few games, or backpacking my way around the world.</p>
                </div>
                <div style="text-align: center">
                    <img src='images/Daniel.jpg'/>
                </div>
            </div>
        </div>
        <div id="Contact">
            <h1>Contact Me<div class="border"></div></h1>
            <a href='#'>dglarocca@hotmail.com</a><a href='tel:+61402509254'>+61 402 509 254</a>
            <form method="POST" action="https://script.google.com/macros/s/AKfycbz4E0Mrf5npMH1NczFV93N8qry10pg8zvhWY7KfDrD4t87dmaQ/exec">
                <div>
                    <label>Name:</label>
                    <input id="name" name="name" placeholder="Zapp Brannigan"/>
                    <label>Email</label>
                    <input id="email" name="email" type="email" value="" required placeholder="zappb@doop.com"/>
                    <span id="email-invalid" style="display: none;"></span>
                    <label>Subject:</label>
                    <input id="subject" name="subject" placeholder="The key to victory is the element of surprise. Surprise!"/>
                    <label class="sronly"></label>
                    <input id="honeypot" type="text" name="honeypot" value="" />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea id="message" name="message" placeholder="In the game of chess, you can never let your adversary see your pieces."></textarea>
                </div>
                <button>Send</button>
            </form>
            <div class="thankyou hide">
                <h3><i>Your message has been submitted. Thank you.</i></h1>
            </div>
        </div>
    </div>

    <nav id="footer-menu">
        <ul>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#About">About Me</a></li>
            <li><a href="#Contact">Contact</a></li>
            <!-- <li><a href="invaders.php">Game</a></li> -->
        </ul>
    </nav>
</body>

<footer>
    <a href='#'>dglarocca@hotmail.com</a><a href='tel:+61402509254'>+61 402 509 254</a>
</footer>

<script type = "text/javascript">
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    const showSkill = function(e){
        let target = e.childNodes[3];
        console.log(target);
        target.classList.toggle('active-skill');
    }

    const showPortInfo = function(e){
        let target  = e.nextElementSibling;
        let link    = target.querySelectorAll('.inactive');
        for(var i = 0; i < link.length; i++) {
            link[i].classList.remove('inactive');
        }
        target.style.height = "450px";
        target.style.opacity = "1";
        target.classList.add('portfolio-item');
    }

    const showMobileInfo = function(e){
        let target  = e.querySelector('div');
        let link    = target.querySelectorAll('.inactive');
        for(var i = 0; i < link.length; i++) {
            link[i].classList.remove('inactive');
        }
        target.style.display = "contents";
        target.classList.add('portfolio-item');
    }
</script>

</html>