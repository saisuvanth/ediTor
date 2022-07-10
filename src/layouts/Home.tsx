import { Box } from '@mui/material';
import React, { useEffect, FC, Fragment, useContext } from 'react'
import AppDrawer from '../components/AppDrawer';
import Editor, { EditorProps } from '@monaco-editor/react';
import SplashScreen from './SplashScreen';
import { IHomeActionEnum } from '../utils/constants';
import MyDialog from '../components/MyDialog';
import { HomeContext } from '../contexts/HomeContext';
import IODrawer from '../components/IODrawer';

const Home: FC = () => {
	const { state: { files, selectedFile, code, lang }, dispatch } = useContext(HomeContext);

	const createNewFile = (filename: string) => {
		dispatch({ type: IHomeActionEnum.ADD_FILE, value: filename });
	}


	useEffect(() => {
		console.log(selectedFile);
		if (selectedFile) {
			dispatch({ type: IHomeActionEnum.SET_LANG, value: files[selectedFile].split('.').pop() as string })
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
			<AppDrawer />
			<Box component="main" sx={{ flexGrow: 1, height: '90vh', mt: '68px', ml: '65px' }}>
				<Editor {...options} />
			</Box>
			<MyDialog createFile={createNewFile} />
			<IODrawer />
		</Fragment>
	)
}

export default Home