import express from 'express';
import {articleList, isArticle} from './articles';


const cors = require('cors')
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');

app.use(cors()); //Quick, but probably not best practice
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/articles', (req, res) => res.json(articleList));

app.post('/articles', (req, res) => {
    console.log(req.body);
    
  if (!isArticle(req.body)) {
    res.status(422).json({message: 'Incorrect article format'})
  } else {
    setTimeout(() => {
      articleList.push(req.body)
      res.status(201).json(req.body)
    }, 2500)
  }
});

app.use(express.json())


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
