const db = require('../config/db');

class Puesto {

    async ejecutar(iOpcion, data) {

        const params = [
            iOpcion,
            data.iIdPuesto || null,
            data.iDescripcion || null,
            data.iEmpleadoRegistra || null,
            data.iEmpleadoBaja || null
        ];

        const sql = `
            SELECT * FROM fnoperacionespuestos(
                $1,$2,$3,$4,$5
            )
        `;

        const result = await db.query(sql, params);
        return result.rows;
    }

}

module.exports = new Puesto();
