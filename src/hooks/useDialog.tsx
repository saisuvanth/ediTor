import React, { FC, useState } from 'react'
import MyDialog from '../components/MyDialog';


const useDialog = () => {
	const [open, setOpen] = useState(false);
	const [ext, setExt] = useState<string>('');

	const handleClose = () => {
		setOpen(false);
	}

	const handleOpen = () => {
		setOpen(true);
		document.getElementById('name')?.focus();
	}

	return { open, handleClose, handleOpen };
}

export default useDialog