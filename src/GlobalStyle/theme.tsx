import { lighten } from 'polished'

const theme = {
    colors: {
        primary: "#002626",
        primaryLite: lighten(0.1, "#002626"),
        borderDefault: "#ccc",
    },
    styles: {
        boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.2)"
    },
    spacing: {
        xs: 8,
        sm: 12,
        md: 16,
        lg: 24,
        xl: 32,
    }
};

export default theme;