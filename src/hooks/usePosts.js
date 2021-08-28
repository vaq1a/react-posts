import {useMemo} from 'react';

export const useSortedPosts = (posts, selectedSort) => {
    return useMemo(() => {
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }

        return posts;
    }, [posts, selectedSort]);
};

export const useSortedAndSearchedPosts = (posts, selectedSort, querySearch) => {
    const postsItems = useSortedPosts(posts, selectedSort);

    return useMemo(() => {
        return postsItems.filter(el => el.title.toLowerCase().includes(querySearch.toLowerCase()));
    }, [postsItems, querySearch]);
};