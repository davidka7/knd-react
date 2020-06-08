const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;
let token = () => localStorage.getItem("token")

const headers = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token()
    };
};

export const c1 = (  ) => {
   
    return fetch(`${BACKEND_DOMAIN}/projects`, {
        method: "POST",
        headers: headers(),
        // body: JSON.stringify()
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_PROJECT_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_PROJECT",
            payload: res
        }
    });
}

export const c2 = (  ) => {
   
    return fetch(`${BACKEND_DOMAIN}/projects`, {
        method: "POST",
        headers: headers(),
        // body: JSON.stringify()
    }).then(res => res.json())
    .then(res => {
        if (res.error) {
            return {
                type: "CREATE_PROJECT_ERROR",
                error: res.error
            };
        }
        return {
            type: "CREATE_PROJECT",
            payload: res
        }
    });
}