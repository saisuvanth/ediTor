import { Box } from '@mui/material';
import React, { useEffect, useState, FC, Fragment } from 'react'
import AppDrawer from '../components/AppDrawer';
import useWindowResize from '../hooks/useWindowResize';
import Editor from '@monaco-editor/react';

const Home: FC = () => {
	const options = {
		selectOnLineNumbers: true
	};
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [code, setCode] = useState('');
	const flag = useWindowResize();

	useEffect(() => {

	}, [])

	const editorDidMount = (editor: any, monaco: any) => {
		console.log('editorDidMount', editor);
		editor.focus();
	}

	const onChange = (newValue: any, e: any) => {
		console.log('onChange', newValue, e);
	}

	return (
		<Fragment>
			<AppDrawer open={isOpen} setOpen={setIsOpen} />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Editor
					width="800"
					height="60vh"
					language="javascript"
					theme="vs-dark"
					value={code}
					options={options}
					onChange={onChange}
				// editorDidMount={editorDidMount}
				/>
			</Box>
		</Fragment>
	)
}

export default Home