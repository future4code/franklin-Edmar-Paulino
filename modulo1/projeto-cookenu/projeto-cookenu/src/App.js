import React, { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./constants/theme"
import Header from "./components/Header/Header"

// instalado material ui v5
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

function App() {
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
                <Router setRightButtonText={setRightButtonText} />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
