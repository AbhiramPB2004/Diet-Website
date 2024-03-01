import two from "../img/2.png"

export default function Explore() {
  return (
    <>
      <div className="section" id="explore">
        <div className="container flex">
          <div className="visual">
            <img src={two} alt="" />
          </div>
          <div className="text">
            <h2 className="primary mb">
              Explore Our Fitness <br />
              Studio
            </h2>
            <p className="tertiary mb">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis esse vitae ratione quos maiores eveniet temporibus
              illum! Eligendi amet officia unde sint totam ut optio. Molestiae,
              illo quia?
            </p>

            <a href="#" className="btn mt">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
