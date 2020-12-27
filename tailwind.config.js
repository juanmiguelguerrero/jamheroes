const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                indigo: {
                    //700: "#7742f9",
                    //800: "#404040",
                    900: "#0d0f3c",
                },
            },
            fontFamily: {
                heading: [
                    "Racing Sans One",
                    ...defaultTheme.fontFamily.sans,
                ],
                mono: [
                    "JetBrains Mono",
                    ...defaultTheme.fontFamily.mono,
                ],
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ["last"],
            margin: ["last"],
        },
    },
    plugins: [],
}
