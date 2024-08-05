import dotenv from 'dotenv'
dotenv.config()


//const ConnectDb = `postgres://${process.env.VITE_DB_USER}:${process.env.VITE_DB_PASSWORD}@${process.env.VITE_DB_HOST}/${process.env.VITE_DB_NAME}`
//console.log(process.env.VITE_GMAIL_USER)
export default {
 ConnectDb : process.env.VITE_RENDER_DB,
 SecretKey: process.env.VITE_SECRET_KEY,
 userImg: process.env.VITE_USER_IMG,
 gmailUser: process.env.VITE_GMAIL_USER,
 gmailPass: process.env.VITE_GMAIL_APP_PASS
}