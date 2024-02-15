import { useEffect, useState } from "react";

const useOnlinestatus=()=>{

    const[Onlinestatus,setOnlineStatus] = useState(true);


    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);

        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);

        })
    },[]);



    return Onlinestatus;
}


export default useOnlinestatus;