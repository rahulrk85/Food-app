import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header =()=>{


    const[btn,setbtn]=useState("Login");
    const Onlinestatus = useOnlinestatus();
    const {loggedUser} = useContext(Usercontext);
    const cartItems = useSelector((store)=>store.cart.items);

    

    return <div className="header flex justify-between bg-green-100 shadow-xl">
               <img className="logo w-35  h-20 px-4 my-10" src={LOGO_URL}/>
               <div className="nav-items">
                <ul className="flex flex-wrap my-12">
                  <li className="p-2 m-2 text-lg">Online Status:{Onlinestatus?"👍":"👎"}</li>
                  <li className="p-2 m-2 text-lg hover:font-bold"><Link to="/">Home</Link></li>
                  <li className="p-2 m-2 text-lg hover:font-bold"><Link to="/About">About us</Link></li>
                  <li className="p-2 m-2 text-lg hover:font-bold"><Link to="/Contact">Contact us</Link></li>
                  <li className="p-2 m-2 text-lg hover:font-bold"><Link to="/Grocery">Grocery</Link></li>
                  <li className="p-2 m-2 text-lg font-semibold hover:font-bold"><Link to="/cart">Cart ({cartItems.length}- items)</Link></li>
                  <li className="p-2 m-2 text-lg font-bold">{loggedUser}</li>
                  <button className="p-2 m-2 bg-green-300 rounded-lg"  onClick={()=>{
                    btn==="Login"?setbtn("Logout"):setbtn("Login");
                    }}>{btn}
                  </button>
                </ul>
               </div>
            </div>
};

export default Header;