import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import path from 'path';

// Configuración de Multer
 const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Función para verificar la conexión con Cloudinary
async function testCloudinaryConnection() {
  try {
    const result = await cloudinary.api.ping();
    console.log('Conexión exitosa con Cloudinary:', result);
    return true;
  } catch (error) {
    console.error('Error al conectar con Cloudinary:', error);
    return false;
  }
}

const uploadStream = (buffer, options) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
    stream.write(buffer);
    stream.end();
  });
};

// Función para subir imagen a Cloudinary 
async function uploadToCloudinary(file) {
  const options = {
    resource_type: 'auto',
    public_id: path.parse(file.originalname).name,
    format: 'webp',
  };

  try {
    const result = await uploadStream(file.buffer, options);
    return result;
  } catch (error) {
    throw error;
  }
}

const controllerUploader = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No se subió ningún archivo' });
  }

  try {
    const result = await uploadToCloudinary(req.file);

    const httpsWebpUrl = cloudinary.url(result.public_id, {
      secure: true,
      format: 'webp',
      transformation: [
        {width: 'auto', crop: 'scale'},
        {fetch_format: 'auto', quality: 'auto'}
      ]
    });

    //console.log('URL generada:', httpsWebpUrl);
    res.json({ 
      url: httpsWebpUrl
    });
  } catch (error) {
    console.error('Error en controllerUploader:', error);
    res.status(500).json({ message: 'Error al subir la imagen', error: error.message });
  }
}

// Función para configurar Cloudinary
const configureCloudinary = async (config) => {
  cloudinary.config(config);
  console.log('Configuración de Cloudinary aplicada');
  // const isConnected = await testCloudinaryConnection();
  // if (!isConnected) {
  //   throw new Error('No se pudo establecer conexión con Cloudinary');
  // }
}

export { upload, controllerUploader, configureCloudinary };

//ejemplo url: app.post('/prueba', upload.single('image'), controllerUploader)

//configuracion en app: 
 /*configureCloudinary({
    cloud_name: 
    api_key: 
    api_secret: 
  });*/