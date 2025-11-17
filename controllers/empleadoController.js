const empleadoModel = require('../models/empleado');

exports.ejecutar = async (req, res) => {
    try {
        const { iOpcion, ...params } = req.body;

        const data = await empleadoModel.ejecutar(iOpcion, params);

        res.json({ data });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
