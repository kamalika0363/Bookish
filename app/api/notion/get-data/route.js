import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { NextApiResponse, NextApiRequest } from "next";

const notion = new Client({
    auth: process.env.NOTION_API,
});

export const GET = async (request) => {
    try {
        const data = await notion.databases.query({
            database_id: "41b9c4334091442c86f60e4d8e25608f",
        });

        const extract_data = data.results
            .filter(
                (c) =>
                    c.properties.status &&
                    c.properties.status.select &&
                    c.properties.status.select.name === "Completed"
            )
            .map((c) => ({
                author: c.properties.author.rich_text[0]?.text.content || '',
                summary: c.properties.summary.rich_text[0]?.text.content || '',
                name: c.properties.name.title[0]?.text.content || '',
                image: c.properties.image?.files[0]?.external.url || '',
            }));

        return NextResponse.json(extract_data);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error(error.message, 500);
    }
};
