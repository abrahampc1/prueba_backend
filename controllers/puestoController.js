const puestoModel = require('../models/puesto');

exports.ejecutar = async (req, res) => {
    try {
        const { iOpcion, ...params } = req.body;

        const data = await puestoModel.ejecutar(iOpcion, params);

        console.log('puestos encontrados =', data);
        console.log('numero de puestos = ', data.length);

        res.json({ data });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
