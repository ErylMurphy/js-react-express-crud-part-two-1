const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4567;
const Building = require('./models/Building');

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get('/buildings.json', (request, response) => {
  Building.all()
  .then(data => {
    console.log(data)
    response.json(data)
  });
});

app.get('buildings/:id.json', (request, response) => {
  const id = req.params.id;
  Building.find(request.params.id)
  .then(data => {
    response.json(data);
  })
});

app.post('/buildings', (request, response) => {
  const newBuilding = {
    name: request.body.name,
    year_built: request.body.year_built,
    city: request.body.city,
    architect: request.body.architect,
    style: request.body.style,
    image: request.body.image
  };
  Building.create(newBuilding).then(building => {
    response.json(building);
  });
});

app.put("/buildings/:id.json", (request, response) => {
  const updatedBuilding = request.body;
  updatedBuilding.id = request.params.id;
  Building.update(updatedBuilding).then(data => {
    response.redirect(302, `/buildings/${updatedBuilding.id}`);
  })
});
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
