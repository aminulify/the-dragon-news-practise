import React from 'react';
import './NewsCard.css';
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosStarHalf } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { ImStarEmpty } from "react-icons/im";
import { IoMdStar } from "react-icons/io";
import Rating from 'react-rating';
import { IoIosStarOutline } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import RatingIcon from './RatingIcon';

const NewsCard = ({news}) => {
    const {_id, author, title, details, thumbnail_url, image_url, rating, published_date, total_view} = news;

    const getRating = rating.number;

    return (

        <div className='border border-1 news-card'>
            <div className='card-header-section'>

                <div className='card-heading-distribution'>
                    <aside className=''>
                        <div className='p-2 author-img'>
                            <img src={author?.img} alt="Profile Image" />
                        </div>
                        <div className='author-name'>
                            <b>{author?.name || 'Aminul'}</b>
                            <p><small>{author?.published_date?.split(' ',1)}</small></p>
                            {/* author.published_date.split(separation, limit) */}

                            {/* import moment.js
                            <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p> */}
                            
                        </div>
                    </aside>

                    <div className='d-flex gap-1 header-icons'>
                        <FaRegBookmark/>
                        <IoShareSocialOutline/>
                        
                    </div>
                </div>       
            </div>
            <h2 className='card-title'>{title}</h2>
            <div className='thumbnail'>
                <img src={image_url} alt="" />
            </div>
            <div className="description">
                {details.length < 250 ? <>{details}</> : <>{details.slice(0,249)}...<br/><Link to={`/news/${_id}`} className='text-warning fw-medium'>Read More</Link></>}
            </div>
            <hr />
            <div className='card-footer'>
                <div className='star-icons'>
                   
               
                {/* react rating js  */}
                {/* <Rating
                 placeholderRating={rating.number}
                 emptySymbol={<IoIosStarOutline />}
                 placeholderSymbol={<FaStar />}
                 fullSymbol={<FaStar />}
                readonly
                /> */}

                {/* try core code star review */}
                    <RatingIcon getRating={getRating}/>                
                    {rating?.number}
                </div>
                <div className='views'><p className='fw-medium'>{total_view} <FaEye/></p></div>
            </div>
        </div>
    );
};

export default NewsCard;