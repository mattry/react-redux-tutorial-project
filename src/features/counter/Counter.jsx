import { useDispatch, useSelector } from "react-redux";
import { 
    decrement, 
    increment, 
    incrementByAmount, 
    decrementByAmount, 
    reset 
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [changeAmount, setChangeAmount] = useState(0);
    const changeValue = Number(changeAmount) || 0;

    const resetAll = () => {
        setChangeAmount(0);
        dispatch(reset());
    }

    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col offset-4 pt-3">
                    <div className="h1">{count}</div>
                    <button 
                        onClick={() => dispatch(increment())} 
                        className="btn btn-success">
                            +
                    </button> 
                    <button 
                        className="btn btn-danger"
                        onClick={() => dispatch(decrement())}>
                            -
                    </button>
                
                    <div className="container px-0 mx-0 mt-5">
                        <input
                            type="number"
                            value={changeAmount}
                            onChange={(e) => setChangeAmount(e.target.value)} 
                        /><br/><br/>
                        <button 
                            onClick={() => dispatch(incrementByAmount(changeValue))} 
                            className="btn btn-success">
                                Add Amount
                        </button> 
                        <button 
                            className="btn btn-danger"
                            onClick={() => dispatch(decrementByAmount(changeValue))}>
                                Subtract Amount
                        </button><br/><br/>
                        <button className="btn btn-secondary" onClick={resetAll}>Reset Count</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;