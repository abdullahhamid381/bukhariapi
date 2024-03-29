import { Bukhari } from "@/lib/schema/bukhari";
import mongoose from "mongoose";
import { NextResponse } from "next/server"


// FOR UPDATE

export async function PUT(request,content){
    const bukhariID= content.params.bukhariid;
    const filter={_id:bukhariID}
    const payload =await request.json()
    console.log(payload)
await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/BukhariDB?retryWrites=true&w=majority')
const result = await Bukhari.findOneAndUpdate(filter,payload)
return NextResponse.json({result,success:true})
}
// FOR GET INITIAL VALUE


export async function GET(request,content){
    const bukhariID= content.params.bukhariid;
    const record={_id:bukhariID}
await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/BukhariDB?retryWrites=true&w=majority')
const result = await Bukhari.findById(record)
return NextResponse.json({result,success:true})
}


// FOR DELTE

export async function DELETE(request,content){
    const bukhariID= content.params.bukhariid;
    const record={_id:bukhariID}
    await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/BukhariDB?retryWrites=true&w=majority');
    const result = await Bukhari.deleteOne(record)
return NextResponse.json({result,success:true})
}