import React from "react";
import { useRouteError } from "react-router-dom";
const RouterError=()=>{
    const error=useRouteError();
    return(
        <div>
            <h1>Oops...</h1>
            <h3>Something went wrong...</h3>
            <h3>{error.status+" "+error.statusText}</h3>
            <h2>{error.data}</h2>
        </div>
    )
}


export default RouterError;