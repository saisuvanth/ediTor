import { Box, Skeleton } from '@mui/material'
import React from 'react'

const SplashScreen = () => {
	return (
		<Box color={'black'} alignItems={'center'} justifyContent={'center'}>
			<Skeleton animation='wave' width='90vw' height='90vh' variant='rectangular' />
		</Box>
	)
}

export default SplashScreen