import { prisma } from "~/server/db/client";
import bcrypt from "bcryptjs";

(() => {
  const users = [
    {
      name: "Admin",
      email: "admin@gbaajakarta.com",
      password: "h@lLoGBAAjakarta62",
    },
  ];
  users.map((user) => {
    const hash = bcrypt.hashSync(user.password);
    prisma.user.create({
      data: {
        ...user,
        password: hash,
      },
    });
  });
})();
