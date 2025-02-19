// InputField component
// containing
// - label with description
// - input field
// tried to set the zipcode pattern in here when the type==="zip" but I did not get the regex through via the props

import "./InputField.css";

function InputField({type="text", pattern, name, title,value, onChange}) {
    return (
        <p className="input-field">
            <label>
                {title}
                <input
                    type={type}
                    name={name}
                    value={value}
                    pattern={pattern}
                    onChange={onChange}
                />
            </label>
        </p>
    );
}

export default InputField;