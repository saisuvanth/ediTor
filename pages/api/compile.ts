import { exec } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";
import { CompileRequest } from "../../src/utils/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { code, filename }: CompileRequest = req.body;
	console.log(code, filename);
	const ext = code.split('.').pop();
	console.log(ext);

}