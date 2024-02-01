import React from 'react';
import './News.css'
import { useLoaderData, useNavigation } from 'react-router-dom';
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
import RatingIcon from '../../Category/RatingIcon';
import Snipper from '../../Snippers/Snipper';
import { FaArrowLeft } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdOutlineDateRange } from "react-icons/md";

const News = () => { 
    const navigation = useNavigation();
    const newsDetails = useLoaderData();
    const {_id, author, title, details, category_id, image_url, rating, published_date, total_view} = newsDetails;

    const getRating = rating.number;
    return (
        <div>
            {
                navigation.state === 'loading' ? <Snipper></Snipper> : ''
            }
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
                {details}

                <div className='backToAllCategory'>
                    <Link to={`/category/${category_id}`}><FaArrowLeft/> All news in this category</Link>
                </div>
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
                <div className='views'><p className='fw-medium'>{parseInt(total_view) + 1} <FaEye/></p></div>
            </div>
        </div>

                <div className='d-flex gap-3'>
                   <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../../src/assets/1.png" />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        
                        <div className='text-secondary'><MdOutlineDateRange /> {author.published_date.split(' ',1)}</div>
                    </Card.Body>
                    </Card>
                   <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../../src/assets/2.png" />
                    <Card.Body>
                        <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                        
                        <div className='text-secondary'><MdOutlineDateRange /> {author.published_date.split(' ',1)}</div>
                    </Card.Body>
                    </Card>
                   <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../../../src/assets/3.png" />
                    <Card.Body>
                        <Card.Title >21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                       
                        <div className='text-secondary'><MdOutlineDateRange /> {author.published_date.split(' ',1)}</div>
                    </Card.Body>
                    </Card>
                   
                </div>

        </div>
    );
};

export default News;