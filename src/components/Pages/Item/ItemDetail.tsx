import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SHOP_DATA from "../../../mocks/shop_data";

const ItemDetail = () => {

   const [imageUrl,setImageUrl] = useState("")

   const {itemId} = useParams();
   console.log("on use effect" + itemId)

   useEffect(() => {
     
    for(let i = 0; i < SHOP_DATA.length; i++){
        for(let k = 0; k < SHOP_DATA[i].items.length; k++){
            if(SHOP_DATA[i].items[k].id.toString() === itemId){
                setImageUrl(SHOP_DATA[i].items[k].imageUrl);
            }
        }
    }
   },[])

    return(
        <div>
        <h1>{itemId}</h1>
        <img src={imageUrl}></img>
        </div>
    )
}

export default ItemDetail;