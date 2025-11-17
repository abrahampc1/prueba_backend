const puestoModel = require('../models/puesto');

exports.ejecutar = async (req, res) => {
    try {
        const { iOpcion, ...params } = req.body;

        const data = await puestoModel.ejecutar(iOpcion, params);

        res.json({
            resultado: data
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
