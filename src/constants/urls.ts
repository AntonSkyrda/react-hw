const baseURL = import.meta.env.VITE_API_DUMMYJSON_URL;

export const urls = {
    getUsers: `${baseURL}users`,
    getPosts: `${baseURL}posts`,
    getCartsByUserId: (userId: number) => `${baseURL}carts/user/${userId}`,
}