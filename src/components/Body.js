import RestaurantCards from "./Restaurant-cards";
import restaurantArray from '../utils/mockData';
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantArray);

    return (<div className='body'>
        <div className='filter'>
            <button className='filter-btn' onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter((resData) => resData.info.avgRating > 4.2)
                setListOfRestaurants(filteredRestaurants);
            }}>Top rated restaurants</button>
        </div>
        <div className='restro-items'>
            {listOfRestaurants.map((resData) => <RestaurantCards key={resData.info.id} resData={resData} />)}

        </div>
    </div>)
}

export default Body;