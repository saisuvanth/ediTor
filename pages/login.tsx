import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { NextPage } from "next";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import LoadingButton from '@mui/lab/LoadingButton';
import { useRef, useState } from "react";
import LoginIcon from '@mui/icons-material/Login';
import { IMessage } from "src/utils/types";
import { defaultMessage } from "src/utils/constants";
import FormControlLabel from "@mui/material/FormControlLabel";
import loginImg from '../src/images/login.jpg';

const MyPaper = styled(Paper)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
	// backgroundImage: `url(${loginImg})`
}))

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


const Login: NextPage = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<IMessage>(defaultMessage);
	const [remember, setRemember] = useState(false);
	const user = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

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
		<MyPaper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<MyBox className="gola">
				<Stack spacing={'2'}>
					<Item>
						<Typography fontSize={25} textAlign={'center'}>Log<span style={{ color: 'green', fontFamily: 'monospace', fontSize: '30px' }}>I</span>n</Typography>
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
							inputRef={password}
							label="Password"
							type="username"
							autoComplete="current-password"
							variant="filled"
						/>
					</Item>
					{message.type ?
						<Item>
							<Typography color={message.type === 'error' ? 'red' : 'blue'}>{message.message}</Typography>
						</Item> : null}
					<Item sx={{ display: 'flex', justifyContent: 'initial' }}>
						<FormControlLabel
							label="Remember me"
							control={
								<Checkbox checked={remember} size={'small'} onChange={(event) => setRemember(event.target.checked)} color="success" />
							}
						/>
					</Item>
					<Item sx={{ paddingTop: 5 }}>
						<LoadingButton
							loading={loading}
							onClick={handleClick}
							startIcon={<LoginIcon />}
							loadingPosition='start'
							variant="contained"
							color="success"
						>
							Log In
						</LoadingButton>
					</Item>
					<Item sx={{ textAlign: 'initial' }}>
						<Typography fontSize={12} color=''>Don&apos;t have an account? <Link href="/register"><span style={{ color: 'green', textDecoration: 'underline' }}> Register</span></Link></Typography>
					</Item>
				</Stack>
			</MyBox>
		</MyPaper>
	);
}

export default Login;
