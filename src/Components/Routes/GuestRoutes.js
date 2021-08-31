import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const GuestRoute = ({component: Component, location, ...rest}) => {
    const ok = localStorage.getItem("ASIG:token");
    const params = location?.search?.substring(1).split("&");
    const path = params.find((item) => item.indexOf("path") > -1 );
    const redirect = path?.split("=")?.[1];

    if(!ok && redirect){
        localStorage.setItem("ASIG:redirect", redirect)
    }

    return (
        <Route  
            {...rest}
            render={(props) => ok ? <Redirect to="/dasboard" /> : <Component {...props} />}
        />
    )
}


export default withRouter(GuestRoute)
