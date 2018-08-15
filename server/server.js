const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, 'localhost', () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
