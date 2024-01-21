import { connectionsrt } from "@/lib/db";
import { Product } from "@/lib/schema/product";

import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    // mongoose.set("strictQuery", true);
    // mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/ProductDb?retryWrites=true&w=majority', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   })
    //   .then(() => {
    //     console.log("Successfully connected to the Database");
    //     let data = Product.find()
    //   })
    //   .catch((err) => console.log(err));

    let data=[]
   try {
    await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/ProductDb?retryWrites=true&w=majority');
    data = await Product.find();
   } catch (error) {
    data={success:false}
   }
    return NextResponse.json({data})
}


export async function POST(request){
    let payload = request.json();
    await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/ProductDb?retryWrites=true&w=majority')
    let add = new Product(payload);
    const resultadd = await add.save();
    return NextResponse.json({resultadd,success:true})
}