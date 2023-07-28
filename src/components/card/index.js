import { cutCharacter } from "../../utils/helper/cutCharacter";
import forkIcon from "../../assets/img/forks.png";
import starIcon from "../../assets/img/star.png";

import "./styles.scss";

const Card = ({ item }) => {
  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <div className="card" onClick={() => handleClick(item?.homepage)}>
      <div className="header-card">
        <div className="avatar-picture">
          <img src={item?.avatar_url || item?.owner.avatar_url} alt="avatar" />
        </div>
        <div className="display-name">
          {cutCharacter(item?.login || item?.name)}
        </div>
      </div>
      {item?.stargazers_count ? (
        <div className="detail-wrapper">
          <div className="detail-card">
            <div className="icon">
              <img src={starIcon} alt="star" />
            </div>
            <div className="display-text">{item?.stargazers_count}</div>
          </div>
          <div className="detail-card">
            <div className="icon">
              <img src={forkIcon} alt="fork" />
            </div>
            <div className="display-text">{item?.forks}</div>
          </div>
        </div>
      ) : (
        <div className="detail-wrapper">
          <div className="detail-card">
            <div className="display-text">Score:</div>
            <div className="display-text">{item?.score}</div>
          </div>
          <div className="detail-card">
            <div className="display-text">Type:</div>
            <div className="display-text">{item?.type}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
