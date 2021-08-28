import Option from "./Option/Option";

const Select = ({
    value,
    defaultValue,
    options,
    onChange,


}) => {

    const setValue = (e) => {
        onChange(e.target.value);
    }

    return (
        <select value={value}
                onChange={setValue}>
            <Option disabled={true}
                    value={""}>
                {defaultValue}
            </Option>
            {
                options.length !== 0 && options.map(({name, value}) => (
                    <Option key={value}
                            value={value}>
                        {name}
                    </Option>
                ))
            }
        </select>
    )
}

export default Select;