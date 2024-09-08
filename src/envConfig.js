import dotenv from 'dotenv'
const envFile = process.env.NODE_ENV==='development'? '.env.development' : process.env.NODE_ENV==='test'? '.env.test': '.env';
dotenv.config({ path:envFile })

const {PORT, SECRET_KEY, DB_USER,  DB_PASSWORD,  DB_HOST,  DB_NAME, RENDER_DB, USER_IMG, GMAIL_USER, GMAIL_APP_PASS }=process.env;

const LocalDb = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

export default {
 Port: PORT,
 Status: process.env.NODE_ENV==='development'? 'development' : process.env.NODE_ENV==='test'? 'testing': 'production',
 ConnectDb : process.env.NODE_ENV==='production'? RENDER_DB : LocalDb,
 optionRender: process.env.NODE_ENV==='production'? true : false,
 SecretKey: SECRET_KEY,
 userImg: USER_IMG,
 gmailUser: GMAIL_USER,
 gmailPass: GMAIL_APP_PASS
}