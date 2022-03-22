function HomeWorkarea() {
  return (
    <>
      <header>
        <h1>
          Hello<strong></strong>
        </h1>
        <img src="img/cloud.png" className="cloud c01" />
        <img src="img/cloud.png" className="cloud c02" />
        <a href="#aboutme" className="fa fa-arrow-down" />
      </header>
      <section id="aboutme" className="letter">
        <div className="container">
          <p>hi!</p>
          <h2>My name is Miguel Rivas, <small>I'm a Web Designer living in Las Vegas, NV</small></h2>
          <p>I'm a big fan of children's books with outstanding design and illustrations. One of my favorites is "Black Book of Colors" which tries to explain colors to blind people.</p>
          <p>Usually, I work with PUG (HTML), SASS (CSS), and the Adobe Suite (Illustrator, Photoshop, Indesign, Flash and Premiere). I also love Git and have been known to roll up my sleeves and work with basic Ruby on Rails and PHP to push the project forward.</p>
        </div>
      </section>
      <section id="projects" className="projects">
        <a target="_blank"><img src="img/portfolio/drlogic.jpg" /></a>
        <a target="_blank"><img src="img/portfolio/apap.jpg" /></a>
        <a target="_blank"><img src="img/portfolio/ptf-loader.jpg" /></a>
        <a target="_blank"><img src="img/portfolio/bprbank.jpg" /></a>
        <a href="https://player.vimeo.com/video/210372722" data-autoplay="true" data-vbtype="vimeo" className="venobox">
          <img src="img/portfolio/videos.jpg" />

        </a>
        <img src="img/cloud.png" className="cloud c03" />
        <div className="city">
          <div className="giant"></div>
          <div className="mountains"></div>
        </div>
      </section>
      <section className="ground">
        <div className="grass">
          <img src="img/ribbon.png" className="ribbon" />
        </div>
        <img src="img/landing_earth_ornament_top.png" className="top" />
        <div className="body"></div>
        <div className="bottom">
          <div className="pattern_02"></div>
          <div className="pattern_01"></div>
        </div>
      </section>
      <section className="references">
        <img src="img/landing_wall ornament big.png" className="ornament_01" />
        <img src="img/landing_wall ornament small.png" className="ornament_02" />
        <div className="content">
          <h2 id="references">Super Cool<strong>References</strong></h2>
          <article className="rene">
            <img src="img/landing_ref 03.png" className="preview" />
            <p className="title">RENÉ OLIVO</p>
            <p className="subtitle">DIGITAL DIRECTOR AT CAPITAL DBG</p>
          </article>
          <article className="josue">
            <img src="img/landing_ref 01.png" className="preview" />
            <p className="title">JOSUE ABREU</p>
            <p className="subtitle">SOFTWARE ENGINEER AT GOCARDLESS</p>
            <p className="subtitle">PREVIOUS CEO/CO-FOUNDER AT PIXEL PERFECT TREE</p>
          </article>
        </div>
      </section>
      <footer>
        <div className="link">
          <a href="https://www.linkedin.com/in/miguel-rivas-b576bb74" target="_blank" alt="Linkedin Profile" className="fa fa-linkedin"></a>
          <a href="http://codepen.io/casperu/" target="_blank" alt="Codepen Profile" className="fa fa-codepen"></a>
          <a href="../portfolio_2014/" target="_blank" alt="Portfolio" className="fa fa-globe"></a>
          <a href="../portfolio/" target="_blank" alt="Portfolio" className="fa fa-globe"></a>
        </div>
      </footer>
    </>
  );
};

export default HomeWorkarea;