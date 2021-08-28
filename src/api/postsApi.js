import axios from "axios";

export const postsApi = {
    getAll: ({limit = 5, page = 1}) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,

            }
        }).then(response => response);
    },
    getItem: (id) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => response.data);
    }
}