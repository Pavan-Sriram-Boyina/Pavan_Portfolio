import React from "react";
import "./myprojects.css";
import IMG1 from "../../assets/jobby_image.png";
import IMG2 from "../../assets/portfolio_image.jpg";
import IMG3 from "../../assets/resume_image.png";
import IMG4 from "../../assets/food_munch.png";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Jobby App</h3>
          <small className="text-light">React JS</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Pavan-Sriram-Boyina/Jobby-App"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://pavansrjobby.ccbp.tech/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <small className="text-light">React JS</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Pavan-Sriram-Boyina/Pavan_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://pavansriram.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Food Munch</h3>
          <small className="text-light">HTML | CSS | Bootstrap</small>
          <div className="portfolio__item-cta">
            <a
              href="https://psrfoodmunch.ccbp.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>My Resume</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://drive.google.com/file/d/1NGfpFCI_loiJAAGblPsfQOSvrEqQ3BfY/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;
