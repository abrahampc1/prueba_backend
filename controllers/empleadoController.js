const empleadoModel = require('../models/empleado');

exports.ejecutar = async (req, res) => {
    try {
        const { iOpcion, ...params } = req.body;

        const data = await empleadoModel.ejecutar(iOpcion, params);

        console.log('empleado result = ', data);
        console.log('numero de empleados = ', data.length);

        res.json({ data });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
