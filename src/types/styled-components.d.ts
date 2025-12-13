import theme from '@src/GlobalStyle/theme';

type ThemeInterface = typeof theme

declare module "styled-components" {
    interface DefaultTheme extends ThemeInterface { }
}