
import { useState, useEffect } from 'react';
import style from '../Auth/userComponents/GenericButton/EspecialButton.module.css'
 import {app} from '../firebaseConfig';
  import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ImgUpFire = ({ maxImages, maxWidth, className, uploadImgs  }) => {
  const [imagenes, setImagenes] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagenUrls, setImagenUrls] = useState([]);

  const handleFile = (e) => {
    const files = e.target.files;
    if (imagenes.length + files.length <= maxImages) {
      const newImagenes = [...imagenes, ...files];
      setImagenes(newImagenes);
    } else {
      alert(`Solo se permiten un máximo de ${maxImages} imágenes.`);
    }
  };

  const handleDeleteImage = (index) => {
    const newImagenes = [...imagenes];
    newImagenes.splice(index, 1);
    setImagenes(newImagenes);
    setUploadProgress(0);
  };
  const handleUpload = async () => {
    const storage = getStorage(app);
    setUploadProgress(0);

    try {
      const uploadedUrls = [];
      await Promise.all(
        imagenes.map(async (imagen) => {
          const storageRef = ref(storage, `images/${imagen.name}`);
          await uploadBytes(storageRef, imagen);
          const url = await getDownloadURL(storageRef);
          uploadedUrls.push(url);
        })
      );
      uploadImgs(uploadedUrls[0]);
      //console.log('Imagenes para subir:', uploadImgs);
      setUploadProgress(100);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div>
      <div>
        <label>
          Imagen
        </label>
        <input
          type="file"
          id="file"
          placeholder="Seleccione una imagen"
          accept="image/*"
          // multiple
          onChange={handleFile}
          className={className}
        />
      </div>
      <div>
        {imagenes.map((imagen, index) => (
          <div key={index}>
            <img
              src={URL.createObjectURL(imagen)}
              alt="Imagen subida"
              style={{ maxWidth: maxWidth || "150px" }}
            />
            <button
              onClick={() => handleDeleteImage(index)} 
              style={{backgroundColor:'transparent'}}
            >
              Quitar ❌
            </button>

            <button onClick={handleUpload} style={{backgroundColor:'transparent'}}>
              Subir ✔️
            </button>
          </div>
        ))}
        {uploadProgress > 0 && (
          <p>
            Progreso de la subida: {uploadProgress}%. Imagen archivada
          </p>
        )}
      </div>
    </div>
  );
};

ImgUpFire.defaultProps = {
  maxImages: 1, // Por defecto, se permite solo una imagen
  maxWidth: "150px" 
};

export default ImgUpFire;
//<ImgUpFire maxImages={3} maxWidth="200px" uploadImgs={handleUploadedImageUrl} />