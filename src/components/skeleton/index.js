import React from "react";
import "./styles.scss";

const Skeleton = () => {
  return (
    <div className="card-skeleton" data-testid="card-skeleton">
      <div
        className="container-card-skeleton"
        data-testid="container-card-skeleton"
      >
        <div
          className="card-image-skeleton"
          data-testid="card-image-skeleton"
        ></div>
        <div
          className="display-name-skeleton"
          data-testid="display-name-skeleton"
        ></div>
      </div>
      <div
        className="container-card-skeleton"
        data-testid="container-card-skeleton"
      >
        <div
          className="information-skeleton"
          data-testid="information-skeleton"
        ></div>
        <div
          className="information-skeleton"
          data-testid="information-skeleton"
        ></div>
      </div>
    </div>
  );
};

export default Skeleton;
