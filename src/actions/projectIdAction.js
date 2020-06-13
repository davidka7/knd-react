const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;

export const ProjectId_save= (id, dispatch) => {
    
    dispatch({
            type: "PROJECTID",
            id: id
        });
      
  
}