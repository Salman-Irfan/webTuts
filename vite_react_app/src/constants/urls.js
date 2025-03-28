export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API = `/api`;
export const V1 = `/v1`;
export const ADMIN = `/admin`; // Change this once, and all URLs update automatically
export const AUTH = `/auth`;

export const API_V1_PREFIX = `${API}${V1}`;
export const API_URL = `${BASE_URL}${API_V1_PREFIX}`;

export const END_POINTS = {
    ADMIN: {
        GET_DAILY_SALES: `${API_URL}${ADMIN}/daily-sales`,
        ADD_GROCERY_ITEM: `${API_URL}${ADMIN}/add-grocery-item`,
        GET_ALL_GROCERY_ITEMS: `${API_URL}${ADMIN}/all-grocery-items`,
        GET_PRODUCT_BY_ID: (id) => `${API_URL}${ADMIN}/product/${id}`, // Dynamic
        UPDATE_PRODUCT: (id) => `${API_URL}${ADMIN}/update-product/${id}`, // Dynamic
        DELETE_PRODUCT: (id) => `${API_URL}${ADMIN}/delete-product/${id}`, // Dynamic
    },
    AUTH: {
        SIGN_UP: `${API_URL}${AUTH}/signup`,
    },
};
