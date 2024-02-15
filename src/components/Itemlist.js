import { useDispatch } from "react-redux";
import { RES_IMG } from "../utils/constants";
import { addItem } from "../utils/CartSlice";

const Itemlist=(items)=>{

    const dispatch = useDispatch();

    const handleClick= (items)=>{
        dispatch(addItem(items));
    }
    console.log(items);
    return <div>
        {items.data.map((items)=>(
            <div key={items.card.info.id} className=" flex justify-between pt-3 border-b-4">
                <div className="text-left m-2 px-2 py-1 font-semibold">
                    <span>{items.card.info.name}</span>
                    <span> - ₹{items.card.info?items.card.info.price/100 : items.card.info.defaultprice/100  }</span>
                

                <p className="text-xs m-2 pb-3 px-2">
                {items.card.info.description}
                </p>
                </div>
                <div className=" mr-6 ">
                    <img className="w-20 h-35 rounded-lg pb-2" src={RES_IMG+items.card.info.imageId}/>
                    <button className="font-bold bg-green-200 p-1 mb-2 rounded-md hover:bg-green-300" onClick={()=>handleClick(items)}>ADD</button>
                </div>
            </div>
        ))}
    </div>
};

export default Itemlist;