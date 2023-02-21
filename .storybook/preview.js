import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../src/styles/global"
import { theme } from "../src/styles/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.light
      },
      {
        name: 'dark',
        value: theme.colors.dark
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]