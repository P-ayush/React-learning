import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestrauntMenu(resId)
   
    if (resInfo === null) return (<Shimmer />)

const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
const {name,costForTwoMessage,cuisines} =resInfo?.data?.cards[2]?.card?.card?.info


    return (
        <div>
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <ul>
               {itemCards.map((item)=>{
                    return <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                })}
                
            </ul>
        </div>
    );
}

export default RestaurantMenu;