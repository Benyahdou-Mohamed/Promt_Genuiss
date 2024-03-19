import { model,models,Schema } from "mongoose";



const PromptSchema= new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    
    prompt:{
        type:String,
        require:[true,'Prompt is required'],

    },
    tag:{
        type:String,
        require:[true,'tag is required'],
    }
})
const Prompt = models.PromptSchema || model("Prompt",PromptSchema)
export default Prompt