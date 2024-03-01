import one from "../img/1.png";
export default function Header() {
  return (
    <>
      <header className="header" id="home">
        <div className="container flex">
          <div className="text">
            <h1 className="mb">
              Stay
              <span> Fit </span> <br />
              Stay<span> Healthy.!</span>
            </h1>

            <p className="mb">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              sunt sed tempora neque molestiae corrupti nobis harum ullam eos
              nam!
            </p>

            <a href="#" className="btn mt">
              Start Now
            </a>
          </div>

          <div className="visual">
            <img src={one} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}
