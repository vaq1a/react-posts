export const getPageCount = (allCount, limitCount) => {
    return Math.ceil(allCount / limitCount);
}

export const getPagesArray = (commonCount) => {
    const arr = [];

    for(let i = 0; i < commonCount; i++) {
        arr.push(i + 1);
    }

    return arr;
}