const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
const connection=require("./config/db");
// const passport=require("./config/google_auth");
const OrganizationController=require("./routes/organization.routes");
const FieldController=require("./routes/field.routes");
const PropertyController=require("./routes/property.routes");
const RegionController=require("./routes/region.routes");

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  return res.status(201).send('Welcome to the Homepage of Syngenta');
})
/* Google Oauth */

// app.get("/auth/google",
//     passport.authenticate("google", { scope: ["profile", "email"] })
//   );
  
//   app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", {
//       failureRedirect: "/login",
//       session: false,
//     }),
//     async function (req, res) {
//       const email=req.user.email;
//       const userId=req.user._id;
//       res.status(201).send({"message":"login Success","email":email,"token":token})
//     }
//   );
/***********************************************************************************/

app.use("/Organization", OrganizationController);
app.use("/Field", FieldController);
app.use("/Property", PropertyController);
app.use("/Region", RegionController);

app.listen(process.env.PORT,async () => {
    try{
     await connection;
     console.log('connected to db');
    }
    catch(err){
     console.log('err');
    }
     console.log(`Example app listening on port ${process.env.PORT}!`)
 })
