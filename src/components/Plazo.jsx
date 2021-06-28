import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../App.css";

function Plazo({ plazo, setPlazo }) {
  const min = 1;
  const max = 24;

  const plazoSlider = (value) => {
    setPlazo(value);
  };
  const plazoInput = (e) => {
    e.preventDefault();
    if (e.target.value <= max) {
      setPlazo(e.target.value);
    } else {
      alert(`Su máximo permitido son ${max} cuotas`);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <div className=" container app  text-center mt-5">
      <div>
        <h2>Plazo</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="input "
            onChange={plazoInput}
            type="number"
            value={plazo}
            min={min}
            max={max}
          />
        </form>
      </div>
      <div className="d-flex  mt-5 mb-3 slider">
        <Slider min={min} max={max} onChange={plazoSlider} value={plazo} />
      </div>
      <div className="d-flex justify-content-between  ">
        <div>
          <h3>{min}</h3>
        </div>
        <div>
          <h3>{max}</h3>
        </div>
      </div>
    </div>
  );
}

export default Plazo;
