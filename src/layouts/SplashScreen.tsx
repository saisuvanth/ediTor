import { Box, Skeleton } from '@mui/material'
import React from 'react'

const SplashScreen = () => {
	return (
		<Box color={'black'} alignItems={'flex-end'} justifyContent={'flex-end'} height={'90vh'} sx={{ marginLeft: '65px', marginTop: '65px' }}>
			<Skeleton animation='wave' width='100%' height='90vh' variant='rectangular' />
		</Box>
	)
}

export default SplashScreen