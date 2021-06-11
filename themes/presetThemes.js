export const presetThemes = {
    defaultTheme: {
        Title: 'Default Theme',
        darkMode: true,
        overWrites: {
            palette: {
                primary: {
                    main: '#0097a7',
                    light: '#56c8d8',
                    dark: '#006978',
                },
                secondary: {
                    main: '#ff4081',
                    light: '#ff79b0',
                    dark: '#c60055',
                },
                tertiary: {
                    main: '#fff176',
                    light: '#ffffa8',
                    dark: '#cabf45',
                    contrastText: '#000',
                },
            },
            typography: {
                h1: {
                    fontSize:'4rem',
                    fontWeight:700,
                },
                h2: {
                    fontSize:'3.2rem',
                    fontWeight:700,
                },
                h3: {
                    fontSize:'2rem',
                    fontWeight:500,
                },
            },
        },
    },
    protanopiaTheme: {
        Title: 'Protanopia Theme',
        palette: {
            primary: {
                main: '#6073b1',
                light: '#a7b8f8',
                dark: '#052955'
            },
            secondary: {
                main: '#ae9c45'
            },
        },
    },
    dueteranopiaTheme: {
        Title: 'Dueteranopia Theme',
        palette: {
            primary: {
                main: '#6f7498',
                light: '#a3b7f9',
                dark: '#092c48'
            },
            secondary: {
                main: '#c59434',
            },
        },
    },
}
