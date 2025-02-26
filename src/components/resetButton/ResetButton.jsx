// ResetButton component
// resets all submitted counters to 0
// not implemented, as it does not work yet
// - passing the setSate functions via an array does not work

// intended use in App.jsx:
/*
<ResetButton
    states={[strawberryCount,bananaCount,appleCount,kiwiCount]}
    handleClick={[setAppleCount,setBananaCount,setAppleCount,setKiwiCount]}
>Reset</ResetButton>
*/

import "./ResetButton.css"

function ResetButton({states, handleClicks, children}) {
    return (
        <button
            type="button"
            className="reset-button"
            onClick={ () => {
                for (let i = 0; i < states.length; i++) {
                    handleClicks[i](states[i]=0);
                }
            }}
        >
            {children}
        </button>
    );
}

export default ResetButton;