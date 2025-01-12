import { db } from "@/utils/database";
import { USER } from "@/utils/dbschema";
import { eq } from "drizzle-orm";
import React from "react";
import { inngest } from "./client";

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