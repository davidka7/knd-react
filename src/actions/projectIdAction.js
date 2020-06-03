const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

export const ProjectId_save= (id, dispatch) => {

    
  
            dispatch(
                {
                    type: "PROJECTID",
                    id: id
                }
            );
      
  
}