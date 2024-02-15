
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useFetchResMenu from "../utils/useFetchResMenu";
import Category from "./Category";
import { useState } from "react";

const Resmenu=()=>{

    const[showIndex,setshowIndex] = useState(null);

    const{resId} = useParams();
    const resInfo=useFetchResMenu(resId);


    if(resInfo===null)return <Shimmer/>;

    const {name, cuisines, costForTwoMessage }= resInfo?.cards[0]?.card?.card?.info;
    // const {itemCards}= resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    const filterResmenu = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        // console.log(filterResmenu);


    return(
        <div className="text-center">
            <h1 className="text-4xl m-2 p-2 font-bold">{name}</h1>
            <h3 className="font-bold ">{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            {filterResmenu.map((m,index)=>(
                <Category key={m?.card?.card?.title} items={m?.card?.card} showIndex={index===showIndex?true:false} 
                 setshowIndex={()=>setshowIndex(index)}/>
            ))}
            {/* <Category items={filterResmenu}/> */}
        </div>
    );
};

export default Resmenu;