const dummyJsonUrl = import.meta.env.VITE_API_DUMMYJSON_URL;
const jsonPlaceholderUrl = import.meta.env.VITE_API_JSONPLACEHOLDER_URL;

export const urls = {
    dummyJson: {
        getUsers: `${dummyJsonUrl}users`,
        getPosts: `${dummyJsonUrl}posts`,
        getComments: `${dummyJsonUrl}comments`,
    },
    jsonPlaceholder: {
        getUsers: `${jsonPlaceholderUrl}users`,
        getPosts: `${jsonPlaceholderUrl}posts`,
    }
}