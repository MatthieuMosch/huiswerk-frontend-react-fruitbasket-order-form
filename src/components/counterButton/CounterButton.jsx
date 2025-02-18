// CounterButton component
// a button to change the value of counter
// the value of the counter is not allowed to ge below 0

import './CounterButton.css'

function CounterButton({counter, adjust, handleClick, children}) {
    return (
        <button
            type="button"
            className="counter-button"
            onClick={() => {
                counter >= -adjust && handleClick(counter + adjust)
            }}
        >
            {children}
        </button>
    );
}

export default CounterButton;