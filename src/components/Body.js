import RestaurantCards from "./Restaurant-cards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    if (!listOfRestaurants || listOfRestaurants.length === 0) return <Shimmer />;

    return (<div className='body'>
        <div className='filter'>
            <input type='text' className ='search-box' value={searchText} onChange={(event)=>{
                setSearchText(event.target.value);
            }}/>
            <button className='filter-btn' onClick={() => {
                const filteredList = listOfRestaurants.filter((resData) => resData.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurants(filteredList);
            }}> Search</button>
            <button className='filter-btn' onClick={() => {
                const topRatedRestaurant = listOfRestaurants.filter((resData) => resData.info.avgRating > 4.2)
                setFilteredRestaurants(topRatedRestaurant);
            }}>Top rated restaurants</button>
        </div>
        <div className='restro-items'>
            {filteredRestaurants.map((resData) => <Link key={resData.info.id} to={'/restaurant/'+resData.info.id}><RestaurantCards resData={resData} /></Link>)}

        </div>
    </div>)
}

export default Body;