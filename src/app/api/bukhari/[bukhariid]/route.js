import { Bukhari } from "@/lib/schema/bukhari";
import mongoose from "mongoose";
import { NextResponse } from "next/server"

export async function PUT(request,content){
    const bukhariID= content.params.bukhariid;
    const filter={_id:bukhariID}
    const payload =await request.json()
    console.log(payload)
await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/BukhariDB?retryWrites=true&w=majority')
const result = await Bukhari.findOneAndUpdate(filter,payload)
return NextResponse.json({result,success:true})
}

export async function GET(request,content){
    const bukhariID= content.params.bukhariid;
    const record={_id:bukhariID}
    const payload =await request.json()
    console.log(payload)
await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/BukhariDB?retryWrites=true&w=majority')
const result = await Bukhari.findOneAndUpdate(record,payload)
return NextResponse.json({result,success:true})
}