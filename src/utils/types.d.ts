import type { NextPage } from "next";
import { IHomeActionEnum } from "./constants";

export type User = {
	username: string;
	password: string;
	tokens: [string];
}

export interface PrivatePage extends NextPage {
	private?: boolean;
}


export type FileAdd = {
	createFile: (name: string) => void;
}

export type CompileResponse = {
	filename: string;
	output: string;
}

export type CompileRequest = {
	filename: string;
	code: string;
}

export type IHomeState = {
	left: boolean;
	right: boolean;
	dialog: boolean;
	files: Array<string>;
	lang: string;
	selectedFile: number;
	code: Array<string>;
}

export type IHomeAction =
	| { type: IHomeActionEnum.SET_LEFT, value: boolean }
	| { type: IHomeActionEnum.SET_RIGHT, value: boolean }
	| { type: IHomeActionEnum.SET_DIALOG, value: boolean }
	| { type: IHomeActionEnum.SET_SEL_FILE, value: number }
	| { type: IHomeActionEnum.SET_LANG, value: string }
	| { type: IHomeActionEnum.ADD_FILE, value: string }
	| { type: IHomeActionEnum.SET_CODE, value: string }

export type IMessage = {
	type: 'error' | 'info' | null;
	message: string;
}
