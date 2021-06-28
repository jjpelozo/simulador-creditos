import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../App.css";
import { useEffect } from "react";

function Monto({ monto, setMonto }) {
  const min = 3000;
  const max = 50000;

  useEffect(() => {
    setMonto(min);
  }, []);

  const montoSlider = (value) => {
    setMonto(value);
  };
  const montoInput = (e) => {
    e.preventDefault();
    if (e.target.value <= max) {
      setMonto(e.target.value);
    } else {
      alert(`Su máximo permitido es $ ${max}`);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <div className="app container text-white text-center mt-5">
      <div>
        <h2>MONTO TOTAL</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form">
          $
          <input
            onChange={montoInput}
            className="input"
            type="number"
            value={monto}
            min={min}
            max={max}
            required
          />
        </form>
      </div>
      <div className="d-flex  mt-5 mb-3 slider">
        <Slider min={min} max={max} onChange={montoSlider} value={monto} />
      </div>
      <div className="d-flex justify-content-between  ">
        <div>
          <h3>$ {min}</h3>
        </div>
        <div>
          <h3>$ {max}</h3>
        </div>
      </div>
    </div>
  );
}

export default Monto;
