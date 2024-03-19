import { Schema,model,models } from "mongoose";

const UserSchema= new Schema({
    email:{
        type:String,
        unique:[true,'Email Already Exists!'],
        require:[true,'email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },
    image:{
        type:String,
    }

})
 //the models object is provided by mongoose , if a model named "Used"
 //already excist in the "models" if assign that excisting model to the "User variable 
 //this prevent redefining the model ", if not the model that we call create a new model 
 //this used because next js dont connect always with database , it connect until the route is called
const User = models.User || model("User",UserSchema)
export default User;