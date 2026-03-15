import { createTheme } from "@mui/material/styles";


const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#2196F3",
            secondary: "green"
        },
        background: {
            default: "#ffff"
        },
        text: {
            primary: "#000"
        }
    }
})


const darkTheme = createTheme({
  palette: {
    primary: { main: "#2196F3",secondary: "black",},
    background: {
      default: "#000000",
    },
    text: {
      primary: "#fff",
    },
  },
});


export  { lightTheme, darkTheme }