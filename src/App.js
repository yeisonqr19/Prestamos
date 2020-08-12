import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { Message } from "./components/Message";
import { Result } from "./components/Result";
import Spinner from "./components/Spinner";

const App = () => {
  //defino los states:
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);

  //esta es la carga condicional de componentes:
  let componente;

  if (cargando) {
    componente = <Spinner />;
  } else if (total === 0) {
    componente = <Message />;
  } else {
    componente = <Result total={total} plazo={plazo} cantidad={cantidad} />;
  }

  return (
    <>
      <Header titulo="cotizador de prestamos" />

      <div className="container">
        <Form
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotal={setTotal}
          setCargando={setCargando}
        />
        <div className="mensajes">{componente}</div>
      </div>
    </>
  );
};
export default App;
