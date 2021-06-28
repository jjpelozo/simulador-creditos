import Monto from "./Monto";
import Plazo from "./Plazo";
import DetalleCuotas from "./DetalleCuotas";
import { useState } from "react";

function Home() {
  const [monto, setMonto] = useState();
  const [plazo, setPlazo] = useState(1);
  const [pagos, setPagos] = useState(false);

  const cuota = monto / (plazo ? plazo : 1);

  const pagosMensuales = (a, b) => {
    let cuota;
    let mes = [];
    for (let index = 1; index <= a; index++) {
      cuota = { mes: index, valor: b };
      mes.push(cuota);
    }
    return mes;
  };

  const handleCredit = () => {
    alert("Crédito aprobado");
  };
  const handlePayments = () => {
    return Promise.resolve(pagosMensuales()).then(() => {
      setPagos(!pagos);
    });
  };

  return (
    <div className=" container home text-center">
      <div className=" container pt-2 app ">
        <h1 className="fw-bold">Simulá tú crédito </h1>
        <Monto monto={monto} setMonto={setMonto} />
        <Plazo plazo={plazo} setPlazo={setPlazo} />
      </div>
      <div className=" container pt-3 info">
        <h2>Cuota fija por mes</h2>
        <h3 className="fw-bold"> $ {cuota.toFixed(2)}</h3>
        <div className="pb-4">
          <button className="button__credito" onClick={handleCredit}>
            OBTENÉ TÚ CRÉDITO
          </button>

          <button className="button__cuotas" onClick={handlePayments}>
            VER DETALLE DE CUOTAS
          </button>
          {pagos && (
            <DetalleCuotas
              handlePayments={handlePayments}
              cuota={cuota}
              plazo={plazo}
              pagosMensuales={pagosMensuales}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
