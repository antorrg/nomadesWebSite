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
import initialUser from './src/services/initialUser.js';


server.listen(env.Port, async()=>{
    try {
    await sequelize.sync({ force: false })
    await initialUser()
    console.log(`Server is listening at http://localhost:${env.Port}\nServer in ${env.Status} ✔️ .\nEverything is allright 😉!!`)
    } catch (error) {
     console.error('Error syncing database: ', error)
    }
})