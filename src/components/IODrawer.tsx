import React, { useContext } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { HomeContext } from '../contexts/HomeContext';
import { Grid, TextField, Typography } from '@mui/material';

const drawerWidth: number = 250;

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
	width: 0,
});

interface IMyCont {
	open: boolean;
}
const MyCont = styled(Paper, { shouldForwardProp: (prop) => prop !== 'open' })<IMyCont>(
	({ theme, open }) => ({
		position: 'absolute',
		right: 0,
		top: 65,
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


export default function IODrawer() {
	const theme = useTheme()
	const { state: { right }, dispatch } = useContext(HomeContext);

	return (
		<MyCont open={right} sx={{ height: '90vh', backgroundColor: '#121212', borderLeft: '2px solid green' }}>
			<Grid container width={1} height={1}>
				<Grid item xs={12} borderBottom={1} borderColor={'green'} sx={{ flexGrow: 1 }} component={Paper} justifyContent='center'>
					<Typography textAlign={'center'}>Input</Typography>
					<TextField sx={{ paddingX: '2px' }} fullWidth multiline rows={5} placeholder={'Input'} />
				</Grid>
				<Grid item xs={12} borderTop={1} borderColor={'green'} sx={{ flexGrow: 1 }} component={Paper}>
					<Paper>
						<Typography textAlign={'center'}>Ouput</Typography>
						<Box width={1} height={'inherit'} sx={{ paddingX: '2px' }} />
					</Paper>
				</Grid>
			</Grid>
		</MyCont>
	);
}
