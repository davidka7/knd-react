const PROJECT_INITIAL_STATE = []

export const user_projectReducer = (state = PROJECT_INITIAL_STATE, action) => {

    switch (action.type) {
        case "GET_USER_PROJECTS":
            console.log("LOOK HERE",action.payload)
            return action.payload.map(item => item);
            case "DELETE_USER_PROJECT":
              
        
                // state.filter(p=>p.topic).filter(x=>x.id !== state.filter(p=>p.project_id).filter(x=>x.id == action.id).project_id)
              
            return  state.filter(p=>p.topic).filter(x=>x.id !== action.id);
        
        default:
            return state;
    }
    
}