import React from "react"
import Router from "./routes/Router"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./constants/theme"

// instalado material ui v5
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    )
}

export default App
