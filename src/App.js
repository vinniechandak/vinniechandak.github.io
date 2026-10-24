import React from "react"
import { ThemeProvider } from "styled-components"
import { themes } from "./styles/theme"
import GlobalStyle from "./styles/GlobalStyle"
import AppContainer from "./pages/AppContainer"
import useThemeMode from "./hooks/useThemeMode"
import { ReplayProvider } from "./components/ReplayContext"

const App = () => {
  const { mode, toggle } = useThemeMode()

  return (
    <ThemeProvider theme={themes[mode]}>
      <GlobalStyle />
      <ReplayProvider>
        <AppContainer themeMode={mode} onToggleTheme={toggle} />
      </ReplayProvider>
    </ThemeProvider>
  )
}

export default App
