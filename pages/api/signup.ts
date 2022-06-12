import { NextApiRequest, NextApiResponse } from "next";
import { User } from 'src/utils/types'
import data from 'src/code_folder/user.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { user, password } = req.body;
}