export const SOLICITAR_RAZAS = "SOLICITAR_RAZAS";
export const SOLICITAR_DETALLES = "SOLICITAR_DETALLES";
export const CREAR_RAZA = "CREAR_RAZA";
export const SOLICITAR_TEMPERAMENTOS = "SOLICITAR_TEMPERAMENTOS";
export const VACIAR_ESTADO = "VACIAR_ESTADO";
export const ORDENAR_ZA = "ORDENAR_ZA";
export const ORDENAR_AZ = "ORDENAR_AZ";
export const ORDENAR_PESO_ASCENDENTE = "ORDENAR_PESO_ASCENDENTE";
export const ORDENAR_PESO_DESCENDENTE = "ORDENAR_PESO_DESCENDENTE";

export const solicitarRazas = () => {
  return async function (dispatch) {
    await fetch("http://localhost:3001/dogs")
      .then((respuesta) => respuesta.json())
      .then((respuesta1) =>
        dispatch({
          type: SOLICITAR_RAZAS,
          payload: respuesta1,
        })
      )
      .catch((err) => console.log("error al solicitar razas de la api ", err));
  };
};
export const buscarPorRaza = (data) => {
  return async function (dispatch) {
    await fetch(`http://localhost:3001/doogs?name=${data}`)
      .then((respuesta) => respuesta.json())
      .then((respuesta1) =>
        dispatch({
          type: SOLICITAR_RAZAS,
          payload: respuesta1,
        })
      )
      .catch((err) => console.log("error al solicitar razas de la api ", err));
  };
};
export const buscarPorTemperamento = (temp) => {
  return async function (dispatch) {
    await fetch(`http://localhost:3001/filtrarTemps?name=${temp}`)
      .then((respuesta) => respuesta.json())
      .then((respuesta1) =>
        dispatch({
          type: SOLICITAR_RAZAS,
          payload: respuesta1,
        })
      )
      .catch((err) =>
        console.log("error al solicitar temperamentos de la api ", err)
      );
  };
};

export const solicitarTemperamentos = () => {
  return async function (dispatch) {
    fetch("http://localhost:3001/temperaments")
      .then((respuesta) => respuesta.json())
      .then((respuesta1) => {
        dispatch({
          type: SOLICITAR_TEMPERAMENTOS,
          payload: respuesta1,
        });
      })
      .catch((err) => console.log("error al solicitar temperamentos"));
  };
};
export const solicitarDetalles = (id) => {
  return async function (dispatch) {
    await fetch(`http://localhost:3001/dogs/${id}`)
      .then((respuesta) => respuesta.json())
      .then((respuesta1) => {
        dispatch({
          type: SOLICITAR_DETALLES,
          payload: respuesta1,
        });
      })
      .catch((err) => console.log("error al solicitar temperamentos"));
  };
};
