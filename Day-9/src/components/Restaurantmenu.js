import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SWIGGY_RES_MENU } from "../utils/Constants";

const RestaurantMenu = () => {
const [restaurantData, setRestaurantData] = useState(null);
const {resId}= useParams();

useEffect( () => {
    fetchRestaurantData();
}, []);

const fetchRestaurantData = async() => {
    const response = await fetch(`${SWIGGY_RES_MENU}/${resId}`); 
    const responseJson = await response.json();
    setRestaurantData(responseJson?.data);
    console.log("responseJson", responseJson);
};
if (restaurantData === null) {
    return <Shimmer />;
  }
  const { name, areaName, cuisines, sla, avgRating } =
  restaurantData?.cards[0]?.card?.card?.info;

  const itemsCards =
  restaurantData?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  console.log("itemsCards", itemsCards);
    return(
        <div className="P-30">
            <div>
                <h2>{name}</h2>
                <span>{cuisines}</span>
                <p>{`${areaName} - ${sla?.deliveryTime}mins` }</p>
                <p>{` ${avgRating} stars`}</p>
            </div>
            <div className="RecMenu">
                <h2>Recommended :</h2>
                <ul>
                    {itemsCards?.map((itemCard) => (
                    <li>{itemCard?.card?.info?.name}</li>
                    ))}
                </ul> 
            </div>
        </div>
    );
};
export default RestaurantMenu;