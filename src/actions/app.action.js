export const STORE_USER_DATA = "STORE_USER_DATA";
export const DISPLAY_OTHER_USER = "DISPLAY_OTHER_USER";
export const PROFILE_IMAGE = "PROFILE_IMAGE";

export function storeUserData(userData) {
    return { type: STORE_USER_DATA, user: userData, loggedIn: false }
}

export function displayOtherUser(otherUserData) {
    return { type: DISPLAY_OTHER_USER, otherUser: otherUserData }
}

export function profileImage(urlData) {
    return { type: PROFILE_IMAGE, url: urlData }
}