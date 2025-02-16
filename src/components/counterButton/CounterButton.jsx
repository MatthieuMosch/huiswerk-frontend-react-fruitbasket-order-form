// CounterButton component
//

function CounterButton({counter, adjust, handleClick, children}) {
    return (
        <button
            type="button"
            onClick={() => {
                // do nothing if the result would be below 0
                counter >= -adjust && handleClick(counter + adjust)}
            }
        >
            {children}
        </button>
    );
}

export default CounterButton;