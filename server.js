// Get the express module.
const express = require('express');
// Create a new Express application (web server)
const app = express();
const Building = require('./models/Building');

// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

app.get('/buildings.json', (request, response) => {
  Building.all()
  .then(buildingData => {
    console.log(buildingData)
    response.json(buildingData)
  });
});

// Start the web server listening on the provided port.
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
