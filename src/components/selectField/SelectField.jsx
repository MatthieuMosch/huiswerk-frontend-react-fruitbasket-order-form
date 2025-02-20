// SelectField component
// containing
// - title
// - select dropdown control with options as "key,description,key,description"
// I wanted to pass the options as an array of objects but I could not make that work via the props

import "./SelectField.css";

function SelectField({name, title, value, options, onChange}) {
    return (
        <label>
            <p>{title}</p>
            <p>
                <select name={name} value={value} onChange={onChange}>
                    {options.split(",").map((option) => {
                        const opt = option.split(":");
                        return <option value={opt[0]} key={opt[0]}>{opt[1]}</option>;
                    })}
                </select>
            </p>
        </label>
    );
}

export default SelectField;