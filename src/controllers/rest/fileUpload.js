import fileServ from '../../services/fileService.js'
import eh from '../../utils/errorHandlers.js'

export default {
uploadImg : eh.catchAsync(async (req, res) => {
    const file = req.file;
    console.log(req.file)
    if(!file){eh.throwError('Not found', 404)}
    //const imageUrl = await uploadImageToFirebase(file)
    const response = {  success: true,
                        message: 'Imagen subida exitosamente',
                        data: {url: imageUrl}
                      }
    console.log('response: ', response)
    res.status(200).json(response)
  }),

};