import { createTheme } from "@mui/material/styles";
import React from "react";


const theme = createTheme({
	palette: {
		mode: 'dark'
	},
	typography: {
		h6: {
			fontFamily: 'Roboto Mono'
		},
		h4: {
			fontFamily: 'Open Sans'
		}
	},
	direction: 'ltr',
	components: {
		MuiTypography: {

		}
	}
})

export default theme;