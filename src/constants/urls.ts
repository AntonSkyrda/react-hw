export const baseURL = import.meta.env.VITE_API_DUMMYJSON_URL

export const urls = {
    usersUrl: (skip: string) => `${baseURL}users?skip=${skip}`,
}