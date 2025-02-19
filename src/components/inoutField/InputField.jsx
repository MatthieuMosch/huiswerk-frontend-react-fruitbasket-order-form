// InputField component
// containing
// - label with description
// - input field
// tried to set the zipcode pattern in here when the type==="zip" but I could not get the regex through via the props

import "./InputField.css";

function InputField({type="text", pattern, name, title, value, cols, rows, onChange}) {
    if (type === "textarea") {
        return (
            <label className="textarea-field">
                <p>
                    {title}
                </p>
                <textarea
                    name={name}
                    cols={cols}
                    rows={rows}
                    value={value}
                    onChange={onChange}
                />
            </label>
        );
    } else {
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

}

export default InputField;