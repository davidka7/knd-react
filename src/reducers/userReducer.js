const USER_STORAGE_KEY = "user";
const INITIAL_STATE = JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) || { user: null, error: null };

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.jwt);
            return { user: action.payload.user, error: null };
        case "LOGOUT":
            localStorage.removeItem("token");
            localStorage.removeItem(USER_STORAGE_KEY);
            return { user: null, error: null };
        case "LOGIN_ERROR":
            return { user: null, error: action.error}
        case "SIGNUP":
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.jwt);
            return { user: action.payload.user, error: null };
        case "DROP_ICON":
            const result = {...state, user: { ...state.user, icon_img: [...state.user.icon_img]} };
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(result));
            return result;
        default:
            return state;
    };
}