import { combineReducers } from 'redux';
import { userReducer } from "./userReducer";
import { projectReducer } from './projectReducer';
import { boardReducer } from './boardReducer';
import { iconReducer } from './iconReducer';
import { projectIDReducer } from './projectIdReducer';
import { dragDropSelectedReducer } from './dragDropSelectedReducer';
import {iconSaveReducer} from './iconSaveReducer';
import {user_projectReducer} from './user_projectReducer'
import Form from 'react-bootstrap/Form';
export default combineReducers({
    userContext: userReducer,
    projects: projectReducer,
    boards: boardReducer,
    icons: iconReducer,
    project_id: projectIDReducer,
    selectedItem: dragDropSelectedReducer,
    savedIcon: iconSaveReducer,
    user_project: user_projectReducer
});