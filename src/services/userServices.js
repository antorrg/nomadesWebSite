import { User } from "../db.js";
import eh from '../utils/errorHandlers.js'
import bcrypt from "bcrypt";
import env from "../envConfig.js";
import help from "./helpers.js";

export default {
  userCreate: async (email1, password1) => {
    try {
      const userFound = await User.findOne({
        where: {
          email: email1,
        },});
      if (userFound) {eh.throwError('Este usuario ya existe', 400)}
      //preparacion de variables:
      const hashedPassword = await bcrypt.hash(password1, 12);
      const nickname1 = email1.split("@")[0];
      
      const newUser = await User.create({
        email: email1,
        password: hashedPassword,
        nickname: nickname1,
        given_name: "",
        picture: `${env.userImg}`,
      });
      if (!newUser) {eh.throwError('Error inesperado en el servidor', 500)}
      return help.userParser(newUser, true, true);
    } catch (error) {throw error;}
  },

  userLog: async (email1, password1) => {
    try {
      const user = await User.findOne({
        where: {
          email: email1,
        },
      });
      if (!user || user === undefined) {eh.throwError('Este usuario no existe', 404)}
      //verificacion de password:
      const passwordMatch = await bcrypt.compare(password1, user.password);
      if (!passwordMatch) {eh.throwError('Contraseña no valida', 400)}
      //formacion del token y retorno del usuario.
      return help.userParser(user, true, false);
    } catch (error) {throw error;}
  },

  getAllUsers: async () => {
    try {
      const userFound = await User.findAll();
      if (!userFound) {eh.throwError('Error inesperado. Usuario no hallad', 500)}
      if (userFound.length === 0) {return help.emptyUser()}
      return help.userParser(userFound, false, true);
    } catch (error) { throw error;}
  },

  getUsersById: async (id) => {
    try {
      const userFound = await User.findByPk(id);
      if (!userFound) {eh.throwError('Usuario no hallado', 404)}
      return help.userParser(userFound, true, true);
    } catch (error) { throw error;}
  },

  userUpd: async (id, newData) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {eh.throwError('Usuario no hallado', 404)}
      const nickname1 = newData.email.split("@")[0];
      const newRole = help.revertScope(newData.role)
      const updInfo = {
        email: newData.email,
        nickname: nickname1,
        given_name: newData.given_name,
        picture: newData.picture,
        role: Number(newRole),
        country: newData.country,
        enable: Boolean(newData.enable),
      };
      const userUpdated = await user.update(updInfo);
      return help.userParser(userUpdated, true, true);
    } catch (error) { throw error; }
  },

  verifyPass: async (id, password) => {
    try {
      const user = await User.findByPk(id);
      if (!user) { eh.throwError('Usuario no hallado', 404)}
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) { eh.throwError('Contraseña incorrecta!', 400)}
      return { message: "Contraseña verificada exitosamente" };
    } catch (error) { throw error; }
  },

  userChangePass: async (id, password) => {
    try {
      const user = await User.findByPk(id);
      if (!user) { eh.throwError('Usuario no hallado', 404)}
      const hashedPassword = await bcrypt.hash(password, 12);
      const newData = { password: hashedPassword };
      await user.update(newData);
      return "Contraseña actualizada exitosamente";
    } catch (error) { throw error; }
  },

  userDel: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) { eh.throwError('Usuario no hallado', 404)}
      await user.destroy(id);
      return { message: "Usuario borrado exitosamente" };
    } catch (error) { throw error;}
  },
};
