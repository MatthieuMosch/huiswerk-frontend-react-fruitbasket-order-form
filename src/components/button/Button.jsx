// Button component
//

function Button({count, adjust, handleClick, children}) {
    return (
        <button
            type="button"
            onClick={() => {
                // do nothing if the result would be below 0
                (count + adjust) >= 0 && handleClick(count + adjust)}
            }
        >
            {children}
        </button>
    );
}

export default Button;