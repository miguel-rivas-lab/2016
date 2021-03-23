<?php include('php/functions.php'); ?><!DOCTYPE html>
<html>
  <head>
    <title>Miguel Rivas</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta property="og:title" content="Miguel Rivas">
    <meta property="og:site_name" content="Miguel Rivas">
    <meta property="og:description" content="Web Designer Portfolio">
    <meta name="keywords" content="miguel, rivas, aguacatekun, aguacate, web, designer, frontend, developer, porfolio, santo, domingo, dominican, republic, united state, usa">
    <meta name="description" content="Web Designer Portfolio">
    <meta property="og:image" content="https://miguel-rivas.github.io/img/portfolio.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <link rel="icon" type="image/png" href="https://miguel-rivas.github.io/img/favicon.ico">
    <link rel="apple-touch-icon-precomposed" href="https://miguel-rivas.github.io/img/favicon.ico">
    <link rel="apple-touch-icon" href="https://miguel-rivas.github.io/img/favicon.ico">
    <meta name="msapplication-TileColor" content="#222">
    <meta name="msapplication-TileImage" content="https://miguel-rivas.github.io/img/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href="css/vendor/venobox.css" rel="stylesheet">
    <link href="css/application.css" rel="stylesheet">
    <link href="css/print.css" rel="stylesheet" media="print">
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      
      ga('create', 'UA-89989670-1', 'auto');
      ga('send', 'pageview');
    </script>
  </head>
  <body class="animations">
    <aside class="texture"></aside>
    <aside class="loading"></aside>
    <nav>
      <div class="container">
        <button class="fa fa-bars"></button>
        <button class="fa fa-times"></button>
        <ul class="navigation">
          <li><a href="../portfolioB/">Home</a></li>
          <li><a href="https://www.drlogic.com/" target="_blank">DrLogic</a></li>
          <li><a href="../project/mineros/" target="_blank">Apap</a></li>
          <li><a href="http://presidente.com.do/carnaval/2015/home.php" target="_blank">Presidente</a></li>
          <li><a href="https://www.bprbank.com/" target="_blank">BPR Bank</a></li>
        </ul>
        <div class="links"><a href="https://www.linkedin.com/in/miguel-rivas-b576bb74" target="_blank" alt="Linkedin Profile" class="fa fa-linkedin"></a><a href="http://codepen.io/casperu/" target="_blank" alt="Codepen Profile" class="fa fa-codepen"></a><a href="../portfolio/" target="_blank" alt="Portfolio" class="fa fa-globe"></a><a href="../portfolio_2014/" target="_blank" alt="Portfolio" class="fa fa-globe"></a></div>
      </div>
    </nav>
    <main>
      <header>
        <h1>Hello<strong><?php if(isset($_GET["name"])){echo $_GET["name"];} ?></strong></h1><img src="img/cloud.png" class="cloud c01"><img src="img/cloud.png" class="cloud c02"><a href="#aboutme" class="fa fa-arrow-down"></a>
      </header>
      <section id="aboutme" class="letter">
        <div class="container">
          <p>hi!</p>
          <h2>My name is Miguel Rivas, <small>I'm a Web Designer living in Las Vegas, NV</small></h2>
          <p>I'm a big fan of children's books with outstanding design and illustrations. One of my favorites is "Black Book of Colors" which tries to explain colors to blind people.</p>
          <p>Usually, I work with PUG (HTML), SASS (CSS), and the Adobe Suite (Illustrator, Photoshop, Indesign, Flash and Premiere). I also love Git and have been known to roll up my sleeves and work with basic Ruby on Rails and PHP to push the project forward.</p>
        </div>
      </section>
      <section id="projects" class="projects"><a href="https://www.drlogic.com/" target="_blank"><img src="img/portfolio/drlogic.jpg"></a><a href="../project/mineros/" target="_blank"><img src="img/portfolio/apap.jpg"></a><a href="http://presidente.com.do/carnaval/2015/home.php" target="_blank"><img src="img/portfolio/ptf-loader.jpg"></a><a href="https://www.bprbank.com/" target="_blank"><img src="img/portfolio/bprbank.jpg"></a><a href="https://player.vimeo.com/video/210372722" data-autoplay="true" data-vbtype="vimeo" class="venobox"><img src="img/portfolio/videos.jpg"></a><img src="img/cloud.png" class="cloud c03">
        <div class="city">
          <div class="giant"></div>
          <div class="mountains"></div>
        </div>
      </section>
      <section class="ground">
        <div class="grass"><img src="img/ribbon.png" class="ribbon"></div><img src="img/landing_earth_ornament_top.png" class="top">
        <div class="body"></div>
        <div class="bottom">
          <div class="pattern_02"></div>
          <div class="pattern_01"></div>
        </div>
      </section>
      <section class="references"><img src="img/landing_wall ornament big.png" class="ornament_01"><img src="img/landing_wall ornament small.png" class="ornament_02">
        <div class="content">
          <h2 id="references">Super Cool<strong>References</strong></h2>
          <article class="rene"><img src="img/landing_ref 03.png" class="preview">
            <p class="title">RENÉ OLIVO</p>
            <p class="subtitle">DIGITAL DIRECTOR AT CAPITAL DBG</p>
          </article>
          <article class="josue"><img src="img/landing_ref 01.png" class="preview">
            <p class="title">JOSUE ABREU</p>
            <p class="subtitle">SOFTWARE ENGINEER AT GOCARDLESS</p>
            <p class="subtitle">PREVIOUS CEO/CO-FOUNDER AT PIXEL PERFECT TREE</p>
          </article>
        </div>
      </section>
      <footer>
        <div class="link"><a href="https://www.linkedin.com/in/miguel-rivas-b576bb74" target="_blank" alt="Linkedin Profile" class="fa fa-linkedin"></a><a href="http://codepen.io/casperu/" target="_blank" alt="Codepen Profile" class="fa fa-codepen"></a><a href="../portfolio_2014/" target="_blank" alt="Portfolio" class="fa fa-globe"></a><a href="../portfolio/" target="_blank" alt="Portfolio" class="fa fa-globe"></a></div>
      </footer>
      <section class="printBody">
        <div class="borderLine"></div><img src="img/landing_head.png" alt="header" class="head"><img src="img/landing_mountains.png" alt="city" class="city"><img src="img/landing_giant_character.png" alt="character" class="character"><img src="img/landing_qrcode.png" alt="code" class="qrCode"><img src="img/landing_cloud_print.png" alt="cloud" class="cloudMiddle"><img src="img/landing_cloud.png" alt="cloud" class="cloudTop">
      </section>
    </main>
    <script src="js/vendor/jquery-1.11.2.min.js"></script>
    <script src="js/vendor/venobox.min.js"></script>
    <script src="js/application.js"></script>
  </body>
</html>