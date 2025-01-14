import { db } from "@/utils/database";
import { STUDY_MATERIAL } from "@/utils/dbschema";
import { chatSession } from "@/utils/GeminiAI";
import { NextResponse } from "next/server";

export async function POST(req) {
    let payload;
    try {
        payload = await req.json();
    } catch (error) {
        return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
    }

    const { courseId, topic, courseType, difficultyLevel, createdBy } = payload;

    if (!courseId || !topic || !courseType || !difficultyLevel || !createdBy) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    //generate course
    const userprompt = 
        `Generate a study material for ${topic} for ${courseType} ` +
        `having ${difficultyLevel} level of difficulty with a short summary of each course, ` +
        `list of chapters along with summary for each course, topic list in JSON format`;

    let geminiresponse;
    try {
        geminiresponse = await chatSession.sendMessage(userprompt);
    } catch (error) {
        return NextResponse.json({ error: "Error generating course layout", details: error.message }, { status: 500 });
    }

    let result;
    try {
        result = JSON.parse(geminiresponse.response.text());
    } catch (error) {
        return NextResponse.json({ error: "Invalid AI response format", details: error.message }, { status: 500 });
    }
    //save input
    let databaseresult;
    try {
        databaseresult = await db.insert(STUDY_MATERIAL).values({
            courseId,
            courseType,
            createdBy,
            topic,
            courseLayout: result,
        }).returning({resp:STUDY_MATERIAL});
    } catch (error) {
        return NextResponse.json({ error: "Error saving to database", details: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, result: databaseresult[0] });
}

// import { db } from "@/utils/database";
// import { STUDY_MATERIAL } from "@/utils/dbschema";
// import { chatSession } from "@/utils/GeminiAI";
// import { NextResponse } from "next/server";


// export async function POST(req) {
    
//     const {courseId,topic,courseType,difficultyLevel,createdBy}=await req.json();
    
//     const userprompt = "Generate a study material for " + topic + "for" + courseType + "having" + difficultyLevel + "level of difficulty with a short summary of each course,list of chapters along with summary for each course,topic list in JSON format"
//     //generate course
//     const geminiresponse = await chatSession.sendMessage();
//     const result = JSON.parse(geminiresponse.response.text());



//     //save input
    
//     const databaseresult = await db.insert(STUDY_MATERIAL).values({
//         courseId:courseId,
//         courseType:courseType,
//         createdBy:createdBy,
//         topic:topic,
//         courseLayout:result
//     }).returning({STUDY_MATERIAL});
//     console.log(databaseresult);

//     return NextResponse.json({result:databaseresult[0]})
// }