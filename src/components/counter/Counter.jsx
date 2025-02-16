// Counter component
// containing
// - the counter
// - a counterButton to substract the stepsize from the counter (should not go below 0, do nothhing if the counter is 0)
// - a counterButton to add 1the stepsize to the counter
// default value of step is 1

import CounterButton from "../counterButton/CounterButton.jsx";

function Counter({counter, step=1, handleClick}) {
    return (
        <>
            <CounterButton counter={counter} adjust={-step} handleClick={handleClick}>-</CounterButton>
            {counter}
            <CounterButton counter={counter} adjust={step} handleClick={handleClick}>+</CounterButton>
        </>
    );
}

export default Counter;