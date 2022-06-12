import React, { useContext } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { IHomeActionEnum } from '../utils/constants';
import { HomeContext } from '../contexts/HomeContext';
import { Avatar, Button } from '@mui/material';

const drawerWidth: number = 240;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.easeOut,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.easeIn,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);

export default function AppDrawer() {
	const theme = useTheme();
	const { state: { left, files, selectedFile, right }, dispatch } = useContext(HomeContext);

	const handleDrawerOpen = () => {
		dispatch({ type: IHomeActionEnum.SET_LEFT, value: true });
	}

	const handleDrawerClose = () => {
		dispatch({ type: IHomeActionEnum.SET_LEFT, value: false })
	};

	const handleSelect = (index: any) => {
		console.log(index);
		dispatch({ type: IHomeActionEnum.SET_SEL_FILE, value: index })
	}

	const handleCompile = () => {
		dispatch({ type: IHomeActionEnum.SET_RIGHT, value: !right })
		fetch('/api/signup', {
			method: 'POST',
			body: JSON.stringify({ username: 'suvanth', password: 'suvanth@96' })
		}
		).then(res => res.json()).then(data => {
			console.log(data);
		})
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Drawer variant="permanent" open={left}>
				<AppBar position="fixed" open={left}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							sx={{
								marginRight: 5,
								...(left && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 2 }}>
							EDI<Typography variant='h4' color={'green'} p={0.2} component={'span'}>T</Typography>OR
						</Typography>
						<Box sx={{ marginRight: '10' }}>
							<Button variant='outlined' color='success' onClick={handleCompile}>
								Compile
							</Button>
							<IconButton sx={{ marginLeft: '2rem' }}>
								<Avatar />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{files?.map((app, index) => (
						<ListItem key={index} onClick={event => handleSelect(index)} disablePadding sx={{ display: 'block', backgroundColor: index === selectedFile ? 'gray' : '' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: left ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: left ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									<InsertDriveFileIcon />
								</ListItemIcon>
								<ListItemText primary={app} sx={{ opacity: left ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					))}
					<Divider />
					<ListItem disablePadding sx={{ display: 'block' }} onClick={() => dispatch({ type: IHomeActionEnum.SET_DIALOG, value: true })}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: left ? 'initial' : 'center',
								px: 2.5,
							}}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: left ? 3 : 'auto',
									justifyContent: 'center',
								}}
							>
								<NoteAddIcon />
							</ListItemIcon>
							<ListItemText primary={'Add File'} sx={{ opacity: left ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				</List>
				<Divider />
			</Drawer>
		</Box >
	);
}
