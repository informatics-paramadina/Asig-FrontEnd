import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';

const MemberRoute = ({component: Component, location, match, ...rest}) => {
    const ok = localStorage.getItem("ASIG:token");
    localStorage.removeItem("ASIG:redirect");
    
    return (
        <Route 
            {...rest}
            render={(props) => ok ? <Component {...props} /> : <Redirect to={`private?path=${location.pathname}`} />}
        />
    )
}

export default withRouter(MemberRoute)

