// Importar el esquema mongoose
const { Schema, model } = require('mongoose');


// Definir la estructura de la colección
const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatoria'],
  },
  contrasena: {
    type: String,
    required: [true, 'El password es obligatorio'],
    minlength: [3, 'Mínimo debe digitar 3 caracteres'],
},
  apellidos: {
    type: String,
    required: [true, 'El apellido es obligatoria'],
    maxlength      : [ 50, 'El apellido no puede exceder los 50 caracteres' ],
    minlength      : [ 3, 'El apellido debe contener 3 o más caracteres' ]
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatoria'],
    maxlength      : [ 20, 'El correo no puede exceder los 20 caracteres' ],
    minlength      : [ 8, 'El correo debe contener 8 o más caracteres' ]
  },
  telefono: {
    type: Number,
    required: [true, 'El telefono es obligatoria'],
    maxlength      : [ 12, 'El Telefono no puede exceder los 20 caracteres' ],
    minlength      : [ 10, 'El Telefono debe contener 8 o más caracteres' ]
  },
  rol: {
    type: String,
    enum: ['Admin', 'Usuario'],
    required: [true, 'El rol es obligatorio']
  },
  fechacreacion: {
    type: Date,
   default: Date.now,
  },
  estado: {
    type: Boolean,
    default: true,
    required: [true, 'El estado es obligatorio']
},

});

module.exports = model('Usuario', UsuarioSchema);
