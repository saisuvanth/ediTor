import { Box } from '@mui/material';
import React, { useEffect, useState, FC, Fragment } from 'react'
import AppDrawer from '../components/AppDrawer';
import Editor, { EditorProps } from '@monaco-editor/react';
import SplashScreen from './SplashScreen';
import { FileType } from '../utils/constants';
import useDialog from '../hooks/useDialog';
import MyDialog from '../components/MyDialog';

const Home: FC = () => {
	const [files, setFiles] = useState<Array<FileType>>([]);
	const [lang, setLang] = useState<string>('javascript');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedFile, setSelectedFile] = useState<number | null>(null);
	const [code, setCode] = useState<Array<string>>([]);
	const { open, handleClose, handleOpen } = useDialog();


	const createNewFile = (filename: string) => {
		setFiles(prev => [...prev, { name: filename }])
	}


	useEffect(() => {
		console.log(selectedFile);
		if (selectedFile) {
			setLang(files[selectedFile].name.split('.').pop() as string)
		}
	}, [selectedFile, files])

	const editorDidMount = (editor: any, monaco: any) => {
		console.log('editorDidMount', editor);
		editor.focus();
	}

	const onChange = (newValue: any, e: any) => {
		console.log('onChange', newValue, e);
	}

	const options: EditorProps = {
		width: '100%', height: '100%', language: lang, theme: 'vs-dark', value: code[selectedFile ? selectedFile : 0], loading: <SplashScreen />,
		onMount: editorDidMount, onChange: onChange
	};

	return (
		<Fragment>
			<AppDrawer open={isOpen} setOpen={setIsOpen} files={files} handleOpen={handleOpen} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
			<Box component="main" sx={{ flexGrow: 1, height: '100vh', mt: '68px', ml: '65px' }}>
				<Editor {...options} />
			</Box>
			<MyDialog open={open} handleClose={handleClose} createFile={createNewFile} />
		</Fragment>
	)
}

export default Home