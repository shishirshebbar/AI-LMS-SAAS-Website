import { inngest } from "@/inngest/client";
import { db } from "@/utils/database";
import { STUDY_TYPE_TABLE } from "@/utils/dbschema";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { chapters, courseId, type } = await req.json();

    // Generate prompt based on type
    const prompt = 
        type === 'cards' ?
            "Generate flashcards based on the topic: " + chapters + " with both front and back content, maximum of 15." :
        type === 'test' ?
            "Generate Quiz based on the topic: " + chapters + " with question and options along with the correct answer in JSON format (maximum 10)." :
        type === 'qa' ?
            "Generate a set of Q&A pairs based on the topic: " + chapters + " with detailed answers (maximum 10) in JSON format..It should contain only question and answers ..no id" :
            null;

    if (!prompt) {
        return NextResponse.json({ error: "Invalid study type." }, { status: 400 });
    }

    // Save to database
    const result = await db.insert(STUDY_TYPE_TABLE).values({
        courseId: courseId,
        type: type
    }).returning({ id: STUDY_TYPE_TABLE.id });

    if (!result.length) {
        return NextResponse.json({ error: "Failed to insert record." }, { status: 500 });
    }

    // Trigger Inngest
    inngest.send({
        name: 'studyType.content',
        data: {
            studyType: type,
            prompt: prompt,
            courseId: courseId,
            recordId: result[0].id
        }
    });

    return NextResponse.json({ id: result[0].id });
}
