// https://localhost:3000/api/users/register
import { connectDB } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
connectDB();

export async function POST(req: NextRequest) {
  return NextResponse.json({
    message: "users/register api accessed with POST method",
  });
}
