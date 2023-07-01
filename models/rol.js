// Importar el esquema mongoose

const { Schema, model } = require('mongoose');


// Definir la estructura de la colección
const RolSchema = Schema({
  nombrerol: {
    type: String,
    required: [true, 'El nombre es obligatoria'],
    maxlength      : [ 50, 'El nombre no puede exceder los 50 caracteres' ],
    minlength      : [ 3, 'El rol debe contener 3 o más caracteres' ]
  },
  funciones: {
    type: Array,
    required: [true, 'Seleccione las funciones asociados al rol']
  },
  permisos: {
    type: Array,
    required: [true, 'Seleccione los Permisos asociados al rol']
  },
fechacreacion: {
  type: Date,
  default: Date.now,
},
estado: {
    type: Boolean,
    default: true,
    required: [true, 'El estado es obigatorio']
}
});

module.exports = model('Rol', RolSchema);
