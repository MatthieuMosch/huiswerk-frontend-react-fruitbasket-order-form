// InputField component
// containing
// - label with description
// - input field

import "./InputField.css";

function InputField({type="text", id, title,value, onChange}) {
    return (
        <p className="input-field">
            <label htmlFor={id}>
                {title}
                <input
                    type={type}
                    name={id}
                    id={id}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </p>
    );
}

export default InputField;