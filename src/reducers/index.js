import { combineReducers } from 'redux';
import { userReducer } from "./userReducer";
import { projectReducer } from './projectReducer';
import { boardReducer } from './boardReducer';
import { iconReducer } from './iconReducer';
import { projectIDReducer } from './projectIdReducer';
import { dragReducer } from './dragReducer';
import { user_projectReducer } from './user_projectReducer'
import { userSearchReducer } from './userSearchReducer'

export default combineReducers({
    userContext: userReducer,
    projects: projectReducer,
    boards: boardReducer,
    icons: iconReducer,
    projectInfo: projectIDReducer,
    draggedItem: dragReducer,
    user_project: user_projectReducer,
    user_share: userSearchReducer,
    
    // boards: combineReducers({
    //     cards: cardsReducer,
    // })
});