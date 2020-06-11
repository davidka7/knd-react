const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;


export const iconSaveAction = (icon, dispatch) => {
    
    dispatch(
        {
            type: "ICON_ID",
            icon: icon
        }
    );
      
  
}