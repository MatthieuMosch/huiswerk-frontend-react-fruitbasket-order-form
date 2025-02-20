// CheckField component
// containing
// - checkbox
// - title

function CheckField({name, title, checked, onChange}) {
    return (
        <p>
            <label>
                <input type="checkbox" name={name} checked={checked} onChange={onChange}/>
                {title}
            </label>
        </p>
    );
}

export default CheckField;