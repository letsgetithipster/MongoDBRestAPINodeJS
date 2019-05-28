const db=require('../dbconnection');

const productSchema=db.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true}
});

module.exports=db.model('Product',productSchema);