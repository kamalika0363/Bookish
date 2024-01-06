import {NextResponse} from "next/server";

const { Client } = require("@notionhq/client")

import {NextApiResponse, NextApiRequest} from "next";


const notion = new Client({
    auth: process.env.NOTION_API
})

export const GET = async(request) => {
    const data = await notion.databases.query({
        database_id: process.env.NOTION_DB,
    })


    const all_data = data.results.map((c) => c.properties)

    const extract_data = all_data
        .filter((c) => c.status && c.status.select && c.status.select.name === "Completed")
        .map((c) => ({
        author: c.author.rich_text[0].text.content,
        summary: c.summary.rich_text[0].text.content,

    }))
    return NextResponse.json(extract_data)
}
