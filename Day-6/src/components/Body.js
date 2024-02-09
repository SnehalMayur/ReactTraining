import {useState} from "react";
import RestaurentCard from "./RestaurantCard";
import { resList } from "../utils/Constants";

const Body = () => {
  //local Js variable
  //let listOfRestaurantsJs = resList;

  //React variable
  const [listOfRestaurants, setListOfRestaurantsJs] = useState(resList);

  return (
    <div className="body">
      { <div className="filter">
        <button className="filter-btn" onClick={() => {
           listOfRestaurantsJs = listOfRestaurants.filter(
            (res) => res?.info?.avgRating >= 4.4
            );

            setListOfRestaurantsJs(listOfRestaurantsJs);
        }}>
          Top Rated restaurants
        </button>
        <button className="filter-btn" onClick={() => {
            setListOfRestaurantsJs(resList);
        }}>
          Refresh
        </button>
      </div>}
      <div className="res-container">
        {/* restaurant-card */}
        {listOfRestaurants.map((resObj) => (
          <RestaurentCard resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;