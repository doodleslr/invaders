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
            <li><a href="index.php">Return to Portfolio</a></li>
        </ul>
    </nav>
    <div id="instruction">
        <p class="mobile-hide">You can use the ←↑→ keyboard arrow keys to navigate the planets and pages.</p>
        <p class="mobile-hide">Otherwise the menu above can help you navigate the site.</p>
        <p id="mobile-instruction"> Unfortunately this game does not work on mobile or tablet right now, but touch screen support will be added <span>in the future!</span></p>
        <p>Feel free to view the source code for this game <a href='https://github.com/doodleslr/invaders' target="_blank">here!</a></p>
    </div>
    <div id='container'>
        <canvas id='background-canvas'></canvas>
        <canvas id='player-canvas'></canvas>
    </div>
    <nav id="footer-menu">
        <ul>
            <li><a href="index.php">Return to Portfolio</a></li>
        </ul>
    </nav>
</body>

<footer>
    <a href='#'>dglarocca@hotmail.com</a><a href='tel:+61402509254'>+61 402 509 254</a>
</footer>


<script type = "text/javascript" src="js/main.js"></script>
<script type = "text/javascript" src="js/engine.js"></script>
<script type = "text/javascript" src="js/display.js"></script>
<script type = "text/javascript" src="js/controller.js"></script>
<script type = "text/javascript" src="js/game.js"></script>
<script type = "text/javascript" src="js/form.js"></script>

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