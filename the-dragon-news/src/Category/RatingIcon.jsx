import React from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const RatingIcon = ({getRating}) => {

    const reviewRating = () =>{
        const ratingInt = parseInt(getRating);
        const ratingFloat = (getRating - ratingInt);
        // console.log(ratingFloat);
        
        let stars = [];
        for(let i=1; i <= ratingInt; i++){
            stars.push(<FaStar/>);
        }

        if(ratingFloat > 0){
            stars.push(<FaStarHalfAlt/>);
        }

        for(let i=1; i <= 5 - (ratingInt + ratingFloat); i++){
            stars.push(<IoIosStarOutline/>);
        }
     
        return stars;
    
    }
    return (
        <div>
            {
                reviewRating()
            }
        </div>
    );
};

export default RatingIcon;