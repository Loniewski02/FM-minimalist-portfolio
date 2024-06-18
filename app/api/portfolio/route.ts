import { NextRequest } from "next/server";
import connectDB from "@/config/database";
import Project from "@/models/Project";

// GET /api
export const GET = async (req: Request | NextRequest) => {
    try {
        await connectDB();

        const portfolioProjects = await Project.find({});

        return new Response(JSON.stringify(portfolioProjects), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Something went wrong", { status: 500 });
    }
};
