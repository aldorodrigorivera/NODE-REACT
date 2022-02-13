import {
    ON_ERROR, ON_SUCCESS, ON_CALCULATE
} from '../types/mian';
import * as axios from 'axios';

export function calculate(num){
    return async (dispatch) => {
        dispatch(onCalculate());
        try {
            const url =`http://localhost:5050/api/fibonacci/${num}`
            const req = await axios.get(url, {
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'GET'
            });
            dispatch(onSuccess(req.result));
        } catch (error) {
            console.error(error);
            dispatch(onError(error));
        }
    }
}

const onCalculate = () => ({
    type: ON_CALCULATE,
})
const onSuccess = result => ({
    type: ON_SUCCESS,
    payload: result
})
const onError = error => ({
    type: ON_ERROR,
    payload: error
})