import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPage, changePage}) => {
    const pagesArr = getPagesArray(totalPage);

    return (
        <>
            {
                pagesArr.length !== 0 && (
                    pagesArr.map((button, index) => (
                        <button key={index} onClick={() => changePage(button)}>
                            {button}
                        </button>
                    ))
                )
            }
        </>
    )
}

export default Pagination;