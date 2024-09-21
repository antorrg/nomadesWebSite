import env from '../envConfig.js'
import eh from '../utils/errorHandlers.js'
import { validate as uuidValidate, version as uuidVersion } from 'uuid';
//import { body, query,validationResult } from 'express-validator';

export default {
loginUser : eh.catchAsync(async (req, res, next)=>{
        const{email, password}= req.body;
        // Validar si existe el email y su formato usando una expresión regular
        if(!email){eh.throwError('Falta el email', 400)};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {eh.throwError('Formato de email invalido', 400)}
        if(!password){eh.throwError('Falta la contraseña!', 400)};
        const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // Al menos 8 caracteres y una letra mayúscula
        if (!passwordRegex.test(password)) {eh.throwError('Contraseña invalida. Esta debe tener al menos 8 caracteres y una mayuscula',400)}
        next()
}),

updUserMidd : eh.catchAsync((req, res, next) => {
    
    const { id } = req.params; const newData = req.body;
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    // Validar que el cuerpo de la solicitud esté presente y no vacío
    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}

    // Puedes agregar validaciones adicionales para los campos esperados en newData
    const requiredFields = ['email', 'given_name', 'picture', 'country'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}
    next();
}),
userVerifyPassMidd : eh.catchAsync((req, res, next) => {
    const { id , password}= req.body
    const {userId}=req.userInfo
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    //Validar que el id y el userId (token) sean iguales.
    if(id !== userId){eh.throwError('Solo el propietario de la cuenta puede cambiar la contraseña!!',400)}
    if(!password){eh.throwError('Falta la contraseña!', 400)};
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // Al menos 8 caracteres y una letra mayúscula
    if (!passwordRegex.test(password)) {eh.throwError('Contraseña invalida. Esta debe tener al menos 8 caracteres y una mayuscula',400)}
    next();
}),
userChangePassMidd : eh.catchAsync((req, res, next) => {
    const { id } = req.params; 
    const {password}= req.body
    const {userId}=req.userInfo
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    //Validar que el id y el userId (token) sean iguales.
    if(id !== userId){eh.throwError('Solo el propietario de la cuenta puede cambiar la contraseña!!',400)}
    if(!password){eh.throwError('Falta la contraseña!', 400)};
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/; // Al menos 8 caracteres y una letra mayúscula
    if (!passwordRegex.test(password)) {eh.throwError('Contraseña invalida. Esta debe tener al menos 8 caracteres y una mayuscula',400)}
    next();
}),

userResetPassMidd : eh.catchAsync((req, res, next) => {
    const { id } = req.body;
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    next();
}),
upgradeUserMidd : eh.catchAsync((req, res, next) => {
    const { id } = req.params; const newData = req.body;
    // Validar que el ID esté presente
    if (!id) {eh.throwError('Falta el id', 400)}
    // Validar que el ID sea un UUID v4 válido
    if (!uuidValidate(id) || uuidVersion(id) !== 4) {eh.throwError('Id invalido!', 400)}
    // Validar que el cuerpo de la solicitud esté presente y no vacío
    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}

    // Puedes agregar validaciones adicionales para los campos esperados en newData
    const requiredFields = ['role', 'enable'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}
    next();
}),
createItem : eh.catchAsync((req, res, next) => {
    const newData = req.body;
    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}

    const requiredFields = ['img', 'text', 'id'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}
    next();
    }),
updateItem : eh.catchAsync((req, res, next) => {
        const {id} = req.params; const newData = req.body;

        const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id));
        if (!id) {eh.throwError('Falta el id',400)}
        if (id && !idIsNumber) {eh.throwError('Parametros no permitidos', 400)}
        if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    
        const requiredFields = ['img', 'text', 'id'];
        const missingFields = requiredFields.filter(field => !(field in newData));
        if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}
        next();
        }),

createProduct: eh.catchAsync((req, res, next) => {
        const newData = req.body;
        if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
        // Validar los campos requeridos en newData
        const requiredFields = ['title', 'landing', 'logo', 'info_header', 'info_body', 'url'];
        const missingFields = requiredFields.filter(field => !(field in newData));
        if (missingFields.length > 0) {
             eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400);
        }
    
        // Validar los items
        let items = newData.items;
        if (!items || items.length === 0) {
          eh.throwError('Faltan items!!', 400);
        }
    
        const itemFields = ['img', 'text'];
    
        // Iterar los items y lanzar el error en cuanto se detecta un campo faltante
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const missingItemFields = itemFields.filter(field => !(field in item));
    
            if (missingItemFields.length > 0) { eh.throwError(`Parametros faltantes en item ${i + 1}: ${missingItemFields.join(', ')}`, 400);
            }
        }
    
        next();
    }),
    
updProduct: eh.catchAsync((req, res, next)=>{
    const {id}= req.params;  const newData = req.body;
    const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id));
    if (!id) {eh.throwError('Falta el id',400)}
    if (id && !idIsNumber) {eh.throwError('Parametros no permitidos', 400)}

    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    const requiredFields = ['title', 'landing', 'logo', 'info_header', 'info_body', 'url',];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}

    next();
}),
landingCreate : eh.catchAsync((req, res, next)=>{
    const newData = req.body;

    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    const requiredFields = ['title', 'image', 'info_header', 'description'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}

    next();
}),
landingUpdate : eh.catchAsync((req, res, next)=>{
    const { id } = req.params; const newData = req.body;

    const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id));
    if (!id) {eh.throwError('Falta el id',400)}
    if (id && !idIsNumber) {eh.throwError('Parametros no permitidos', 400)}

    if (!newData || Object.keys(newData).length === 0) {eh.throwError('Faltan elementos!!', 400)}
    const requiredFields = ['title', 'image', 'info_header', 'description', 'enable'];
    const missingFields = requiredFields.filter(field => !(field in newData));
    if (missingFields.length > 0) {eh.throwError(`Parametros faltantes: ${missingFields.join(', ')}`, 400)}

    next();
}),
middUuid: eh.catchAsync((req, res, next) => {
    const { id } = req.params;
    if (!id) {eh.throwError('Falta el id',400)}
    if (!uuidValidate(id)) {eh.throwError('Parametros no permitidos', 400)}
    next();
    }),

middIntId : eh.catchAsync((req, res, next) => {
        const {id} = req.params;
        const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id));
        if (!id) {eh.throwError('Falta el id',400)}
        if (id && !idIsNumber) {eh.throwError('Parametros no permitidos', 400)}
        next()
    }),
protectParam : (req, res, next) => {
    const {id} = req.params;
    const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id));
    if (id && !idIsNumber) {
    return res.render('error', { message: 'Parámetros no permitidos', status: 400 })}
    next()},

protectRoute : (req, res, next) => {
    const unexpectedParams = Object.keys(req.body).length > 0;
    // Verifica que 'id' en la query sea un número si está presente
    const id = req.query.id;
    const idIsNumber = !isNaN(id) && Number.isInteger(parseFloat(id))
    if (unexpectedParams || (id && !idIsNumber)) {
    return res.render('error', { message: 'Parámetros no permitidos', status: 400 })}
    next()
},
}