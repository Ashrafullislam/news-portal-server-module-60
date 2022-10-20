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


// all news category  display 
app.get('/categories-news', (req,res)=>{
    res.send(categories)
})

app.get('/all-news', (req,res) => {
  res.send(newsData)
})

app.listen(port, ()=> {
 console.log('News api server ' , port)
})