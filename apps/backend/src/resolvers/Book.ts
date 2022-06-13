import prisma from "../lib/prisma";

const BookResolvers = {
	queries: {
		all: (_: any, {}) => prisma.book.findMany(),
		single: (_: any, { id }: { id: number }) =>
			prisma.book.findFirst({ where: { id } }),
	},
	mutations: {
		addBook: (_: any, { title }: { title: string }) =>
			prisma.book.create({ data: { title, author: "xyz" } }),
	},
};

export default BookResolvers;
