const RestaurantCards= (props)=>{
    const {resData} = props;
    return (<div className='restaurant-cards'>
        <div className='card'>
            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/'+resData.info.cloudinaryImageId} alt='restro'/>
            <div className='restro-info'>
                <h2>{resData.info.name}</h2>
                <h3>{resData.info.cuisines.join(", ")}</h3>
                <h3>{resData.info.locality}</h3>
               <h3>{resData.info.avgRating} stars</h3>
                <h3>{resData.info.costForTwo}</h3>
            </div>
        </div>
    </div>)
}

export default RestaurantCards;
