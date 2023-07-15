import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.profile.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      username: "Admin",
      email: "admin@admin.com",
      userId: "123456",
    },
  });

  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
