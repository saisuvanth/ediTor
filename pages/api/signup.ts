import { NextApiRequest, NextApiResponse } from "next";
import { User } from 'src/utils/types'
import fileData from 'src/code_folder/user.json';
import { writeFile } from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { username, password } = JSON.parse(req.body);
	const user: User = { username, password };
	const data: User[] = fileData;
	data.push(user);
	writeFile('src/code_folder/user.json', JSON.stringify(data), (err) => err ? console.log(err) : null)
	res.json({ message: 'User created' });
}