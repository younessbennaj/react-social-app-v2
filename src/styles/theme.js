// theme.js
export default {
    forms: {
        input: {
            borderRadius: 4,
            ':hover': {
                borderColor: 'blue',
            }
        },
        select: {
            borderRadius: 4,
        },
        textarea: {},
        label: {},
        radio: {},
        checkbox: {},
    },
    breakpoints: ['544px', '768px', '1012px', '1280px'],
    colors: {
        background: '#fff',
        black: '#000e1a',
        white: '#fff',
        blue: '#007ce0',
        navy: '#004175',
        lightGrey: '#e0e0e0',
        grey: '#b0b0b0'
    },
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fontSize: [12, 14, 16],
    buttons: {
        primary: {
            color: 'white',
            bg: 'blue',
        },
        secondary: {
            color: 'white',
            bg: 'navy',
        },
    },
    text: {
        mainTitle: {
            fontSize: '50px',
            p: 3,
        },
        title: {
            fontSize: '40px',
            lineHeight: '40px',
            p: 3
        },
        subTitle: {
            fontSize: '30px',
            p: 2
        }
    },
    variants: {
        avatar: {
            display: 'inline-block',
            width: '50px',
            height: '50px',
            minWidth: '50px',
            p: 1,
            borderRadius: '50%',
        },
        avatarMd: {
            display: 'inline-block',
            width: '70px',
            height: '70px',
            minWidth: '70px',
            p: 1,
            borderRadius: '50%',
        },
        avatarLg: {
            display: 'inline-block',
            width: '100px',
            height: '100px',
            minWidth: '100px',
            p: 1,
            borderRadius: '50%',
        }
    }
}