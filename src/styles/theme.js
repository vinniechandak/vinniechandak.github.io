import { darkColours, lightColours } from "./colours"

// Everything except colours is shared between the two modes.
const base = {
  fonts: {
    mono: `'JetBrains Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace`,
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  layout: {
    sidebarWidth: "260px",
    maxContent: "920px",
  },
}

export const darkTheme = { ...base, mode: "dark", colours: darkColours }
export const lightTheme = { ...base, mode: "light", colours: lightColours }

export const themes = { dark: darkTheme, light: lightTheme }

// Default export remains the dark theme.
export default darkTheme
