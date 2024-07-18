import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {

            main: "#9c27b0",
            dark: "#7b1fa2",
            light: "#ba68c8"
        }
    },
    typography: {
        fontFamily: [
            'Poppins',
            'Arial',
            'sans-serif'
        ].join(',')
    }
})

export default theme