import env from '../src/envConfig.js'
import {User, Product, Item, Landing} from '../src/db.js'



describe('Iniciando tests, probando variables de entorno del archivo "envConfig.js" y existencia de tablas en DB.',()=>{
    afterAll(()=>{
     console.log('Finalizando todas las pruebas...')
    })
    
    it('Deberia retornar el estado y la variable de base de datos correcta', ()=>{
        const formatEnvInfo =`Servidor corriendo en: ${env.Status}\n` +
                   `Base de datos de testing: ${env.ConnectDb}\n` +
                   `DialectOptions (ssl, deberia estar en false): ${env.optionRender}`;
     expect(formatEnvInfo).toBe(`Servidor corriendo en: testing\n` +
        `Base de datos de testing: postgres://postgres:antonio@localhost:5432/testing\n` +
        `DialectOptions (ssl, deberia estar en false): false`)
    })
    
    it('Deberia responder a una consulta en la base de datos con un arreglo vacío', async()=>{
        const users = await User.findAll()
        const products = await Product.findAll()
        const items = await Item.findAll()
        const landing = await Landing.findAll()
        expect(users).toEqual([]);
        expect(products).toEqual([]);
        expect(items).toEqual([]);
        expect(landing).toEqual([])
    })
})