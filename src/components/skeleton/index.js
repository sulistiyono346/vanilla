import "./styles.scss";

const Skeleton = () => {
  return (
    <div className="card-skeleton">
      <div className="container-card-skeleton">
        <div className="card-image-skeleton"></div>
        <div className="display-name-skeleton"></div>
      </div>
      <div className="container-card-skeleton">
        <div className="information-skeleton"></div>
        <div className="information-skeleton"></div>
      </div>
    </div>
  );
};

export default Skeleton;
