import { NextApiRequest, NextApiResponse } from "next";
import { hashSync, genSaltSync } from "bcryptjs";
import { Prisma } from "@prisma/client";

import { prisma } from "../../../db/db";
import generateAccessToken from "../../../lib/generate-token";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
	// Only allow POST requests
	if (req.method !== "POST") {
		res.status(405).send({ message: `Method "${req.method}" not allowed` });
	}

	const { name, email, password, confirmPassword } = req.body;

	// Validate data
	const emailPattern = new RegExp(
		"^[a-z0-9!#$%&/'*+/=?^_`{|}~-]+(?:/.[a-z0-9!#$%&/'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
	);

	if (!name) {
		res.status(400).json({ code: 0, message: "Please enter a name" });
	}
	if (name.length > 20) {
		res.status(400).json({ code: 1, message: "Name can't be longer than 20 characters" });
	}
	if (!email || emailPattern.test(email)) {
		res.status(400).json({ code: 2, message: "Invalid email" });
	}
	if (!password || password.length < 8) {
		res.status(400).json({ code: 3, message: "Password must contain at least 8 characters" });
	}
	if (!confirmPassword || password !== confirmPassword) {
		res.status(400).json({ code: 4, message: "Your passswords do not match" });
	}

	// Hash password
	const salt = genSaltSync();
	const hashedPassword = hashSync(password, salt);

	try {
		// Creat user
		const user = await prisma.user.create({ data: { name, email, password: hashedPassword } });

		// Generate JWT
		const token = generateAccessToken(user.id);

		res.json({ isLoggedIn: true, token, name: user.name, verified: user.verified });
	} catch (error) {
		// If email already exists in the databes
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			res.status(409).json({ code: error.code, message: "Email already exists" });
		}

		res.status(500);
	}
}
