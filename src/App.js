import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./styles/style.css"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import AppContainer from "./pages/AppContainer"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
			<AppContainer />	
		</ThemeProvider>
  )
}

export default App;
