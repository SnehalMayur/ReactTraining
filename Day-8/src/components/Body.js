import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/Constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterdRestaurants, setfilterdRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const dataJSON = await data.json();
    // we have to render our page with the new data
    setListOfRestaurants(
      dataJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterdRestaurants(
      dataJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <>
      { listOfRestaurants.length === 0 ? (<Shimmer />) : 
        (
          <div className="body">
            <div className="filter">
              <div >
                <input type="text" 
                  value={searchText} 
                  onChange={(e) => setSearchText(e?.target?.value)}/>
                <button className="search-btn" 
                  onClick={() => {
                    setfilterdRestaurants(
                      listOfRestaurants.filter((res) => res.info?.name?.toLowerCase().includes(searchText?.toLowerCase()))
                    );
                  }}>
                  Search
                </button>
              </div>
              <button
                className="filter-btn"
                onClick={() => {
                  setfilterdRestaurants(
                    listOfRestaurants.filter((res) => res.info?.avgRating > 4.2)
                  );
                }}
              >
                Top Rated Restaurants
              </button>
              <button className="filter-btn" onClick={() => 
                {setfilterdRestaurants(listOfRestaurants.filter((res) => res.info));}
              }>Refresh
              </button>
            </div>
            <div className="res-container">
              {filterdRestaurants.map((resObj) => (
                <RestaurantCard resData={resObj} />
              ))}
            </div>
          </div>
      )};
    </>
    
  );
};

export default Body;