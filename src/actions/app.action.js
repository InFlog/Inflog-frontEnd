export const STORE_USER_DATA = "STORE_USER_DATA";
export const STORE_BRAND_DATA = "STORE_BRAND_DATA";
export const STORE_INFLUENCER_DATA = "STORE_INFLUENCER_DATA";


export function storeUserData(userData) {
  return { type: STORE_USER_DATA, user: userData, loggedIn: false }
}

export function storeBrandData(brandData) {
  return { type: STORE_BRAND_DATA, brand: brandData }
}

export function storeInfluencerData(influencerData) {
  return { type: STORE_INFLUENCER_DATA, influencer: influencerData }
}