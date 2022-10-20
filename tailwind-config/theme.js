module.exports = {
    extend: {
        screens: {
            'sm': '576px',
            'sm-down': { 'max': '575px' },
            'md': '768px',
            'md-down': { 'max': '767px' },
            'lg': '1025px',
            'lg-down': { 'max': '1024px' },
            'xl': '1240px',
            'xl-down': { 'max': '1239px' },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            black: '#000',
            white: '#fff',

            // https://brandcolors.net/
            linkedin: '#0077b5',

            dark: '#2e2e2e',

            primary: {
                light: '#84fdf3',
                base: '#66FCF1',
                hover: '#3cd3c7',
                dark: '#20a99e',
            },

            secondary: {
                lighter: '#0e315e',
                light: '#0c2b54',
                base: '#041832',
                hover: '#011025',
            },

            tertiary: {
                light: '#dbe3fc',
                base: '#cad5f6',
                hover: '#a3adcc',
            },

            gray: {
                50: '#efefef',
                100: '#e3e3e3',
                200: '#c6c6c6',
                300: '#aaaaaa',
                400: '#8d8d8d',
                500: '#717171',
                600: '#5a5a5a',
                700: '#444444',
                800: '#2d2d2d',
                900: '#171717',
            },
        },
        maxWidth: (theme) => ({
            ...theme('spacing'),
            fullContainer: '1440px',
            xl: '1440px',
            container: '1360px',
            lg: '1024px',
            864: '864px',
            md: '768px',
            646: '646px',
            sm: '575px',
            xs: '320px',
            full: '100%',
        }),
        minWidth: (theme) => ({
            ...theme('maxWidth'),
        }),
        width: (theme) => ({
            xs: '320px',
        }),
        minHeight: {
            'half': '50vh',
            '320': '320px',
            '560': '560px',
            '700': '700px',
        },
        height: {
            '150': '37.5rem',
            '120': '30rem',
            '317': '317px',
        },
        spacing: {
            '14': '3.5rem',
        },
        inset: (theme) => ( {
            ...theme('spacing'),
            50: '50%',
            100: '100%',
        } ),
        fontFamily: {
            core: [
                'Epilogue',
                'Montserrat',
            ],
            heading: [
                'Epilogue',
                'Arial',
            ],
            highlight: [
                'Montserrat',
                'Arial',
            ],
            icon: [
                'Icomoon',
            ],
        },
        fontSize: {
            '2xl': '1.5rem',
            '3xl': '1.75rem',
            '4xl': '2rem',
            '5xl': '2.5rem',
            '6xl': '2.75rem',
            '7xl': '4.5rem',
        },
        lineHeight: {
            light: '1.1'
        },
        zIndex: {
            '-2': -2,
            '-1': -1,
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            header: 1100,
            fixed: 1200,
            popup: 1300,
            max: 9999,
        },
        cursor: {
            'zoom-in': 'zoom-in',
        },
    }
}
