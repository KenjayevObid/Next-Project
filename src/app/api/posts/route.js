import { NextResponse } from "next/server";
import connectDB from '../../../lib/db'
import Post from '../../../models/Post'


export const GET = async () => {
try {
    await connectDB();
    const posts = await Post.find()
    return NextResponse(JSON.stringify(posts), {status: 200})
} catch (error) {
    return NextResponse('Error', {status: 500})
}
}