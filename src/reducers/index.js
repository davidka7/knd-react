import { combineReducers } from 'redux';
import { userReducer } from "./userReducer";
import { projectReducer } from './projectReducer';
import { boardReducer } from './boardReducer';

export default combineReducers({
    userContext: userReducer,
    projects: projectReducer,
    projectId: boardReducer,
    
});