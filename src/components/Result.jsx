import React from "react";

export const Result = ({ total, plazo, cantidad }) => (
  <div className="u-full-width resultado">
    <h2>Resumen</h2>
    <p>La cantidad Solicitada es: $ {cantidad}</p>
    <p>A pagar en: {plazo} Meses </p>
    <p>Su pago Mensual es de: {(total / plazo).toFixed(2)} </p>
    <p>Total A pagar: $ {total.toFixed(2)}</p>
  </div>
);
