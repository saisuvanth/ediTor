import { Autocomplete, Dialog, Paper, Stack, TextField } from '@mui/material'
import React, { FC, useEffect, useRef, useState } from 'react'
import { FileAdd, supportedLang } from '../utils/constants'


const MyDialog: FC<FileAdd> = ({ open, handleClose, createFile }: FileAdd) => {
	const [name, setName] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const onChangeListener = (event: any) => {
		if (event.key === 'Enter') {
			document.getElementById('hola')?.focus();
		}
	}

	const onSelectListener = (event: any, newValue: string) => {
		console.log(name, newValue);
		createFile(name + '.' + newValue)
		handleClose();
	}


	return (
		<Dialog open={open} onClose={handleClose}>
			<Paper sx={{ p: 4 }}>
				<Stack direction={'row'} spacing={0}>
					<TextField id='name' placeholder='index' value={name} onChange={handleChange} onKeyDown={onChangeListener} />
					<Autocomplete
						id='hola'
						sx={{ width: 65 }}
						disableClearable
						onChange={(event: any, newValue: string) => onSelectListener(event, newValue)}
						options={supportedLang}
						renderInput={(params) => <TextField {...params} />}
					/>
				</Stack>
			</Paper>
		</Dialog>
	)
}

export default MyDialog