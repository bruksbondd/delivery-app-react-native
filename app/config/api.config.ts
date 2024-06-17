
// process.env.EXPO_PUBLIC_API_URL
// http://192.168.31.80:8080
export const SERVER_URL = 'https://delivery-app-blush-eta.vercel.app'
export const API_URL = `${SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getProductsUrl = (string: string) => `/products${string}`
export const getCategoriesUrl = (string: string) => `/categories${string}`
export const getOrdersUrl = (string: string) => `/orders${string}`
