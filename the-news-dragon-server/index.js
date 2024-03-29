const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./categories.json');
const news = require('./news.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Dragon is running')
})

app.get('/categories', (req, res) =>{
    // console.log(categories);
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res)=>{
    const id = req.params.id;
    // console.log(id);
    const selectedNews = news.find(n=> n._id==id);
    // console.log(selectedNews);
    res.send(selectedNews);
})

app.get('/categories/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    // console.log(id);
    if(id===0){
        res.send(news);
    }
    else{
        const categoriesNews = news.filter(n=> parseInt(n.category_id) === id);
        // console.log(categoriesNews);
        res.send(categoriesNews)
    }
    
})

app.listen(port, ()=>{
    console.log(`Dragon API is running on port: ${port}`);
})