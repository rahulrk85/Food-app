import Restrocard,{withPromoted} from "./Restrocard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";



const Body=()=>{

    const [listofRes,setlistofRes] = useState([]);
    const [filteredlistofRes,setfilteredlistofRes] = useState([]);
    const [searchText,setsearchText] = useState("");
    const onlineStatus = useOnlinestatus();
    const ReswithPromo= withPromoted(Restrocard);
    console.log(filteredlistofRes);


    useEffect(()=>{
        fetchData();
    },[]);

    
    const fetchData=async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9369685&lng=77.56086719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setlistofRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredlistofRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };
    

    if(listofRes.length===0){
        return <Shimmer/>
    }
    
    if(onlineStatus===false) return (<h1>You Are offline Check Your Internet connection and come back</h1>);

    
    return <div>
        <div className="m-4 py-4">
            <input type="text" className="border border-black search p-2 rounded-sm" value={searchText} onChange={(e)=>setsearchText(e.target.value)} />
            <button className="search  p-2 mx-2 bg-green-200 rounded-lg" onClick={()=>{
                const filtered=listofRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredlistofRes(filtered);
            }}>Search</button>

        <button className="search  p-2 mx-2 bg-green-200 rounded-lg"
         onClick={()=>{
        const filterList=listofRes.filter((res)=>res.info.avgRating>4.3);           
        setfilteredlistofRes(filterList);
    
    }}>Top Rated restaurants</button></div>


    <div className="flex flex-wrap ml-20">
    {filteredlistofRes.map((res)=>(
    <Link className="res-cards-link" key={res.info.id} to={"/Resmenu/"+res.info.id}>
       {/* <Restrocard resData={res}/>  */}
       {
            res.info.availability.opened?<ReswithPromo resData={res}/>:<Restrocard resData={res}/>
        }
    </Link>
        ))}
    
    </div>
    
    </div>
};

export default Body;