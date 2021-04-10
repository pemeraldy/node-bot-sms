const express = require('express');
const app = express()


app.get('/receive', (req, res) =>{
  res.send('Hello, what going right here');
});

app.listen(8080, () => {
  console.log('Server running');
})