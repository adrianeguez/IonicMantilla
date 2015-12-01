/**
 * Productos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: "string"
    },
    descripcion: {
      type: "string"
    },
    precio: {
      type: "float"
    },
    cantidad: {
      type: "integer"
    },
    idEmpresa: {
      model:'empresa'
    }

  }
};
