const express = require('express');
const app = express();
const cors=require('cors');


// const connectToDB = require('./db/dbconnect')()

const route  = require('./routes');
require('dotenv').config();
const port = process.env.PORT || 4001;
 

app.use(cors({origin:'*'}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/v1',route)





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
