import Itemlist from "./Itemlist";

const Category=({items,showIndex,setshowIndex})=>{

    // const[showItems,setshowItems] = useState(false);

    const handleClick=()=>{
        setshowIndex();
    }
    // console.log(items);
    return( <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg  " >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold " >{items.title} ({items.itemCards.length})</span>
                <span className="size-4">⬇️</span>
                </div>
                {showIndex && <Itemlist data={items.itemCards}/>}
           </div>
    ); 
};

export default Category;