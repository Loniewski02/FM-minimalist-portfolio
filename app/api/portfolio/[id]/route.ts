import { NextRequest } from "next/server";

import connectDB from "@/config/database";
import Project from "@/models/Project";

// GET /api/[id]
export const GET = async (
    req: Request | NextRequest,
    { params }: { params: { id: string } },
) => {
    try {
        await connectDB();

        const projectDetail = await Project.findById(params.id);
        return new Response(JSON.stringify(projectDetail), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Something went wrong", { status: 500 });
    }
};
