const { userModel } = require("../model/User.js")

exports.signup = async (req, res)=>{
  try {

   
    // collect user details and store in database

    const user = await userModel.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone : req.body.phone,
      email : req.body.email
    })
    

    // create link 
    const link = `${req.headers.host}/${user.phone}`
    console.log(link)

    res.cookie("phone", req.body.phone)
    res.status(200).json({
      status: "success",
      message: "successfuly register, kindly refer your friends",
      link: link
  
  
    })
  
    
  } catch (error) {
    console.log(error)
    
  }
  }

  exports.winners = async(req, res)=>{
    try {
      const winner = await userModel.find({}).sort({
        entries: -1
      }).limit(10)

      res.send(winner)
    } catch (error) {
      console.log(error)
      
    }


  }