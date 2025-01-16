import { db } from "@/utils/database";
import { NOTES, STUDY_TYPE_TABLE } from "@/utils/dbschema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {courseId,studyType} = await req.json();

    if(studyType=="ALL"){
        const notes = await db.select().from(NOTES).where(eq(NOTES?.courseId,courseId))
        const contentlist = await db.select().from(STUDY_TYPE_TABLE).where(eq(STUDY_TYPE_TABLE?.courseId,courseId))
        const cards = contentlist && Array.isArray(contentlist) ? contentlist.find(item => item.type === "cards") : null;

console.log("Found cards:", cards);
        const result ={
            notes:notes,
            cards:contentlist?.find(item=>item.type=="cards"),
            test:contentlist?.find(item=>item.type=="test"),
            qa:contentlist?.find(item=>item.type=="qa")
        }
        return NextResponse.json(result);
    
    

    }
    else if(studyType=='notes'){
        const notes = await db.select().from(NOTES).where(eq(NOTES?.courseId,courseId))
        return NextResponse.json(notes);
    
    }
    else{
        const result = await db.select().from(STUDY_TYPE_TABLE)
        .where(and(eq(STUDY_TYPE_TABLE?.courseId,courseId),
        eq(STUDY_TYPE_TABLE.type,studyType)))
        
        return NextResponse.json(result[0]);

    }
}
