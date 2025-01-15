import { db } from "@/utils/database";
import { NOTES } from "@/utils/dbschema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {courseId,studyType} = await req.json();
    if(studyType=="ALL"){
        const notes = await db.select().from(NOTES).where(eq(NOTES?.courseId,courseId))
        const result ={
            notes:notes,
            cards:null,
            test:null,
            qa:null
        }
        return NextResponse.json(result);
    
    
    }
}