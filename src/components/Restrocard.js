import { RES_IMG } from "../utils/constants";

const Restrocard=(props)=>{
    const {resData}=props;
    const {name, cuisines, avgRating, sla} = resData.info;


    return <div className="m-2 p-2 w-[300] break-words bg-gray-200 rounded-lg hover:bg-gray-300">
    <img className="rounded-lg" src={RES_IMG +resData.info.cloudinaryImageId}/>
    <h3 className="text-xl my-2 font-semibold">{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{avgRating} ⭐</h4>
    <h4>{sla.deliveryTime} mins</h4>
    </div>
};

export const withPromoted=(Restrocard)=>{
    return (props)=>{
            return(
                <div> 
                <label className="absolute bg-black text-white ml-5 my-2 p-2 rounded-lg">Open</label>
                <Restrocard  {...props}/>
            </div>);
        };
};



export default Restrocard;