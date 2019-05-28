var express=require('express');
var router=express.Router();
var product=require('../Models/product');

router.post('/',function(req,res,next){
    const prod=new product({
        name:req.body.name,
        price:req.body.price
    });
    prod.save(function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

router.get('/',function(req,res,next){
    product.find(function(err,docs){
        if(err){
            res.json(err);
        }
        else{
            res.json(docs);
        }
    });
});

router.delete('/:id',function(req,res,next){
    product.deleteOne({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports=router;