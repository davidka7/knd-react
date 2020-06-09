const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

export const iconSaveAction = (icon, dispatch) => {
    
            dispatch(
                {
                    type: "ICON_ID",
                    icon: icon
                }
            );
      
  
}