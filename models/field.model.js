const {model, Schema}= require('mongoose');

const FieldSchema=new Schema({
   crop_name: { type: String, required: true },
   field: { type: String, required: true },
})

const FieldModel = model ('Field',FieldSchema);
module.exports=FieldModel;
