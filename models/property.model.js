const {model, Schema}= require('mongoose');

const PropertySchema=new Schema({
   crop_name: { type: String, required: true },
   property: { type: String, required: true },
})

const PropertyModel = model ('Property',PropertySchema);
module.exports=PropertyModel;
