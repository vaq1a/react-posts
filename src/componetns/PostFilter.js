import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";

const PostFilter = ({
    filter,
    options,
    setFilter,

}) => {
    return (
        <>
            <Input placeholder={'Search'}
                   value={filter.querySearch}
                   onChange={(e) => setFilter({...filter, querySearch: e})} />
            <Select value={filter.selectedSort}
                    onChange={(e) => setFilter({...filter, selectedSort: e})}
                    defaultValue={'Сортировка'}
                    options={options} />
        </>
    )
}

export default PostFilter;