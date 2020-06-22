const USER_STORAGE_KEY = "user";
const INITIAL_STATE = JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) || { user: null, loginError: null, signupError: null };

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.jwt);
            return { user: action.payload.user, loginError: null, signupError: null };
        case "LOGOUT":
            localStorage.removeItem("token");
            localStorage.removeItem(USER_STORAGE_KEY);
            return { user: null, loginError: action.error, signupError: null };
        case "LOGIN_ERROR":
            return { user: null, loginError: action.error, signupError: null};
        case "SIGNUP_ERROR":
            return { user: null, loginError: null, signupError: action.error};
        case "SIGNUP":
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.jwt);
            return { user: action.payload.user, loginError: action.error, signupError: null };
        case "DROP_ICON":
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
            return { user: action.payload.user, loginError: null, signupError: null };
        case 'REMOVE_ICON':
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
            return { user: action.payload.user, loginError: null, signupError: null };
        default:
            return state;
    };
}