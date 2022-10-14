const {model, Schema}= require('mongoose');

const RegionSchema=new Schema({
   crop_name: { type: String, required: true },
   region: {type: String, required: true},
})

const RegionModel = model ('Region',RegionSchema);
module.exports=RegionModel;
