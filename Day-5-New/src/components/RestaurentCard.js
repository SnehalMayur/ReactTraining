import {CDN_URL} from "../utils/Constants";

const RestaurentCard = (props) => {
    const {resData = {} } = props;
    const {info} = resData;
    return(
        <div className="res-card">
            <img src={`${CDN_URL}/${info?.cloudinaryImageId}`} alt="Domino's Pizza" className="res-logo"/>
            <div className="card-content">
                <p className="res-title">{info?.name}</p>
                <p className="res-rating">{info?.avgRating}</p>
                <p className="res-place">{info?.cuisines?.join(", ")}</p>
                <p className="res-place">{info?.areaName}</p>
            </div>
        </div> 
    );
};
export default RestaurentCard;