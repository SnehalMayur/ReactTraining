import { useState, useEffect} from "react";
import { SWIGGY_RES_MENU } from "../utils/Constants";

export const useRestaurantData = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null);

    const fetchRestaurantData = async() => {
        const response = await fetch(`${SWIGGY_RES_MENU}/${resId}`); 
        const responseJson = await response.json();
        setRestaurantData(responseJson?.data);
    };
    useEffect( () => {
        fetchRestaurantData();
    }, []);

    return restaurantData;
}