import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "src/models";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(JSON.parse(req.body));
	const { username, password } = req.body;
	const { User } = await connectDB();
	const user = User.findOne({ username: username });

}
