import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClient | undefined;
};

const prismaClientSingleton = () => {
	return new PrismaClient({
		log: ["query", "error", "warn"],
	});
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

prisma
	.$connect()
	.then(() => {
		console.log("Successfully connected to database");
	})
	.catch((error: Error) => {
		console.error("Failed to connect to database:", error);
	});
