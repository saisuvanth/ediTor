import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Dispatch, SetStateAction } from 'react';

export interface FileType {
	name: string;
	icon?: JSX.Element;
}

export interface FileAdd {
	open: boolean;
	handleClose: () => void;
	createFile: (name: string) => void;
}

export const supportedLang = ['js', 'c', 'cpp', 'py'];