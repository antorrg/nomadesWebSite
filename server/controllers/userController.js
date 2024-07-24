import serv from '../services/userService.js'
import eh from '../middlewares/errorHandlers.js'

export default {
    createUserCtr: eh.catchError(async (req, res) => {
        const { email, password } = req.body;
        const response = await sv.userCreate(email, password);
        res.status(201).json(response);
      }),
    
      delUserCtr: eh.catchError(async (req, res) => {
        const { id } = req.params;
        const response = await sv.userDel(id);
        res.status(200).json(response);
      }),
    
      loginUserCtr: eh.catchError(async (req, res) => {
        const { email, password } = req.body;
        const response = await sv.userLog(email, password);
        res.status(200).json(response);
      }),
    
      updUserCtr: eh.catchError(async (req, res) => {
        const { id } = req.params;
        const newData = req.body;
        const response = await sv.userUpd(id, newData);
        res.status(200).json(response);
      }),
    
      getUserCtr: eh.catchError(async (req, res) => {
        const response = await sv.getAllUsers();
        res.status(200).json(response);
      }),
    
      getDetailCtr: eh.catchError(async (req, res) => {
        const { id } = req.params;
        const response = await sv.getUsersById(id);
        res.status(200).json(response);
      }),
    
      changePassCtr: eh.catchError(async (req, res) => {
        const { id } = req.params;
        const { password } = req.body;
        const response = await sv.userChangePass(id, password);
        res.status(200).json(response);
      }),
    
      verifyPassCtr: eh.catchError(async (req, res) => {
        const { id, password } = req.body;
        const response = await sv.verifyPass(id, password);
        res.status(200).json(response);
      }),
}