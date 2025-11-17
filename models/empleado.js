const db = require('../config/db');

class Empleado {

    async ejecutar(iOpcion, data) {

        const params = [
            iOpcion,
            data.iNumEmpleado || 0,
            data.sNombre || null,
            data.sApPaterno || null,
            data.sApMaterno || null,
            data.sDireccion || null,
            data.sCodigoPostal || null,
            data.sTelefono || null,
            data.sCurp || null,
            data.sNss || null,
            data.iPuesto || null,
            data.sCausaBaja || null
        ];

        const sql = `
            SELECT * FROM fnoperacionesempleados(
                $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12
            )
        `;

        const result = await db.query(sql, params);

        return result.rows;
    }

}

module.exports = new Empleado();
