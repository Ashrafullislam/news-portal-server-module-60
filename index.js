const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000 ;
app.use(cors())



// all news category 
const categories = require ('./data/categories.json')

  // all news data 
const newsData = require ('./data/news.json')


// root folder for test server running 
app.get('/', (req,res) => {
  res.send('News Category runnin on server ')
})


// all categories nav of news 
app.get('/categories-news', (req,res)=>{
    res.send(categories)
})

// all news show by default 
app.get('/allNews', (req,res) => {
  res.send(newsData)
})


// get news by only id and it will be only one 
app.get('/newses/:id', (req,res) => {
  const newsId = req.params.id;
    const selectedNews = newsData.find(news => news._id === newsId)
    res.send(selectedNews);

})

//get news by category id and it will be more news 
app.get('/category/:id', (req,res) => {
  const categoryNews = req.params.id;
  if(categoryNews === '08'){
    res.send(newsData)
  }
  else{
    const category = newsData.filter(catNews => catNews.category_id === categoryNews )
    res.send(category)
  }

})


app.listen(port, ()=> {
 console.log('News api server ' , port)
})