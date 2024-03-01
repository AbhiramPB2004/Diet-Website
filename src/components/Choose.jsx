import three from "../img/3.png"

export default function Choose() {
  return (
    <>
      <div className="section" id="why-us">
        <div className="container flex">
          <div className="text">
            <h2 className="primary mb">Why Choose Us?</h2>
            <h3 className="secondary mb">Consulatation with Expert.</h3>
            <p className="tertiary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              quos maxime tempore?
            </p>

            <h3 className="secondary mb">Consulatation with Expert.</h3>
            <p className="tertiary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              quos maxime tempore?
            </p>
          </div>
          <div className="visual">
            <img src={three} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
