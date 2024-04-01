import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>
              Discover a diverse world of creative minds within your reach
            </h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Access the top talent for every investment level
            </div>
            <p>
              Discover exceptional services tailored to your funding. No hidden
              fees, only transparent project-based costs.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Guaranteed secure payments, every step of the way
            </div>
            <p>
              Stay in control of your investment. Your funds are safeguarded
              until you're satisfied with the outcome.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Round-the-clock assistance
            </div>
            <p>
              Experience exceptional support throughout your investment journey.
              Whether you're seeking new opportunities or finalizing a project,
              we're here for you.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />{" "}
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
