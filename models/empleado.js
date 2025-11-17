const db = require('../config/db');

class Empleado {

    async ejecutar(iOpcion, data) {

        const params = [
            iOpcion,
            (data.iNumEmpleado === undefined || data.iNumEmpleado === "" ? -1 : data.iNumEmpleado),
            data.sNombre || null,
            data.sApPaterno || null,
            data.sApMaterno || null,
            data.sDireccion || null,
            data.sCodigoPostal || null,
            data.sTelefono || null,
            data.sCurp || null,
            data.sNss || null,
            data.iPuesto || null,
            data.sCausaBaja || ''
        ];

        const sql = `
            SELECT * FROM fnoperacionesempleados(
                $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12
            )
        `;

        console.log('parametros = ', sql, params);
        const result = await db.query(sql, params);

        return result.rows;
    }

}

module.exports = new Empleado();
