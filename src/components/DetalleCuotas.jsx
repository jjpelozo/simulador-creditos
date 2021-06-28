

function detalleCuotas({ handlePayments, cuota, plazo, pagosMensuales }) {
  const detallePrestamo = pagosMensuales(plazo, cuota);

  return (
    <div className="container pt-5 payments bg-primary">
      <h2 className="fw-bold">Detalle de Cuotas</h2>
      {detallePrestamo.map((e,i) => (
        <div key= {i}>
          <div className="detallePagos">
            <div>CUOTA: {e.mes}</div>
            <div>$ {e.valor.toFixed(2)}</div>
          </div>
        </div>
      ))}

      <button className="button__cuotas" onClick={handlePayments}>
        CERRAR
      </button>
    </div>
  );
}

export default detalleCuotas;
