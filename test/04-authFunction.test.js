import validServer from './helperTest/validServer.js'
import request from 'supertest'
import * as store from './helperTest/testStore.js'
import auth from '../src/middlewares/validation/index.js'


describe('Test de middlewares de autenticacion y autorizacion', ()=>{
    describe('Funciones "session" y "jsonwebtoken",, "generateToken" y "verifyToken" (a traves de controlador) ', ()=>{
        let server; // Almacena el servidor para cerrarlo después
        let agent;  // Para mantener la sesión persistente
      
        beforeAll((done) => {
          server = validServer.listen(4000, done); // Inicia el servidor en un puerto disponible
          agent = request.agent(server); // Inicializa supertest con la app
        });
        afterAll((done) => {
            server.close(done); // Cierra el servidor después de las pruebas
          });
        
            it('Deberia iniciar sesión y generar un token', async()=>{
            const user = { id: 556, email: 'josenomeacuerdo@nose.com', role: 9 }
            const response = await agent
            .post('/test/user/init')
            .send({user})
            .expect('Content-Type', /json/)
            .expect(200);
            expect(response.body).toHaveProperty('message', 'Passed middleware');
            expect(response.body).toHaveProperty('token');
      // Validamos que el token se haya guardado en el store
              const storedToken = store.getToken();
              expect(storedToken).toBe(response.body.token); 
        })
        it('Deberia permitir el paso si está presente el token', async()=>{
            const user = { id: 556, email: 'josenomeacuerdo@nose.com', role: 9 }
            const token = store.getToken()
            const response = await agent
             .post('/test/user')
             .send({user})
             .set('Authorization', `Bearer ${token}`)
             .expect('Content-Type', /json/)
             .expect(200);
             expect(response.body).toEqual({ message: 'Passed middleware' })       
        })
        it('Deberia negar el paso si no está presente el token o este no es valido', async()=>{
            const user = { id: 556, email: 'josenomeacuerdo@nose.com', role: 'user'}
            const response = await agent
             .post('/test/user')
             .send({user})
             .set('Authorization', `Bearer pepito`)
             .expect('Content-Type', /json/)
             .expect(401);
             expect(response.body).toEqual("Token o sesión invalidos!")       
        })
        it('Deberia decodificar el id y el role del usuario en un objeto: "req.UserInfo"', async()=>{
            const token = store.getToken()
            const compare = { userId: 556, userRole: 9}
            const response = await agent
             .get('/test/user')
             .set('Authorization', `Bearer ${token}`)
             .expect(200);
             expect(response.body).toEqual(compare)    
        })
        it('El cierre de sesion deberia invalidar el token', async()=>{
            const token = store.getToken()
            const logout = await agent
            .get('/test/user/logout')
            .expect(200)
            expect(logout.body).toEqual('Sesion cerrada')
            const response = await agent
             .get('/test/user')
             .set('Authorization', `Bearer ${token}`)
             .expect('Content-Type', /json/)
             .expect(401);
             expect(response.body).toEqual("Token o sesión invalidos!")   
        })
    });
})