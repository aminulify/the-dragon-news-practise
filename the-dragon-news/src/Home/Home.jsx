import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Category/NewsCard';


const Home = () => {
    const {id} = useParams();
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