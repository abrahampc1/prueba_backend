const express = require('express');
const router = express.Router();

// Controladores
const empleadoController = require('../controllers/empleadoController');
const puestoController = require('../controllers/puestoController');
const authController = require('../controllers/AuthController'); 

// Rutas
router.post('/empleados/opciones', empleadoController.ejecutar);
router.post('/puestos/opciones', puestoController.ejecutar);
router.post('/auth/login', authController.login);

module.exports = router;
