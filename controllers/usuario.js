const {response} = require('express')
const bcrypt = require('bcrypt') //Importar libreria para encriptar
const Usuario = require('../models/usuario')

//Consulta
const getUsuario = async(req, res=response) => {
    let mensaje = ''
    try {
        //Consulta en la colección
        const usuarios = await Usuario.find()
        mensaje = usuarios
    } catch (error) {
        mensaje = error
    }

   res.json({
        usuarios:mensaje
    })
    
}

const postUsuario = async(req, res = response) =>{

    const body = req.body //Desestructuración
    let mensaje = ''
    const usuario = new Usuario(body) // Crear el objeto
    usuario.contrasena = bcrypt.hashSync(body.contrasena, 10) //Encriptar
    console.log(body)
    try {
        await usuario.save()
        mensaje = 'Usuario registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

const putUsuario = async(req, res = response) =>{
    //Actualización de datos
    const body = req.body //Desestructuración
     console.log(body)

    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria'){
//            await Usuario.findOneAndUpdate({nombre:body.nombre}, {rol:body.rol, estado:body.estado})
            await Usuario.findOneAndUpdate({_id:body._id}, {nombre:body.nombre, apellidos:body.apellidos, correo:body.correo,telefono:body.telefono,rol:body.rol,estado:body.estado})
            mensaje = 'Usuario modificado exitosamente. Modificación: Sencilla'
        }
        else{
            await Usuario.updateMany({contrasena:body.contrasena}, {rol:body.rol, estado:body.estado})
            mensaje = 'Usuario modificado exitosamente. Modificación: Múltiple'
        }


    } catch (error) {
        mensaje = error
    }
    //console.log('---------------'+mensaje)
    res.json({
        mensaje:mensaje
    })
   
}

const deleteUsuario = async(req, res = response) =>{
    //Actualización de datos
    const body = req.body//Desestructuración
    let mensaje = ''

    try {
        await Usuario.deleteOne({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    //console.log('---------------'+mensaje)
    res.json({
        mensaje
    })
   
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}




