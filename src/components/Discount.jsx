import five from "../img/5.png"
export default function Discount() {
  return (
    <>
      <div className="section" id="discount">
        <div className="container flex">
          <div className="visual">
            <img src={five} alt="" />
          </div>
          <div className="text">
            <h2 className="primary mb">
              Fitness ClassNamees This Summer, Pay Now And Get 45% Discount
            </h2>

            <p className="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
              minus praesentium est et veniam voluptate alias excepturi minima
              placeat amet nostrum, eligendi, quod cum ducimus nesciunt ipsa
              eum, explicabo eaque obcaecati.
            </p>

            <a href="#" className="btn bt">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
