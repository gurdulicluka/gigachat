import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const allProfiles = await prisma.profile.findMany();

  if (allProfiles.length === 0) {
    return new NextResponse(`No profiles found`, {
      status: 404,
    });
  }
  // return NextResponse.json({ data: allProfiles }, { status: 200 });
  return NextResponse.json(allProfiles, { status: 200 });
}
