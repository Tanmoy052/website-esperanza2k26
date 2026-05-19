"use server"

import { Events } from "@/models/events.model"
import { User } from "@/models/user.model"
import { connectDB } from "@/utils/db/connect"

const eventRegister = async (uniqueId:number,userEmail?:string) => {
    if(!userEmail){
        return null
    }
    try {
        await connectDB()
        const user = await User.findOne({ "credentials.email" : userEmail }) 
        if(!user){
            return null
        }
        const event = await Events.findOne({ uniqueId }) 
        if(!event){
            return null
        }
        if(event.participants.includes(user._id)){
            return {
                message: `${user.name} is Already registered`
            }
        }
        event.participants.push(user._id)
        await event.save()
        user.registeredEvents.push(event._id)
        await user.save()
        return {
            message: `${user.name} registered for ${event.eventName}`,
        }
    } catch (error:any) {
        return {
            message: "Error registering for event",
            error: error.message,
        }
    }
}

export { eventRegister }