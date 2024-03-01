import four from "../img/4.png";
import one from "../img/1.png";

export default function Testimonial() {
  return (
    <>
      <div className="section" id="testimonial">
        <div className="container flex">
          <div className="text">
            <h2 className="primary">
              Thats What Our Super <br />
              Client Says
            </h2>

            <br />
            <br />
            <br />

            <div className="client">
              <img src={four} alt="" />
              <h2 className="secondary">Exelent Training</h2>
              <p className="tertiary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quas voluptatem ad, repudiandae voluptates odio
                deleniti reiciendis in veniam quidem expedita maxime error
                fugit. Pariatur quasi sunt aut id. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Neque, officiis.
              </p>
            </div>
          </div>
          <div className="visual">
            <img src={one} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
