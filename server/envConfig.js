import dotenv from 'dotenv'
dotenv.config()
//process.env.NODE_ENV === 'production'

const  ConnectDb = process.env.NODE_ENV=== 'production'? process.env.VITE_RENDER_DB : `postgres://${process.env.VITE_DB_USER}:${process.env.VITE_DB_PASSWORD}@${process.env.VITE_DB_HOST}/${process.env.VITE_DB_NAME}`




console.log('Estoy aca y funciono: ',process.env.NODE_ENV)

//const ConnectDb = `postgres://${process.env.VITE_DB_USER}:${process.env.VITE_DB_PASSWORD}@${process.env.VITE_DB_HOST}/${process.env.VITE_DB_NAME}`
//console.log(process.env.VITE_GMAIL_USER)
export default {
 ConnectDb : ConnectDb,
 optionRender: process.env.NODE_ENV==='production'? true : false,
 SecretKey: process.env.VITE_SECRET_KEY,
 userImg: process.env.VITE_USER_IMG,
 gmailUser: process.env.VITE_GMAIL_USER,
 gmailPass: process.env.VITE_GMAIL_APP_PASS
}