const {response} = require('express')
const Rol = require('../models/rol')

//Consulta
const getRol = async(req, res=response) => {
    let mensaje = ''
    try {
        //Consulta en la colección
        const roles = await Rol.find()
        mensaje = roles
    } catch (error) {
        mensaje = error
    }

   res.json({
        roles:mensaje
    })
    
}

const postRol = async(req, res = response) =>{

    const body = req.body //Desestructuración
    let mensaje = ''
    const rol = new Rol(body) // Crear el objeto
    console.log(body)
    try {
        await rol.save()
        mensaje = 'Rol registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

const putRol = async(req, res = response) =>{
    //Actualización de datos
    const body = req.body //Desestructuración
     console.log(body)

    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria'){
//            await Rol.findOneAndUpdate({nombrerol:body.nombrerol}, {rol:body.rol, estado:body.estado})
            await Rol.findOneAndUpdate({_id:body._id}, {nombrerol:body.nombrerol,funciones:body.funciones,permisos:body.permisos,estado:body.estado})
            mensaje = 'Rol modificado exitosamente. Modificación: Sencilla'
        }
        else{
            await Rol.updateMany({_id:body._id}, { nombrerol:body.nombrerol,funciones:body.funciones,permisos:body.permisos,estado:body.estado})
            mensaje = 'Rol modificado exitosamente. Modificación: Múltiple'
        }


    } catch (error) {
        mensaje = error
    }
    //console.log('---------------'+mensaje)
    res.json({
        mensaje:mensaje
    })
   
}

const deleteRol = async(req, res = response) =>{
    //Actualización de datos
    const body = req.body//Desestructuración
    let mensaje = ''

    try {
        await Rol.deleteOne({_id:body._id})
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
    getRol,
    postRol,
    putRol,
    deleteRol
}




