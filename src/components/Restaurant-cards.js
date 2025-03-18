const RestaurantCards= (props)=>{
    const {resData} = props;
    return (<div className='p-4 m-4 w-[200px] bg-gray-200 rounded-lg hover:shadow-lg'>
        <div className='card'>
            <img className="rounded-lg" src={'https://media-assets.swiggy.com/swiggy/image/upload/'+resData.info.cloudinaryImageId} alt='restro'/>
            <div className='restro-info'>
                <h2 className="font-bold py-4 text-lg">{resData.info.name}</h2>
                <h3>{resData.info.cuisines.join(", ")}</h3>
                <h3>{resData.info.locality}</h3>
               <h3>{resData.info.avgRating} stars</h3>
                <h3>{resData.info.costForTwo}</h3>
            </div>
        </div>
    </div>)
}

export default RestaurantCards;
