import { useRouteError } from "react-router-dom";

const Error=()=>{


    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!!</h1>
            <h1>Somthing Went Wrong.!!!!</h1>
            
        </div>
    );
};

export default Error;