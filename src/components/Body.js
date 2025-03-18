import RestaurantCards from "./Restaurant-cards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const response = await data.json();
        setListOfRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <h1> You are offline</h1>

    if (!listOfRestaurants || listOfRestaurants.length === 0) return <Shimmer />;

    return (<div className='body'>
        <div className='flex p-4 m-4 justify-items-center'>
            <input type='text' className='p-4 m-4 border border-solid' value={searchText} onChange={(event) => {
                setSearchText(event.target.value);
            }} />
            <div className="p-4 m-4">
            <button className='px-4 py-2 bg-green-100' onClick={() => {
                const filteredList = listOfRestaurants.filter((resData) => resData.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurants(filteredList);
            }}> Search</button>
             </div>
            <div className="p-4">
            <button className='px-4 py-2 bg-gray-100' onClick={() => {
                const topRatedRestaurant = listOfRestaurants.filter((resData) => resData.info.avgRating > 4.2)
                setFilteredRestaurants(topRatedRestaurant);
            }}>Top rated restaurants</button>
            </div>
           
        </div>
        <div className='flex flex-wrap'>
            {filteredRestaurants.map((resData) => <Link key={resData.info.id} to={'/restaurant/' + resData.info.id}><RestaurantCards resData={resData} /></Link>)}

        </div>
    </div>)
}

export default Body;