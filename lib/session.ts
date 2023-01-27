import type { IronSessionOptions } from "iron-session";
import type { User } from "../types/User";

export const sessionOptions: IronSessionOptions = {
	cookieName: "inquire",
	password: process.env.SESSION_PASSWORD as string,
	cookieOptions: {
		secure: process.env.NODE_ENV === "production"
	}
};

declare module "iron-session" {
	interface IronSessionData {
		user?: User;
	}
}
