const router =require("express").Router();
const Profile = require("../models/profile")

router.route("/add").post(async(req,res)=>{
    const {fname,lname,address,email,password,confirmPassword}=req.body;
    const phone=Number (req.body.phone)

    const newProfile =new Profile({
        fname,
        lname,
        address,
        email,
        phone,
        password,
        confirmPassword,
      
    })
    await newProfile.save().then(()=>res.status(200).json({success:true,message:"New User Added!"})).catch(err=>res.status(500).json({success:false,err}))
})

router.route("/get/:id").get(async (req, res) => {
    const { id } = req.params;

    await Profile.findById(id).then((profile) => res.status(200).json(profile)).catch(err => res.json({ err }))
})



module.exports = router;