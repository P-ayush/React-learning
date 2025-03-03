const React = require('react');
const ReactDOM = require('react-dom/client');

//React element => object => html element(render)
const element = React.createElement('h1', {id:"head"}, 'Hello World');

//React component
const Component = () => {
    return ( <div>
        {element}
        <h1 id="heading">Hello World using JSX</h1>
        </div>)
} 
const restaurantJson =` [
    {
      "info": {
        "id": "651212",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/ba3c93cd-2af9-488a-acea-c833fdf5a342_651212.JPG",
        "locality": "ECE House",
        "areaName": "Kasturba Gandhi Marg",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 13,
          "lastMileTravel": 0.5,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "0.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-03 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3cdce51f-317c-4656-a330-c71cf4c2ebc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/mcdonalds-ece-house-kasturba-gandhi-marg-rest651212",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "681857",
        "name": "Louis Burger",
        "cloudinaryImageId": "a3535141ce7f8db939e999c2a7e06a0c",
        "locality": "School Block",
        "areaName": "Shakarpur",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "22485",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.3K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 6.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-03 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3cdce51f-317c-4656-a330-c71cf4c2ebc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/louis-burger-school-block-shakarpur-rest681857",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "8614",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/d9fc150f-ae59-4b1e-8a3d-3103ad615b18_8614.jpg",
        "locality": "Connaught Place",
        "areaName": "Connaught Place",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "41K+",
        "sla": {
          "deliveryTime": 12,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-03 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "8.9K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3cdce51f-317c-4656-a330-c71cf4c2ebc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/burger-king-connaught-place-rest8614",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "626148",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "ezjogwtzx40ko0wlat5l",
        "locality": "Salt Lake",
        "areaName": "Karol Bagh",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "4961",
        "avgRatingString": "4.2",
        "totalRatingsString": "8.8K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-09 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.7",
            "ratingCount": "770"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3cdce51f-317c-4656-a330-c71cf4c2ebc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/la-pinoz-pizza-salt-lake-karol-bagh-rest626148",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "411450",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0f971744-7722-4297-9cba-2969c5f3279c_411450.JPG",
        "locality": "Bhavbhuti Marg",
        "areaName": "Paharganj",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Rolls & Wraps",
          "Fast Food"
        ],
        "avgRating": 4.2,
        "parentId": "547",
        "avgRatingString": "4.2",
        "totalRatingsString": "2.3K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-03 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3cdce51f-317c-4656-a330-c71cf4c2ebc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/kfc-bhavbhuti-marg-paharganj-rest411450",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "435678",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/996b723b-9986-4cf6-ad62-7eb481a6a743_435678.jpg",
        "locality": "Western Extension Area",
        "areaName": "Karol Bagh",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "5.8K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-03 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {

            },
            "textExtendedBadges": {

            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {

            },
            "video": {

            }
          }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-3cdce51f-317c-4656-a330-c71cf4c2ebc7"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/pizza-hut-western-extension-area-karol-bagh-rest435678",
        "type": "WEBLINK"
      }
    }]`
 const restaurantArray = JSON.parse(restaurantJson);
    
    
    
//jsx - html-like syntax or XML-like syntax
// const jsxElement = <h1 id="heading" className= "heads">Hello World using JSX</h1>;

const Header =()=>{
    return (<div className='header'>
        <div className='logo'>
            <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1737664008' alt='logo'/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

    </div>)
}

const Body =()=>{
    return (<div className='body'>
        <div className= 'search'>search</div>
        <div className= 'restro-items'>
           {restaurantArray.map((resData)=> <RestaurantCards key={resData.info.id} resData={resData}/>)}
            
        </div>
    </div>)
}

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

const AppLayout =()=>{
    return (<div className='app'>
        <Header/>
        <Body/>
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
