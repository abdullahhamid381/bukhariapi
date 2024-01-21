import { Bukhari } from "@/lib/schema/bukhari";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let bukhariget = []
    try {
        await mongoose.connect('mongodb+srv://abdullahhamid381:abdullahhamid786@cluster0.siyjtub.mongodb.net/BukhariDB?retryWrites=true&w=majority')
        bukhariget = await Bukhari.find()
    } catch (error) {
        bukhariget = { success: false }
    }

    return NextResponse.json({ bukhariget, success: true })
}


export async function POST() {
    let addbukhari = new Bukhari(
        {
            Baab:
                "A statement of revelation",
            Book:
                "Sahih Bukhari",
            Chapter:
                "The Book Of Revelation",
            Status:
                "Correct",
            Hadith:
                "2",
        }
    );
    const resultadd = addbukhari.find();
    return NextResponse.json({ resultadd, success: true })
}