import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = ()=>{
    const error  = useRouteError();
    return <>
    <h1>Oops! An Error Occured</h1>
    {error && <p>{error.data}</p>}
    <NavLink to="/">Go Home</NavLink>
    </>
}