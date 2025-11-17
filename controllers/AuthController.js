const { Usuario } = require("../models/usuario");

exports.login = (req, res) => {
  const { usuario, password } = req.body;

  if (!usuario || !password) {
    return res.json({
      estatus: -1,
      mensaje: "Usuario y contraseña son obligatorios",
    });
  }

  const encontrado = Usuario.login(usuario, password);

  if (!encontrado) {
    return res.json({
      estatus: -1,
      mensaje: "Usuario o contraseña incorrectos",
    });
  }

  return res.json({
    estatus: 1,
    mensaje: "Login exitoso",
    data: {
      id_empleado: encontrado.id_empleado,
      usuario: encontrado.usuario,
    },
  });
};
