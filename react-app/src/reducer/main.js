import {
    ON_ERROR,
    ON_SUCCESS,
    ON_CALCULATE,
}from '../types/mian';

const initialState = {
    fibonacciResult:0,
    loading:false,
    error:null
}

export default function mainReducer (state = initialState, action) {
    switch(action.type){
        case ON_CALCULATE:
            return {
                ...state,
                loading:true,
            }
        case ON_SUCCESS:
            return {
                ...state,
                loading:false,
                fibonacciResult:action.payload,
            }
        case ON_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return {
                ...state
            }
    }
}