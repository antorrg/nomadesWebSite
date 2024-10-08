import eh from "../../utils/errorHandlers.js";
import sv from "../../services/userServices.js";
import * as vld from "../../middlewares/validation/sessionMiddle.js";

export default {
  userCreateController: eh.catchAsync(async(req, res)=>{
    const {email, password}=req.body;
    const response = await sv.userCreate(email, password)
    res.status(201).json(response)
  }),
  loginController: eh.catchAsync(async (req, res) => {
    const { email, password } = req.body;

    const response = await sv.userLog(email, password);
    const token = vld.generateToken(response, req.session);
    req.session.user = {
      userId: response.id,
      email: response.email,
      role: response.role,
      token,
    };
    req.session.isAuthenticated = true;

    // Configurar la cookie de sesión
    res.cookie("sessionId", req.session.user.userId, {
      httpOnly: true, // Solo accesible por el servidor
      secure: false, // Cambiar a true si usas HTTPS
      sameSite: "Strict", // Evitar CSRF
      maxAge: 1000 * 60 * 60, // 1 hora
    });
    res.status(200).json({ user: response, token });
  }),
  logout: eh.catchAsync(async (req, res, next) => {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie("connect.sid"); // Limpia la cookie de sesión del cliente
      res.clearCookie("connect.id");
      res.clearCookie("sessionId");
      res.status(200).json("Sesion cerrada");
    });
  }),
 
  updUserCtr: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const response = await sv.userUpd(id, newData);
    res.status(200).json(response);
  }),

  changePassCtr: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    const response = await sv.userChangePass(id, password);
    res.status(200).json(response);
  }),
  resetPassCtr: eh.catchAsync(async (req, res) => {
    const { id } = req.body;
    const response = await sv.userResetPass(id);
    res.status(200).json(response);
  }),

  verifyPassCtr: eh.catchAsync(async (req, res) => {
    const { id, password } = req.body;
    const response = await sv.verifyPass(id, password);
    res.status(200).json(response);
  }),
  changeStateUserCtr: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const response = await sv.userUpd(id, newData);
    res.status(200).json(response);
  }),
  delUserCtr: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await sv.userDel(id);
    res.status(200).json(response);
  }),
  getUserController : eh.catchAsync(async(req, res)=>{//provisiorio
    const response = await sv.getAllUsers()
    res.status(200).json(response)
  }),
  
};
