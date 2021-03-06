import React from "react";
import "./academy.css";
import CourseCard from "./course-card/course-card";
import MiniGameCard from "./minigame-card/minigame-card";

function Academy({ loggedIn }) {
  return (
    <div className={"academy-main"}>
      <div className={"academy-title"}>
        {loggedIn ? <p>Welcome Back!</p> : <p>Academy</p>}
      </div>
      <div className={"academy-content"}>
        <div className={"academy-content-section"}>
          <p className={"academy-content-title"}>courses</p>
          <div className={"academy-content-section-child"}>
            <CourseCard
              imagePath={require("../../assets/courses-notational/course1.png")}
              title={"Expressing Emotions"}
              time={30}
            />
            <CourseCard
              imagePath={require("../../assets/courses-notational/course2.png")}
              title={"Fundamentals"}
              time={30}
            />
            <CourseCard
              imagePath={require("../../assets/courses-notational/course3.png")}
              title={"Self Control"}
              time={30}
            />
            <CourseCard
              imagePath={require("../../assets/courses-notational/course4.png")}
              title={"Recognising Danger"}
              time={30}
            />
            <CourseCard
              imagePath={require("../../assets/courses-notational/course5.png")}
              title={"Manipulating People"}
              time={30}
            />
          </div>
        </div>
        <br />
        <br />
        <div className={"academy-content-section"}>
          <p className={"academy-content-title"}>minigames</p>
          <div className={"academy-content-section-child-minigame"}>
            <MiniGameCard
              imagePath={require("../../assets/minigame-notational/minigame1.png")}
              title={"First Impressions"}
              time={30}
              difficulty={1}
            />
            <MiniGameCard
              imagePath={require("../../assets/minigame-notational/minigame2.png")}
              title={"Catch a Liar"}
              time={30}
              difficulty={2}
            />
            <MiniGameCard
              imagePath={require("../../assets/minigame-notational/minigame3.png")}
              title={"Tracking Client Emotions"}
              time={30}
              difficulty={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
