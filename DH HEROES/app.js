const express = require('require');
const app = express();
const port = 3030;

app.listen(port,() => console.log('servidor corriendo en http://localhost:' + port))