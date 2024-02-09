import RestaurentCard from "./RestaurentCard";
import { resList } from "../utils/Constants";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* restaurant-card */}
        {resList.map((resObj) => (
          <RestaurentCard resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;