
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Container, Result, Button, Input} from '../styles/FibonacciStyle';
import {valdiateNumber} from '../validators/fibonacci';
import {calculate} from '../actions/fibonacci';

export default function Fibonacci() {
    const { fibonacciResult, loading } = useSelector(state => state.mainReducer)
    const dispatch = useDispatch();
    const [num, changeNum] = useState(0);
    const onChange = e => changeNum(e.target.value);
    const onSubmit = () => {
        const valid = valdiateNumber(num);
        if(!valid){
            alert('Please enter a positive value');
            return;
        }
        dispatch(calculate(num));
        changeNum(0);
    }
    return <div>
        <p>Calculate Fibonacci!</p>
        <Container>
            <Input 
                placeholder="0" 
                type="number" 
                name="fibonacci"
                id="fibonacci"
                value={num}
                onChange={onChange}
            />
            <Button 
                onClick={() => onSubmit()}
                disabled={loading}
            >
                Calculate
            </Button>
            <p>Fibonacci is Result: 
                <Result>{fibonacciResult}</Result>
            </p>
        </Container>
    </div>
}