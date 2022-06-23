import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(JSON.parse(req.body));
	const { user, password } = req.body;

}
