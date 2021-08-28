const classNameToString = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

export default classNameToString;