import CounterButton from "../counterButton/CounterButton.jsx";

function Counter({counter, step, handleClick}) {
    return (
        <>
            <CounterButton counter={counter} adjust={-step} handleClick={handleClick}>-</CounterButton>
            {counter}
            <CounterButton counter={counter} adjust={step} handleClick={handleClick}>+</CounterButton>
        </>
    );
}

export default Counter;