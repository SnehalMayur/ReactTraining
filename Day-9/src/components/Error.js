import { useRouteError } from "react-router-dom";

const Error = () => {
    const errorRoute = useRouteError();
    console.log("errorRoute", errorRoute);
    return(
        <div>
            <h1 style={{color:"red"}}>Oops! an error occured.</h1>
        </div>
    );
};
export default Error;