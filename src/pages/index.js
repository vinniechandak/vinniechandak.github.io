import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "../styles/style.css"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import AppContainer from "./AppContainer"

export default () => {
  return (
    <ThemeProvider theme={theme}>
			<AppContainer />	
		</ThemeProvider>
  )
}
