// SelectField component
// containing
// - title
// - select dropdown control with options as "key,description"

function SelectField({name, title, value, options, onChange}) {
    return (
        <label>
            <p>{title}</p>
            <p>
                <select name={name} value={value} onChange={onChange}>
                    {options.split(",").map((options) => {
                        const opt = options.split(":");
                        return <option value={opt[0]} key={opt[0]}>{opt[1]}</option>;
                    })}
                </select>
            </p>
        </label>
    );
}

export default SelectField;