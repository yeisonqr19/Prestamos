import React, { Fragment, useState } from "react";
import { calcularTotal } from "../helpers";

const Form = (props) => {
  const {
    cantidad,
    setCantidad,
    plazo,
    setPlazo,
    setTotal,
    setCargando,
  } = props;

  //defino un state local:
  const [error, setError] = useState(false);

  //funcion para los eventos del formulario:
  const leerCantidad = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  const leerPlazo = (e) => {
    setPlazo(parseInt(e.target.value));
  };

  //cuando el usuario haga submit:
  const calcularPrestamo = (e) => {
    e.preventDefault();

    //1) valido:
    if (cantidad === 0 || plazo === "") {
      setError(true);
      return;
    }
    //eliminar el error cuando ya el usuario corrija el error:
    setError(false);

    //2) realizo la cotizacion:
    //utilizo un setTimeOut para que la cotizacion se ejecute a los pocos segundos:

    //habilito el spinner:
    setCargando(true);

    setTimeout(() => {
      const cotizacion = calcularTotal(cantidad, plazo);
      setTotal(cotizacion);
      //deshabilito el spinner:
      setCargando(false);
    }, 3000);
  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={leerCantidad}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select className="u-full-width" onChange={leerPlazo}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>

          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error ? (
        <p className="error">Todos los Campos son obligatorios</p>
      ) : null}
    </Fragment>
  );
};

export default Form;
