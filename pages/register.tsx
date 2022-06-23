import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { NextPage } from "next";
import { Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import { useRef, useState, Ref, createRef } from "react";
import LoginIcon from '@mui/icons-material/Login';
import { IMessage } from "src/utils/types";
import { defaultMessage } from "src/utils/constants";


const MyBox = styled(Box)(({ theme }) => ({
	backgroundColor: '#262b32',
	width: '40%',
	[theme.breakpoints.down('lg')]: {
		width: '40%'
	},
	[theme.breakpoints.down('md')]: {
		width: '40%'
	},
	[theme.breakpoints.down('sm')]: {
		width: '70%'
	},
	[theme.breakpoints.down('xs')]: {
		width: '80%'
	},
	'& div': {
		width: '-webkit-fill-available',
		boxShadow: 'none',
	}
}));

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#121212',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));


const Register: NextPage = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<IMessage>(defaultMessage);
	const user = useRef<HTMLInputElement>(null);
	const email = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);
	const confirmPassword = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		const User = { username: user.current?.value, password: password.current?.value };
		setMessage(defaultMessage);
		if (User.username !== '' && User.password !== '') {
			setLoading(true);
			fetch('/api/login', {
				method: 'POST',
				body: JSON.stringify(User),
			}).then(res => res.json())
				.then(data => {
					if (data.status === 200) {
						setLoading(false);
						setMessage({ type: 'info', message: data.message })
						window.location.href = '/';
					} else {
						setLoading(false);
						setMessage({ type: 'error', message: data.message });
					}
				})
		} else {
			setMessage({ type: 'error', message: 'Please fill all fields' });
		}
	}

	return (
		<Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<MyBox className="gola">
				<Stack spacing={'2'}>
					<Item>
						<Typography fontSize={25} textAlign={'center'}>Register</Typography>
					</Item>
					<Item>
						<TextField
							inputRef={user}
							label="username"
							type="text"
							autoComplete="current-username"
							variant="filled"
						/>
					</Item>
					<Item sx={{ boxShadow: 0 }}>
						<TextField
							inputRef={email}
							label="Email"
							type="email"
							autoComplete="current-email"
							variant="filled"
						/>
					</Item>
					<Item sx={{ boxShadow: 0 }}>
						<TextField
							inputRef={password}
							label="Password"
							type="password"
							autoComplete="current-password"
							variant="filled"
						/>
					</Item>
					<Item sx={{ boxShadow: 0 }}>
						<TextField
							inputRef={confirmPassword}
							label="Confirm Password"
							type="password"
							autoComplete="current-confirm-password"
							variant="filled"
						/>
					</Item>
					{message.type ?
						<Item>
							<Typography color={message.type === 'error' ? 'red' : 'blue'}>{message.message}</Typography>
						</Item> : null}
					<Item>
						<LoadingButton
							loading={loading}
							onClick={handleClick}
							startIcon={<LoginIcon />}
							loadingPosition='start'
							variant="contained"
						>
							Log In
						</LoadingButton>
					</Item>
				</Stack>
			</MyBox>
		</Paper>
	);
}

export default Register;
