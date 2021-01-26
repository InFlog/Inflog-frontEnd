export const STORE_USER_DATA = "STORE_USER_DATA";
export const STORE_BRAND_DATA = "STORE_BRAND_DATA";


export function storeUserData(userData) {
  return { type: STORE_USER_DATA, user: userData, loggedIn: false }
}

export function storeBrandData(brandData) {
  return { type: STORE_BRAND_DATA, brand: brandData }
}