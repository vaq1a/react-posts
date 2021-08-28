const Option = ({
    value,
    disabled = false,
    children,

}) => {
    return (
        <option disabled={disabled}
                value={value}>
            {
                children
            }
        </option>
    )
}

export default Option;