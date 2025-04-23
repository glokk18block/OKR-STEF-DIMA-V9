require('dotenv').config(); 
const express = require('express');  
const bodyParser = require('body-parser');  
const gymRoutes = require('./src/routes');  

const app = express();  
const PORT = process.env.PORT || 5477;  


app.use(bodyParser.json());  

 
app.use('/games', routes);  

app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);  
});  