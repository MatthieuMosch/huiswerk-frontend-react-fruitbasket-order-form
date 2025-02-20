// RadioField component
// containing
// - radio fields with values as "key,description,key,description"
// I wanted to pass the values as an array of objects but I could not make that work via the props

function RadioField({name, options, checked, onChange}) {
    return (
        <p>
            {options.split(",").map((option) => {
                const opt = option.split(":");
                return (
                <label key={opt[0]}>
                    <input type="radio" name={name} value={opt[0]} checked={checked === opt[0]} onChange={onChange}/>
                    {opt[1]}
                </label>);
            })}
        </p>
    );
}

export default RadioField;