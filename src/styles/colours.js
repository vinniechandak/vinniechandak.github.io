// Terminal / editor theme palettes.
// Two variants that read like real code-editor themes (dark + light) rather
// than one palette inverted. Syntax accents stay recognizable across both,
// tuned for contrast on their respective backgrounds.

// Shared window "traffic light" dots — identical in both themes.
const traffic = {
  trafficRed: "#ff5f56",
  trafficYellow: "#ffbd2e",
  trafficGreen: "#27c93f",
}

const darkPalette = {
  ...traffic,
  base: "#0b1221", // app background (deep slate, not pure black)
  surface: "#111a2e", // panels / windows
  surfaceRaised: "#16233d", // hovered / raised panels
  chrome: "#0a0f1c", // sidebar + window chrome
  border: "#243150",
  text: "#d7e0f5", // primary foreground
  textMuted: "#8a99b8", // comments / secondary
  textFaint: "#55617d", // line numbers / punctuation
  prompt: "#f2b36b", // warm amber — the command prompt
  path: "#6cc7e6", // soft cyan — file paths / keys
  string: "#9ad08d", // muted green — string values
  keyword: "#c79bf0", // soft violet — keywords
  danger: "#e8795a", // warm red — errors
}

const lightPalette = {
  ...traffic,
  base: "#f4f1ea", // warm paper
  surface: "#ffffff", // panels / windows
  surfaceRaised: "#eef0f4", // hovered / raised panels
  chrome: "#e9e5db", // sidebar + window chrome
  border: "#d9d3c7",
  text: "#1f2430", // primary foreground
  textMuted: "#5b6472", // comments / secondary
  textFaint: "#9aa1ac", // line numbers / punctuation
  prompt: "#b26a00", // amber, darkened for light-bg contrast
  path: "#0a7ea4", // teal/cyan, darkened
  string: "#3f7d2e", // green, darkened
  keyword: "#8347b3", // violet, darkened
  danger: "#c1442e", // red, darkened
}

// Build the colours object a palette uses, including the back-compat
// `sidebar.*` and `background` keys older components read.
const withShape = palette => ({
  ...palette,
  background: palette.base,
  sidebar: {
    text: palette.text,
    background: palette.chrome,
    border: palette.border,
  },
})

export const darkColours = withShape(darkPalette)
export const lightColours = withShape(lightPalette)

// Default export stays the dark palette for any direct importers.
export default darkColours
