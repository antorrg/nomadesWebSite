import sv from '../../services/landingService.js'
import eh from "../../utils/errorHandlers.js"

export default {
    createLandingController : eh.catchAsync(async(req, res)=>{}),
    updLandingController : eh.catchAsync(async(req, res)=>{}),
    deleteLandingController : eh.catchAsync(async(req, res)=>{}),
    getLandingController : eh.catchAsync(async(req, res)=>{
        const response = await sv.getLandings()
        res.status(200).json(response)
    }),
    detailLandingController : eh.catchAsync(async(req, res)=>{}),
}