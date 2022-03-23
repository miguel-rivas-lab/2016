import { ReactElement } from "react";

import ScrollArea from '../components/scroll-area';
import Cloud from '../img/cloud.png';
import Rene from "../img/rene.png";
import Josue from "../img/josue.png";
import WallOrnamentBig from "../img/landing_wall ornament big.png";
import WallOrnamentSmall from "../img/landing_wall ornament small.png";
import Ribbon from "../img/ribbon.png";
import EarthTop from "../img/landing_earth_ornament_top.png";

function Projects(): ReactElement {
  const db = [
    "apap",
    "book",
    "bprbank",
    "car",
    "drlogic",
    "drlogic_404",
    "flatcss",
    "pills",
    "ppt_404",
    "ppt_500",
    "ptf-01",
    "ptf-02",
    "ptf-03",
    "ptf-04",
    "ptf-05",
    "ptf-06",
    "ptf-07",
    "ptf-08",
    "ptf-09",
    "ptf-10",
    "ptf-11",
    "ptf-carnaval",
    "ptf-html-love",
    "ptf-loader",
    "ptf-photo-presidente",
    "ptf-svg",
    "ptf-tetravex",
    "ptf-verano",
    "tips",
    "videos",
  ];
  const result = [];
  db.forEach((item, index) => {
    result.push(
      <img width="200" height="200" src={`https://miguel-rivas.github.io/zapp/img/preview-square/${item}.jpg`} key={`nav-${index}`} />
    );
  });
  return <>{result}</>;
}

function References(): ReactElement {
  const db = [
    { img: Rene, title: "René Olivo", description: "Digital Director Capital DBG" },
    { img: Josue, title: "Josue Abreu", description: "CEO/Co-founder at Pixel Perfect Tree" },
  ];
  const result = [];
  db.forEach((item, index) => {
    result.push(
      <article className="rene" key={`nav-${index}`}>
        <img src={item.img} className="preview" />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </article>
    );
  });
  return <>{result}</>;
}

function HomeWorkarea() {
  return (
    <ScrollArea horizontal={false}>
      <header>
        <h1>
          Hello<strong></strong>
        </h1>
        <img src={Cloud} className="cloud c01" />
        <img src={Cloud} className="cloud c02" />
      </header>
      <section id="aboutme" className="letter">
        <div className="container">
          <p>hi!</p>
          <h2>My name is Miguel Rivas, <small>I'm a Frontend Developer living in Las Vegas, NV</small></h2>
          <p>I'm a big fan of children's books with outstanding design and illustrations. One of my favorites is "Black Book of Colors" which tries to explain colors to blind people.</p>
          <p>Usually, I work with PUG (HTML), SASS (CSS), and the Adobe Suite (Illustrator, Photoshop, Indesign, Flash and Premiere). I also love Git and have been known to roll up my sleeves and work with basic Ruby on Rails and PHP to push the project forward.</p>
        </div>
      </section>
      <section className="projects">
        <img src={Cloud} className="cloud c03" />
        <div className="city">
          <div className="giant"></div>
          <div className="mountains"></div>
        </div>
      </section>
      <section className="ground">
        <div className="grass">
          <div className="gallery" id="projects">
            <Projects />
          </div>
          <img src={Ribbon} className="ribbon" />
        </div>
        <img src={EarthTop} className="top" />
        <div className="body"></div>
        <div className="bottom">
          <div className="pattern_02"></div>
          <div className="pattern_01"></div>
        </div>
      </section>
      <section className="references">
        <img src={WallOrnamentBig} className="ornament_01" />
        <img src={WallOrnamentSmall} className="ornament_02" />
        <div className="content">
          <h2 id="references">References</h2>
          <References />
        </div>
      </section>
      <footer>
      </footer>
    </ScrollArea>
  );
};

export default HomeWorkarea;