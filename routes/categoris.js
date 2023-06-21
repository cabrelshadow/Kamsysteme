const passport=require("passport");
const db=require("../models");
const router=require("express").Router();

router.post("/add-categorie",async(req , res)=>{
    if(Object.keys(req.body).length>0){
        const { nom_categorie}=req.body;
        await db.Categories.create({
            nom_categorie:String(nom_categorie).toLocaleUpperCase(),

        }).the(()=>{
            return res.redirect(req.headers.referer);
        });
    }
});
module.exports= router;