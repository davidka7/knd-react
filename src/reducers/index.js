import { combineReducers } from 'redux';
import { userReducer } from "./userReducer";
import { projectReducer } from './projectReducer';
import { boardReducer } from './boardReducer';
import { iconReducer } from './iconReducer';
import { projectIDReducer } from './projectIdReducer';
export default combineReducers({
    userContext: userReducer,
    projects: projectReducer,
    boards: boardReducer,
    icons: iconReducer,
    project_id: projectIDReducer
});