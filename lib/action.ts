"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "@/lib//utils";
import { writeClient } from "@/sanity/lib/write-client";
import slugify from "slugify";

export const createPitch = async (state: any, form: FormData, pitch: string) => { // Getting necessary params in diff format.
    const session = await auth();

    // Extract session to know who is the author of the start up
    if(!session) return parseServerActionResponse({ error: 'Not signed in', status: 'ERROR'}); 

    // Extract all the values from the form.
    const { title, description, category, link } = Object.fromEntries(
        Array.from(form).filter(([key]) => key != 'pitch'),
    );

    // Create a slug 
    const slug = slugify(title as string, { lower: true, strict: true });

    try {
        const startup = {
            title,
            description,
            category,
            image: link,
            slug: {
                _type: slug,
                current: slug,
            },
            author: {
                _type: 'reference',
                _ref: session?.id,
            },
            pitch,
        };

        // Write to Sanity to write to the database.
        const result = await writeClient.create({ _type: 'startup', ...startup});
        return parseServerActionResponse({
            ...result,
            error: '',
            status: "SUCCESS",
        })
    } catch (error) {
        console.log(error);

        return parseServerActionResponse({ error: JSON.stringify(error), status: "ERROR"});
    }
}