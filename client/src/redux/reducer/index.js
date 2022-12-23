import {
  SOLICITAR_RAZAS,
  SOLICITAR_DETALLES,
  CREAR_RAZA,
  SOLICITAR_TEMPERAMENTOS,
  VACIAR_ESTADO,
  ORDENAR_ZA,
  ORDENAR_AZ,
  ORDENAR_PESO_ASCENDENTE,
  ORDENAR_PESO_DESCENDENTE,
} from "../actions/index.js";

const inicialState = {
  razas: [],
  detalleRaza: {},
  temperamentos: [],
};

function rootReducer(state = inicialState, action) {
  //esta funcion reducer se le conoce como funcion pura
  switch (action.type) {
    case VACIAR_ESTADO:
      return {
        ...state,
        detalleRaza: action.payload,
      };
    case SOLICITAR_RAZAS:
      return {
        ...state,
        razas: action.payload,
      };
    case SOLICITAR_TEMPERAMENTOS:
      return {
        ...state,
        temperamentos: action.payload,
      };
    case SOLICITAR_DETALLES:
      return {
        ...state,
        detalleRaza: action.payload,
      };
    case ORDENAR_ZA:
      const orden_za = action.payload.sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      console.log(orden_za);
      return {
        ...state,
        razas: [...orden_za],
      };
    case ORDENAR_AZ:
      const orden_az = action.payload.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        razas: [...orden_az],
      };
    case ORDENAR_PESO_ASCENDENTE:
      const orden_PesoAscendente = action.payload.sort(function (a, b) {
        return a.weight - b.weight;
      });
      return {
        ...state,
        razas: [...orden_PesoAscendente],
      };
    case ORDENAR_PESO_DESCENDENTE:
      const orden_PesoDescendente = action.payload.sort(function (a, b) {
        return b.weight - a.weight;
      });
      return {
        ...state,
        razas: [...orden_PesoDescendente],
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
