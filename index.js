const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000 ;
app.use(cors())
const categories = ([
    {
      "id": "01",
      "name": "Breaking News"
    },
    {
      "id": "02",
      "name": "Regular News"
    },
    {
      "id": "03",
      "name": "International News"
    },
    {
      "id": "04",
      "name": "Sports"
    },
    {
      "id": "05",
      "name": "Entertainment"
    },
    {
      "id": "06",
      "name": "Culture"
    },
    {
      "id": "07",
      "name": "Arts"
    },
    {
      "id": "08",
      "name": "All News"
    }
  ])

  const news = ('./news.json')
app.get('/', (req,res) => {
    res.send('News api server running')
})

app.get('/categories-news', (req,res)=>{
    res.send(categories)
})

app.get('/news-portal',(req,res)=> {
    res.send(news)
})

app.listen(port, ()=> {
 console.log('News api server ' , port)
})