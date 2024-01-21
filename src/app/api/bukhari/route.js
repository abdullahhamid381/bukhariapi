import { Bukhari } from "@/lib/schema/bukhari";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
let bukhariget = []
try {
    await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/BukhariDb?retryWrites=true&w=majority')
bukhariget = Bukhari.find()
} catch (error) {
    
}

    return NextResponse.json({})
}