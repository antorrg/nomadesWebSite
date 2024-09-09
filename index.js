//todo  ##    ##  #######  ##     ##    ###    ########  ########  ######.
//todo  ###   ## ##     ## ###   ###   ## ##   ##     ## ##       ##    ##
//todo  ####  ## ##     ## #### ####  ##   ##  ##     ## ##       ##
//todo  ## ## ## ##     ## ## ### ## ##     ## ##     ## ######    ######.
//todo  ##  #### ##     ## ##     ## ######### ##     ## ##             ##
//todo  ##   ### ##     ## ##     ## ##     ## ##     ## ##       ##    ##
//todo  ##    ##  #######  ##     ## ##     ## ########  ########  ######.

//?    ##      ## ######## ########      ######  #### ######## ########  
//?    ##  ##  ## ##       ##     ##    ##    ##  ##     ##    ##
//?    ##  ##  ## ##       ##     ##    ##        ##     ##    ##  
//?    ##  ##  ## ######   ########      ######   ##     ##    ###### 
//?    ##  ##  ## ##       ##     ##          ##  ##     ##    ## 
//?    ##  ##  ## ##       ##     ##    ##    ##  ##     ##    ## 
//?     ###  ###  ######## ########      ######  ####    ##    ########
//*============ Sitio web creado a partir del 08/09/2024 ====================

import server from './src/app.js'
import env from './src/envConfig.js'
import {sequelize} from './src/db.js';


server.listen(env.Port, async()=>{
    try {
    await sequelize.sync({ force: false })
    console.log(`Server is listening in http://localhost:${env.Port}\nServer in ${env.Status} ✔️ .\nEverything is allright 😉!!`)
    } catch (error) {
     console.error('Error syncing database: ', error)
    }
})