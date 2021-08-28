const Input = ({
    placeholder = '',
    value  = '',
    type = 'text',
    onChange = () => {},

}) => {

    const onChangeHandle = (e) => {
        onChange(e.target.value);
    }

    return (
        <input placeholder={placeholder}
               type={type}
               value={value}
               onChange={onChangeHandle} />
    )
}

export default Input;