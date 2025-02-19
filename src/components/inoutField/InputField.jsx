// InputField component
// containing
// - label with description
// - input field

import "./InputField.css";

function InputField({type="text", pattern, name, title,value, onChange}) {
    return (
        <p className="input-field">
            <label htmlFor={name}>
                {title}
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    pattern={pattern}
                    onChange={onChange}
                />
            </label>
        </p>
    );
}

export default InputField;