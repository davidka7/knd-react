import { combineReducers } from 'redux';
import { userReducer } from "./userReducer";
import { projectReducer } from './projectReducer';
import { boardReducer } from './boardReducer';
import { iconReducer } from './iconReducer';

export default combineReducers({
    userContext: userReducer,
    projects: projectReducer,
    boards: boardReducer,
    icons: iconReducer,
});