import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const allProfiles = await prisma.profile.findMany();
  return NextResponse.json({ data: allProfiles }, { status: 200 });
}
