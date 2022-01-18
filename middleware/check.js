const {userModel} = require("../model/User.js")
exports.check = async (req, res, next)=>{

    try {
        console.log(req.params)

    //{ id: '08067105592' }

    //check if cookies is available

    
    const referrer = await userModel.findOne({phone : req.params.id})

    if (req.cookies.phone == referrer.phone){
        res.send("You are not eligible to register")
    }


    referrer.entries = referrer.entries + 1

    console.log(referrer.entries)

    await referrer.save()




    next()
        
    } catch (error) {
        console.log(error)
        
    }
}
