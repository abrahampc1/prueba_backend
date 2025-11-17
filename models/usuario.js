const usuarios = [
  {
    id_empleado: 2,
    usuario: "abraham",
    password: "admin"
  },
  {
    id_empleado: 12,
    usuario: "carlos",
    password: "admin"
  }
];

class Usuario {
  static login(usuario, password) {
    const encontrado = usuarios.find(
      (u) => u.usuario === usuario && u.password === password
    );
    return encontrado || null;
  }
}

module.exports = { Usuario };
