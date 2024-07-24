import { User } from "../database.js";
import bcrypt from "bcrypt";
import env from "../envConfig.js";
import help from "./helpers/helpers.js";
import jwt from "../middlewares/middlewares.js";

export default {
  userCreate: async (email1, password1) => {
    try {
      const holderFound = await User.findOne({
        where: {
          email: email1,
        },});
      if (holderFound) {const error = new Error("This user already exists!"); error.status = 400; throw error;}
      //preparacion de variables:
      const hashedPassword = await bcrypt.hash(password1, 12);
      const nickname1 = email1.split("@")[0];
      
      const newHolder = await User.create({
        email: email1,
        password: hashedPassword,
        nickname: nickname1,
        given_name: "",
        picture: `${env.userImg}`,
      });
      if (!newHolder) {const error = new Error("Unexpected server error!"); error.status = 500; throw error;}
      return help.holderParser(newHolder, true);
    } catch (error) {throw error;}
  },

  userLog: async (email1, password1) => {
    try {
      const hold = await User.findOne({
        where: {
          email: email1,
        },
      });
      if (!hold || hold === undefined) {const error = new Error("This user do not exists!"); error.status = 400; throw error; }
      //verificacion de password:
      const passwordMatch = await bcrypt.compare(password1, hold.password);
      if (!passwordMatch) {const error = new Error("Invalid Password!"); error.status = 400; throw error; }
      //formacion del token y retorno del usuario.
      return { user: help.holderParser(hold, true), token: jwt.generateToken(hold) };
    } catch (error) {throw error;}
  },

  getAllUsers: async () => {
    try {
      const holderFound = await User.findAll();
      if (!holderFound) {const error = new Error("Unexpected error. User not found"); error.status = 500; throw error;}
      if (holderFound.length === 0){return help.dataEmptyUser()}
      return help.holderParser(holderFound, false);
    } catch (error) { throw error;}
  },

  getUsersById: async (id) => {
    try {
      const holderFound = await User.findByPk(id);
      if (!holderFound) { const error = new Error("Unexpected error. User not found"); error.status = 500; throw error; }
      return help.holderParser(holderFound, true);
    } catch (error) { throw error;}
  },

  userUpd: async (id, newData) => {
    try {
      const holder = await User.findByPk(id);
      if (!holder) { const error = new Error("User not found"); error.status = 404; throw error;}
      const nickname1 = newData.email.split("@")[0];
      const updInfo = {
        email: newData.email,
        nickname: nickname1,
        given_name: newData.given_name,
        picture: newData.picture,
        role: Number(newData.role),
        country: newData.country,
        enable: Boolean(newData.enable),
      };
      const holderUpdated = await holder.update(updInfo);
      return holderUpdated;
    } catch (error) { throw error; }
  },

  verifyPass: async (id, password) => {
    try {
      const user = await User.findByPk(id);
      if (!user) { const error = new Error("User not found"); error.status = 404;throw error;}
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) { const error = new Error("Incorrect password"); error.status = 400; throw error;}
      return { message: "Password successfully verified" };
    } catch (error) { throw error; }
  },

  userChangePass: async (id, password) => {
    try {
      const user = await User.findByPk(id);
      if (!user) { const error = new Error("User not found"); error.status = 404; throw error;}
      const hashedPassword = await bcrypt.hash(password, 12);
      const newData = { password: hashedPassword };
      await user.update(newData);
      return "Password updated successfully";
    } catch (error) { throw error; }
  },

  userDel: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) { const error = new Error("User not found"); error.status = 404; throw error;}
      await user.destroy(id);
      return { message: "User deleted succesfully" };
    } catch (error) { throw error;}
  },
};
