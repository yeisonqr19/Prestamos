export const calcularTotal = (cantidad, plazo) => {
  //los calculos son los siguientes:
  /**Cantidades:
   * 0 - 1000 = 25%
   * 1001 - 5000 = 20%
   * 5001 - 10000 = 15%
   * +10000 = 10%
   */

  let totalCantidad;
  if (cantidad <= 1000) {
    totalCantidad = cantidad * 0.25;
  } else if (cantidad > 1000 && cantidad <= 5000) {
    totalCantidad = cantidad * 0.2;
  } else if (cantidad > 5000 && cantidad <= 10000) {
    totalCantidad = cantidad * 0.15;
  } else if (cantidad > 10000) {
    totalCantidad = cantidad * 0.1;
  }

  //calcular el plazo:
  /**Medidas:
   * 3 = 5%
   * 6 = 10%
   * 12 = 15%
   * 24 = 20%
   */
  let totalPlazo = 0;
  switch (plazo) {
    case 3:
      totalPlazo = cantidad * 0.5;
      break;
    case 6:
      totalPlazo = cantidad * 0.1;
      break;

    case 12:
      totalPlazo = cantidad * 0.15;
      break;

    case 24:
      totalPlazo = cantidad * 0.2;
      break;
    default:
      totalPlazo = 0;
      break;
  }

  return totalPlazo + totalCantidad + cantidad;
};
