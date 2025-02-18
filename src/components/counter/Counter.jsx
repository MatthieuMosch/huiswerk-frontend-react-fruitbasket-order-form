// Counter component
// containing
// - the counter
// - a counterButton to substract the stepsize from the counter (should not go below 0, do nothhing if the counter is 0)
// - a counterButton to add the stepsize to the counter (or to substract when stepsize is negative)
// default value of step is 1
// the CounterButton displays a - or a + but this can also be a image or anything else

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