import prisma from "../lib/prisma";
import { compareSync, hashSync } from "bcryptjs";

const PasteResolvers = {
	getAll: (_: any) => prisma.paste.findMany(),

	addNew: async (
		_: any,
		{
			title,
			content,
			hasPassword,
			password,
		}: {
			title: string;
			content: string;
			hasPassword: boolean;
			password: string;
		}
	) => {
		const passwordHash = hasPassword ? hashSync(password, 10) : null;

		return await prisma.paste.create({
			data: { content, title, hasPassword, passwordHash },
		});
	},

	getById: async (
		_: any,
		{ id, password }: { id: number; password?: string }
	) => {
		const paste = await prisma.paste.findFirst({ where: { id } });
		if (!paste) return null;
		if (paste.hasPassword && !password) return null;

		if (paste.passwordHash && password) {
			const passwordValid = compareSync(password, paste.passwordHash);
			if (!passwordValid) return null;

			return paste;
		}

		return paste;
	},
};

export default PasteResolvers;
