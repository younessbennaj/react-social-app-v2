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
    variants: {
        avatar: {
            display: 'inline-block',
            width: '50px',
            height: '50px',
            minWidth: '50px',
            p: 1,
            borderRadius: '50%',
        },
        avatarLg: {
            display: 'inline-block',
            width: '70px',
            height: '70px',
            minWidth: '70px',
            p: 1,
            borderRadius: '50%',
        }
    }
}