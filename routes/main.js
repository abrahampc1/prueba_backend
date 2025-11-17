const express = require('express');
const router = express.Router();

// Controladores
const empleadoController = require('../controllers/empleadoController');
const puestoController = require('../controllers/puestoController');

// Rutas
router.post('/empleados/opciones', empleadoController.ejecutar);
router.post('/puestos/opciones', puestoController.ejecutar);

module.exports = router;
