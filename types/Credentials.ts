import { z } from "zod";

// Schema and type for user login up credentials
export const UserLoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, { message: "Password must contain at least 8 characters" })
});

export type UserLogin = z.infer<typeof UserLoginSchema>;

// Schema and type for user sign up credentials
export const UserSignUpSchema = z
	.object({
		name: z.string().max(20, { message: "Name can't be longer than 20 characters" }),
		email: z.string().email(),
		password: z.string().min(8, { message: "Password must contain at least 8 characters" }),
		confirmPassword: z.string()
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Your passswords do not match",
		path: ["confirmPassword"]
	});

export type UserSignUp = z.infer<typeof UserSignUpSchema>;
