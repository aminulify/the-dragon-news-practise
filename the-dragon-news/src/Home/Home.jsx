import React from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import NewsCard from '../Category/NewsCard';


const Home = () => {
    const {id} = useParams();
    const location = useLocation();
    // console.log(id, location.pathname); 
    // useLocation() show total pathname OR useParams() show after root pathname

    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            
            {
                categoryNews.map(news=> <NewsCard
                 key={news._id}
                 news = {news}
                ></NewsCard>)
            }
        </div>
        
    );
};

export default Home;