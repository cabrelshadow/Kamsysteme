const passport=require("passport");
const db=require("../models");
const router=require("express").Router();


router.post("/add-section", async (req ,res)=>{
      if(Object.keys(req.body).length>0){
        const{name}=req.body;
        await db.Sections.create({
           name:String(name).toLocaleUpperCase()
        });
        res.redirect(req.header.referer);
      }
});
module.exports= router;