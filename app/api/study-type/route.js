import { inngest } from "@/inngest/client";
import { db } from "@/utils/database";
import { STUDY_TYPE_TABLE } from "@/utils/dbschema";
import { NextResponse } from "next/server";

export async function POST(req){
    const {chapters,courseId,type}=await req.json();
    const prompt= "Generate flashcards based on the topic: "  + chapters + "with both front and back content,maximum of 15";
    //save to db
    const result = await db.insert(STUDY_TYPE_TABLE).values({
        courseId:courseId,
        type:type
    }).returning({id:STUDY_TYPE_TABLE.id});
    //trigger inggest
    inngest.send({
        name:'studyType.content',
        data:{
            studyType:type,
            prompt:prompt,
            courseId:courseId,
            recordId:result[0].id
        }
    })
    return NextResponse.json(result[0].id)
}