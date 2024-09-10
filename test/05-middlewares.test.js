import serverTest from './helperTest/serverTest.js'
import session from 'supertest'
const agent = session(serverTest)
import * as store from './helperTest/testStore.js'
import midd from '../src/middlewares/middlewares.js'



describe('Tests de middlewares',()=>{
    describe('Middleware "holderCreate", de validacion de usuario (creacion y login)', ()=>{
        it('Deberia permitir el paso si el email y el password son correctos', async()=>{
            const user = {email: 'usuarioejemplo@nose.com', password: "L1234567"}
            const response = await agent
             .post(`/test/user/create`)
             .send(user)
             .expect('Content-Type', /json/)
             .expect(200)
             expect(response.body).toEqual({ message: 'Passed middleware' })
        })
        it('Deberia arrojar un error si faltara el email', async()=>{
            const user = {password: "L1234567"}
            const response = await agent
             .post(`/test/user/create`)
             .send(user)
             .expect('Content-Type', /json/)
             .expect(400)
             expect(response.body).toEqual({ error: "missing email" })
        })
        it('Deberia arrojar un error si el formato del email no es correcto', async()=>{
            const user = {email: 'usuarioejemplo@nosecom', password: "L1234567"}
            const response = await agent
             .post(`/test/user/create`)
             .send(user)
             .expect('Content-Type', /json/)
             .expect(400)
             expect(response.body).toEqual({ error: "invalid email format" })
        })
        it('Deberia arrojar un error si faltara el password', async()=>{
            const user = { email: 'usuarioejemplo@nose.com',}
            const response = await agent
             .post(`/test/user/create`)
             .send(user)
             .expect('Content-Type', /json/)
             .expect(400)
             expect(response.body).toEqual({error: "missing password"})
        })
        it('Deberia arrojar un error si el formato del password no es correcto', async()=>{
            const user = {email: 'usuarioejemplo@nose.com', password: "l1234567"}
            const response = await agent
             .post(`/test/user/create`)
             .send(user)
             .expect('Content-Type', /json/)
             .expect(400)
             expect(response.body).toEqual({ error: "invalid password format. Pass musk contain at least 8 char and 1 cap.letter"})
        })
    })
    describe('Middleware "middUuid" validacion de uuid del usuario', ()=>{
        it('Deberia permitir el acceso si hay un uuid valido', async()=>{
            const id = "c1d970cf-9bb6-4848-aa76-191f905a2edd"
            const response = await agent
             .get(`/test/users/${id}`)
             .expect(200);
             expect(response.body).toEqual({ message: 'Passed middleware' })    
        })
        it('Deberia arrojar un error si no hay un uuid valido', async()=>{
            const id = "c1d970cf-9bb6-4848-aa76191f905a2edddd" //uuid invalido
            const response = await agent
             .get(`/test/users/${id}`)
             .expect(400);
             expect(response.body).toEqual({ error: 'Invalid uuid' })    
        })
    })
    describe('Middleware "updHolderMidd" de edicion de usuario', ()=>{
        it('Deberia pasar si los elementos del body estan y son correctos', async()=>{
            const newData = {email: 'll', given_name: 'll', picture: 'll', country: 'll', role: 1, enable: true}
            const id = "c1d970cf-9bb6-4848-aa76-191f905a2edd"
            const response = await agent
            .put(`/test/user/${id}`)
            .send(newData)
            .expect('Content-Type', /json/)
            .expect(200)
            expect(response.body).toEqual({ message: 'Passed middleware' })
        })
        it('Deberia arrojar un error si faltan elementos en el body', async()=>{
            const newData = {email: 'll', picture: 'll', country: 'll', role: 1, enable: true}
            const id = "c1d970cf-9bb6-4848-aa76-191f905a2edd"
            const response = await agent
            .put(`/test/user/${id}`)
            .send(newData)
            .expect('Content-Type', /json/)
            .expect(400)
            expect(response.body).toEqual({ error: `Missing fields: given_name` })
        })
        it('Deberia arrojar un error si el body no estuviera', async()=>{
            const newData = {}
            const id = "c1d970cf-9bb6-4848-aa76-191f905a2edd"
            const response = await agent
            .put(`/test/user/${id}`)
            .send(newData)
            .expect('Content-Type', /json/)
            .expect(400)
            expect(response.body).toEqual({ error: 'Missing body' })
        })
    })
    describe('Middleware "createMidd" de creacion de page & item (creacion inicial)', ()=>{
        it('Deberia pasar si el body contiene todos los elementos.', async()=>{
            const body = {title: 'r', landing: 'r', logo: 'r', info_header:'r', info_body: 'r', url: 'r', items: [{url:'r', text: 'r'}]}
            const response = await agent
             .post('/test/page')
             .send(body)
             .expect('Content-Type', /json/)
             .expect(200)
             expect(response.body).toEqual({ message: 'Passed middleware' })
        })
        it('Deberia arrojar un error si falta alguna propiedad.', async()=>{
            const body = {title: 'r',  logo: 'r', info_header:'r', info_body: 'r', url: 'r', items: [{img:'r', text: 'r'}]}
            const response = await agent
             .post('/test/page')
             .send(body)
             .expect('Content-Type', /json/)
             .expect(400)
             expect(response.body).toEqual({error: 'missing parameter'})
        })
    })
    describe('Middleware "createItem" creacion individual de Items.', ()=>{
        it('Deberia pasar si el body contiene todos las propiedades.', async()=>{
            const body = {img:'r', text: 'r', id: 1}
            const response = await agent
             .post('/test/item')
             .send(body)
             .expect('Content-Type', /json/)
             .expect(200)
             expect(response.body).toEqual({ message: 'Passed middleware' })
        })
        it('Deberia arrojar un error si falta alguna propiedad.', async()=>{
            const body = {img:'r', id: 1}
            const response = await agent
             .post('/test/item')
             .send(body)
             .expect('Content-Type', /json/)
             .expect(400)
             expect(response.body).toEqual({ error: `Missing fields: text` })
        })
    })
    describe('Middleware "protectParam", proteccion de rutas con id numericos (integer).', ()=>{
        it('Deberia permitir el acceso si hay un id valido (integer).', async()=>{
            const id = 88;
            const response = await agent
             .get(`/test/${id}`)
             .expect(200);
             expect(response.body).toEqual({ message: 'Passed middleware' })    
        })
        it('Deberia arrojar un error si no es un numero entero valido', async()=>{
            const id = "55,7"
            const response = await agent
             .get(`/test/${id}`)
             .expect(400);
             expect(response.body).toEqual({ error: 'Parámetros no permitidos'})    
        })
    })
    describe('Middleware "UpdHome" de actualizacion de page', ()=>{
        it('Deberia pasar si el body contiene todos los elementos.', async()=>{
            const id = 1;
            const body = {title: 'r', landing: 'r', logo: 'r', info_header:'r', info_body: 'r', url: 'r'}
            const response = await agent
             .put(`/test/page/${id}`)
             .send(body)
             .expect('Content-Type', /json/)
             .expect(200)
             expect(response.body).toEqual({ message: 'Passed middleware' })
        })
        it('Deberia arrojar un error si falta alguna propiedad.', async()=>{
            const id = 1;
            const body = {title: 'r',  logo: 'r', info_header:'r', info_body: 'r', url: 'r'}
            const response = await agent
             .put(`/test/page/${id}`)
             .send(body)
             .expect('Content-Type', /json/)
             .expect(400)
             expect(response.body).toEqual({error: 'missing parameter'})
        })
    })
})
