import { sign } from "jsonwebtoken";

export default function generateAccessToken(id: string) {
	return sign(id, process.env.JWT_SECRET as string);
}
