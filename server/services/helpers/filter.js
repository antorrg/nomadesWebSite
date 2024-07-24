import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const saveJson = async (name, jsonData) => {
  try {
    const filePath = join(__dirname, 'results', `${name}.json`);
    await writeFile(filePath, JSON.stringify(jsonData, null, 2));
    console.log('JSON data written successfully to:', filePath);
  } catch (err) {
    console.error('Error writing JSON file:', err);
  }
};




export const parseCharacter = (dataInfo, isObj)=>{
    return isObj? cleaner(dataInfo) : dataInfo.map((data)=>cleaner(data))
   
}
const cleaner =(info)=> {
  return {
  id: info.id,
  name: info.name,
  species: info.species || 'unknown',
  status: info.status || 'unknown',
  type: info.type || 'unknown',
  gender: info.gender || 'unknown',
  origin: info.origin.name || 'unknown',
  location: info.location.name || 'unknown',
  image: info.image,
}}
