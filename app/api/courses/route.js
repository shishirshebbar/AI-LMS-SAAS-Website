import { db } from "@/utils/database";
import { STUDY_MATERIAL } from "@/utils/dbschema";
import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";  

export async function POST(req) {
    try {
  
        const { createdBy } = await req.json();

       
        if (!createdBy) {
            return NextResponse.json({ message: "Email address is required" }, { status: 400 });
        }

      
        const result = await db.select().from(STUDY_MATERIAL)
            .where(eq(STUDY_MATERIAL.createdBy, createdBy))
            .orderBy(desc(STUDY_MATERIAL.id));

      
        if (result.length === 0) {
            return NextResponse.json({ message: "No courses found for this user" }, { status: 404 });
        }

    
        return NextResponse.json({ result: result });
        
    } catch (err) {
        console.error('Error in POST /api/courses:', err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}


export async function GET(req) {
    // Get courseId from query parameters
    const { searchParams } = req.nextUrl;
    const courseId = searchParams.get('courseId');
    
    // Log courseId for debugging
    console.log("courseId:", courseId);
    
    if (!courseId) {
      return NextResponse.json({ error: "courseId is required" }, { status: 400 });
    }
  
    try {
      // Query the database to fetch the course by courseId
      const course = await db
        .select()
        .from(STUDY_MATERIAL)
        .where(eq(STUDY_MATERIAL?.courseId, courseId));
  
      // Log the course to verify the query result
      console.log("Course data:", course);
  
      // Return the first course or a not found response if no course is found
      if (course.length === 0) {
        return NextResponse.json({ error: "Course not found" }, { status: 404 });
      }
  
      return NextResponse.json({ result: course[0] });
    } catch (error) {
      console.error("Error fetching course:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }