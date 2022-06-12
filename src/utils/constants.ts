import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Dispatch, SetStateAction } from 'react';
import { IHomeState } from './types';

export interface FileType {
	name: string;
	icon?: JSX.Element;
}

export enum IHomeActionEnum {
	SET_LEFT,
	SET_RIGHT,
	SET_DIALOG,
	ADD_FILE,
	SET_SEL_FILE,
	SET_CODE,
	SET_LANG
}

export const defaultHomeState: IHomeState = {
	left: false,
	right: false,
	dialog: false,
	selectedFile: 0,
	files: [],
	code: [],
	lang: 'javascript'
}

export const supportedLang = ['js', 'c', 'cpp', 'py'];