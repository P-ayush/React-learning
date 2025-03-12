import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        const data = await fetch(MENU_API+resId);
        const response = await data.json();
        setResInfo(response)
        console.log(response)
        // response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    }
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