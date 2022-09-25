import { types } from "../types/types";

const initialState = {
    
    distrito_id: 0,
    distrito: '',
    oficina_id: 0,
    oficina: '',
    servicio_id: 0,
    servicio: '',
    expedientes: [],
    fecha_id: 0,
    fecha: '',
    hora_id: 0,
    hora: '',
    nota_id:0,
    nota:'',
    cit_cita_id:0,
    codigo:'',
    limiteCitas:0
}


export const citasReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.SET_PASO_0:
            return {
                ...state,
                ...action.payload
            }
        case types.SET_PASO_1:
            return {
                ...state,
                ...action.payload
            }   
        case types.SET_PASO_2:
            return{
                ...state,
                ...action.payload
            }    
        case types.SET_PASO_3:
            return {
                ...state,
                ...action.payload
            }
        case types.CLEAN_INPUTS:
            return initialState
        default:
            return state;
    }
    
}


    
    