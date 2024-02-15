import React, { Suspense, lazy } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import Resmenu from "./components/Resmenu";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";
import Cart from "./components/Cart";

const Applayout=()=>{
    return(
        <Provider store={Appstore}>
        <div>
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    );
};

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:<Suspense fallback= {<Shimmer/>}><About/></Suspense>
        
            },
            {
                path:"/Contact",
                element:<Contact/>
        
            },
            {
                path:"/Resmenu/:resId",
                element:<Resmenu/>
        
            },
            {
                path:"/Grocery",
                element:<Suspense fallback= {<Shimmer/>} ><Grocery/></Suspense>
        
            },
            {
                path:"/Cart",
                element:<Cart/>
        
            },
        ],
        errorElement: <Error/>

    },
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider   router={appRouter}/>);