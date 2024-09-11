import eh from "../../middlewares/middlewares.js";
import serv from "../../services/project.js";
import sv from "../../services/users.js";

export default {
  createController: eh.catchAsync(async (req, res) => {
    const { title, landing, logo, info_header, info_body, url, items } =
      req.body;
    const response = await serv.createHome(
      title,
      landing,
      logo,
      info_header,
      info_body,
      url,
      items
    );
    res.status(201).json(response);
  }),

  createItemController: eh.catchAsync(async (req, res) => {
    const { img, text, id } = req.body;
    const response = await serv.addNewItem(img, text, id);
    res.status(201).json(response);
  }),

  delController: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await serv.delHome(id);
    res.status(200).json(response);
  }),

  updController: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const response = await serv.updHome(id, newData);
    res.status(200).json(response);
  }),

  detailUpdController: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const response = await serv.updItem(id, newData);
    res.status(200).json(response);
  }),

  getProjectHand: eh.catchAsync(async (req, res) => {
    const response = await serv.getHome();
    if(response.cache===true){
      res.status(203).json(response.pages)
    }else{
    res.status(200).json(response.pages);
    }
  }),

  getProjectById: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await serv.getById(id);
    res.status(200).json(response);
  }),

  getItemById: eh.catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await serv.getDetail(id);
    res.status(200).json(response);
  }),
};
