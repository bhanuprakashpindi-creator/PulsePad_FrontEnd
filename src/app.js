import React from "react";
import ReactDOM from "react-dom/client";
import DefaultHome from "./Components/DefaultHome.js";
import {createBrowserRouter,Outlet,Route,RouterProvider} from "react-router-dom";
import Login from "./Components/Login.js";
import About from "./Components/About.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import UserHome from "./Components/UserHome.js";
import CreateJurnol from "./Components/CreateJurnol.js";
import GetJurnols from "./Components/GetJurnols.js";
import Signup from "./Components/Signup.js";
import GuestHome from "./Components/GuestHome.js";

const AppLayout=()=>{
    return(
   
       <Outlet/>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {path:"/",element:<DefaultHome/>},
            {path:"/login",element:<Login/>},
            {path:"/user",element:<UserHome/>},
            {path:"/about",element:<About/>},
            {path:"/createJurnol",element:<CreateJurnol/>},
            {path:"/AllJurnols",element:<GetJurnols/>},
            {path:"/signup",element:<Signup/>},
            {path:"/guest",element:<GuestHome/>}

        ]
    }
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
    </Provider>

);