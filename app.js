require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mainRoutes = require('./routes/main'); 

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(mainRoutes);
console.log("Rutas cargadas...");

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
