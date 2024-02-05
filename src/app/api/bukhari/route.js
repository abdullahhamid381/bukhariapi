import { Bukhari } from "@/lib/schema/bukhari";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



// FOR GETt

export async function GET() {
    let bukhariget = []
    let success=true
    try {
        await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/BukhariDB?retryWrites=true&w=majority')
        bukhariget = await Bukhari.find()
    } catch (error) {
        bukhariget = { success: false }
        success=false
    }

    return NextResponse.json({ result:bukhariget, success})
}


// FOR POST METHOOD



export async function POST(request) {
    let payload = await request.json()
    await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/BukhariDB?retryWrites=true&w=majority')
    let addbukhari = new Bukhari(payload);
    const resultadd = await addbukhari.save();
    return NextResponse.json({ result:resultadd, success: true })
}