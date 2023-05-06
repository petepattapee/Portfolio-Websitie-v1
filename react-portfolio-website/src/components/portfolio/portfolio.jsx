import React from "react";
import "./portfolio.css";
import Portfolio1 from "../../assets/Portfolio1.png";
// need 6 img for port

const data = [
  {
    id: 1,
    image: Portfolio1,
    title: "Portfolio Website V1",
    github: "https://github.com/petepattapee/Portfolio-Websitie-v1",
    demo: "https://petepattapee.web.app/",
  },
  // {
  //   id: 2,
  //   image: me,
  //   title: 'Test for portfolio',
  //   github: 'https://github.com',
  //   demo: 'https:/picture.com'
  // },
  // {
  //   id: 3,
  //   image: me,
  //   title: 'Test for portfolio',
  //   github: 'https://github.com',
  //   demo: 'https:/picture.com'
  // },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
