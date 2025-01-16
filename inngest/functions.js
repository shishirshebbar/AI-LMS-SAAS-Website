import { db } from "@/utils/database";
import { NOTES, STUDY_MATERIAL, STUDY_TYPE_TABLE, USER } from "@/utils/dbschema";
import { eq } from "drizzle-orm";
import React from "react";
import { inngest } from "./client";
import { chaptercontent, GenerateStudyType } from "@/utils/GeminiAI";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

export const CreateNewUser=inngest.createFunction(
    {id:'create-user'},
    {event:'user.create'},
    async({event,step})=>{
        const {user} = event.data;
        const result = await step.run('check email and create new if not in database',async()=>{
            //if user already exists
        const result = await db.select().from(USER).where(eq(USER.email,user?.primaryEmailAddress?.emailAddress))
        console.log(result);
        //if not add to database
        if(result?.length==0){
            const userresponse = await db.insert(USER).values({
                name:user?.fullName,
                email:user?.primaryEmailAddress?.emailAddress
            }).returning({id:USER.id});
            return userresponse;
        }
        return result;
        })
        return 'Success'
    }
    //send welcome notification

    //send notifiacation after three days
)

export const GenerateNotes = inngest.createFunction(
    {id:'generate-course'},
    {event:'notes.generate'},
    async({event,step})=>{
        const {course}  = event.data;//collect info
        //generate notes
        const notes = await step.run('Generate chapter notes',async()=>{
            const Chapters = course?.courseLayout?.chapters;
            let index=0;
            Chapters.forEach(async(chapter)=>{
                    const Prompt = 'Generate study material for each chapter ,ensure it includes all topic pints in the content,ensure to provide content in HTML format(do not include any tags such as head tag,body tag, HTML tag,title tag,/n tag),let the format be chapter no,chapter title and followed by summary .The chapters are: '+JSON.stringify(chapter);
                    const result = await chaptercontent.sendMessage(Prompt);
                    const response=result.response.text();
                    await db.insert(NOTES).values({
                        chapterId:index,
                        courseId:course?.courseId,
                        notes:response
                    })
                    index=index+1;

                })
                return 'Completed'
        })

        //change status from generating to ready
        const updatestatus=await step.run('Update Course Status to ready',async()=>{
            const result = await db.update(STUDY_MATERIAL).set({
                status:'Ready'
            }).where(eq(STUDY_MATERIAL.courseId,course?.courseId))
            return 'Success';
        })
    }
)


export const GenerateTypeContent = inngest.createFunction(
    {id:'Genrate Study Type Content'},
    {event:'studyType.content'},
    async({event,step})=>{
        const {studyType,prompt,courseId,recordId} = event.data;
        const flashcardairesult = await step.run('Generating Flashcard using AI',async()=>{
            const result = await GenerateStudyType.sendMessage(prompt);
            const airesult =JSON.parse(result.response.text());
            return airesult
        })
        //save the result
        const dbresult =await step.run('Save result to DB',async()=>{
            const result = await db.update(STUDY_TYPE_TABLE).set({
                    
                content:flashcardairesult,
                status:'Ready'
            }).where(eq(STUDY_TYPE_TABLE.id,recordId))
            return "Data inserted"
        })
    }
)