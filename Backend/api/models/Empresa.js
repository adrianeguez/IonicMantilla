/**
 * Empresa.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: "string"
    },
    fechaCreacion: {
      type: "date"
    },
    descripcion: {
      type: "string"
    },
    direccion: {
      type: "string"
    },
    telefono: {
      type: "string"
    },
    direccion: {
      type: "string"
    },
    productos: {
      collection:'productos',
      via:'idEmpresa'
    }


  }
};
