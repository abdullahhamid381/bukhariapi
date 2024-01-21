import { Product } from "@/lib/schema/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){

   let data= []
   try {
    await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/?retryWrites=true&w=majority');
    data = await Product.found()
   } catch (error) {
    data={success:false}
   }
    return NextResponse.json({result:data})
}


