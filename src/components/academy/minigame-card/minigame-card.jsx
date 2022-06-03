import React from "react";
import "./minigame-card.css";

function MiniGameCard({ imagePath, title, time, academy }) {
  const _get_difficulty = () => {
    if (academy === 0) {
      return require("../../../assets/Icons/difficulty/easy.png");
    } else if (academy === 1) {
      return require("../../../assets/Icons/difficulty/medium.png");
    } else {
      return require("../../../assets/Icons/difficulty/hard.png");
    }
  };

  const _get_difficulty_name = () => {
    if (academy === 0) {
      return "easy";
    } else if (academy === 1) {
      return "medium";
    } else {
      return "hard";
    }
  };

  return (
    <div className={"academy-content-minigame"}>
      <div className={"academy-content-minigame-image"}>
        <img
          className={"academy-content-minigame-image-data"}
          src={imagePath}
          alt={"minigame Notational Data 1"}
        />
      </div>
      <div className={"academy-content-minigame-title"}>
        <p>{title}</p>
      </div>
      <div className={"academy-content-course-info"}>
        <img
          src={require("../../../assets/Icons/time.png")}
          alt={"This course is expected to take 30 minutes"}
        />
        <p>{time} minutes</p>
      </div>
      <div className={"academy-content-minigame-info"}>
        <img
          src={_get_difficulty()}
          alt={"This minigame is expected to take 30 minutes"}
        />
        <p>{_get_difficulty_name()}</p>
      </div>
    </div>
  );
}

export default MiniGameCard;