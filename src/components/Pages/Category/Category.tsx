import {Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SHOP_DATA from "../../../mocks/shop_data";
import CollectionItem from "../../Molecules/CollectionItem/CollectionItem";
import "../Category/Category.styles.scss";


interface ICollectionItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }

const Category = () => {
    const [collections] = useState(SHOP_DATA);
    const {categoryName} = useParams();
    let items: Array<ICollectionItem> = [];
    const [collectionItems,setCollectionItems] = useState(items)
    let title = "";

    useEffect(() => {
        for(let i = 0; i < collections.length; i++){
            if(collections[i].routeName === categoryName){
                items = collections[i].items;
                title = collections[i].title;
                setCollectionItems(collections[i].items);
                break;
            }
        }
    },[items])

    return (
        <div className="collectionItems">
              {  
                  collectionItems.map((item, index:number) => {
           return <Fragment key={`collection_item_${index}`}>
                    <CollectionItem {...item} />
                  </Fragment>
                  })
              }
        </div>
      );
}

export default Category