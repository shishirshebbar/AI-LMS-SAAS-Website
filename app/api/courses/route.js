import { db } from "@/utils/database";
import { STUDY_MATERIAL } from "@/utils/dbschema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";  // Make sure to import eq if using Drizzle ORM

export async function POST(req) {
    try {
  
        const { createdBy } = await req.json();

       
        if (!createdBy) {
            return NextResponse.json({ message: "Email address is required" }, { status: 400 });
        }

      
        const result = await db.select().from(STUDY_MATERIAL)
            .where(eq(STUDY_MATERIAL.createdBy, createdBy));

      
        if (result.length === 0) {
            return NextResponse.json({ message: "No courses found for this user" }, { status: 404 });
        }

    
        return NextResponse.json({ result: result });
        
    } catch (err) {
        console.error('Error in POST /api/courses:', err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
