import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  const username = params.username;
  const profile = await prisma.profile.findFirst({
    where: {
      username: username,
    },
  });

  if (!profile) {
    return new NextResponse(`No username called ${username} found`, {
      status: 404,
    });
  }
  return NextResponse.json(profile);
}
