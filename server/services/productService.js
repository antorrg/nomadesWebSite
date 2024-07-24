import axios from 'axios'
import { parseCharacter } from './helpers/filter.js'


export default {
    getProductServ : async()=>{
          try {
            const response = await axios(`https://rickandmortyapi.com/api/character`)
            if(!response){const error = new Error('Product not found'); error.status = 404; throw error}
            return parseCharacter(response.data.results, false)
          } catch (error) {
            throw error;
          }
    },
    getProductByIdServ: async(id)=>{
      console.log('soy idserv: ', id)
        try {
            const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
            if(!response){const error = new Error('Product not found'); error.status = 404; throw error}
            return parseCharacter(response.data, true)
          } catch (error) {
            throw error;
          }
    }
}