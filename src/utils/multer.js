import multer from 'multer';

// Configuración de Multer para almacenamiento temporal
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware para manejar la subida de archivos
export const uploadMiddleware = upload.single('image');