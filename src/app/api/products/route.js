import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){

     await mongoose.connect('')
    return NextResponse.json({result:true})
}


