import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const GET = async (request,{params}) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}


//patch 
export const PATCH = async(request,{params})=>{
    const {prompt,tag}= await request.json()
    try {
        await connectToDB()
        const exsistingPrompt = await Prompt.findById(params.id)
        if(!exsistingPrompt){
            return new Response("Prompt Not Found", { status: 404 })
        }
        exsistingPrompt.prompt =prompt;
        exsistingPrompt.tag=tag
        await exsistingPrompt.save()
        return new Response(JSON.stringify(exsistingPrompt), { status: 200 })


    } catch (error) {
        return new Response("Failed to Update  prompts", { status: 500 })
    }

}
export const DELETE = async(request,{params})=>{

    try {
        await connectToDB()
        await Prompt.findByIdAndDelete(params.id)
        
        return new Response("Prompt deleted Successfully", { status: 200 })


    } catch (error) {
        return new Response("Failed to Delete  prompts", { status: 500 })
    }
}