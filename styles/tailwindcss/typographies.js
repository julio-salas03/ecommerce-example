const plugin = require('tailwindcss/plugin')
const toRem = require('./toRem')

const typographies = plugin(
    ({ addComponents, theme, e }) => {
        const values = theme('typographies')

        const utilities = {}
        const baseStyles = {}
        Object.keys(values).forEach((key) => {
            const value = values[key]
            const styles = {
                fontSize: `${toRem(value.DEFAULT[0])} /* ${value.DEFAULT[0]}px */`,
                lineHeight: value.DEFAULT[1],
                letterSpacing: value.DEFAULT[2],
                fontFamily: value.DEFAULT[3],
                ...(value.DEFAULT[4] ? { fontWeight: value.DEFAULT[4] } : {}),
                ...(value.md
                    ? {
                        '@screen md': {
                            fontSize: `${toRem(value.md[0])} /* ${value.md[0]}px */`,
                            lineHeight: value.md[1],
                            letterSpacing: value.md[2],
                        },
                    }
                    : {}),
            }
            baseStyles[`${e(key)}`] = styles
            utilities[`.${e(key)}`] = styles
        })
        addComponents({
            ...utilities,
            '.font-lato': {
                fontFamily: 'lato, sans-serif',
            },
            '.font-open-sans': {
                fontFamily: 'open-sans, sans-serif',
            },
        })
    },
    {
        theme: {
            /*
            fontSize[0],
            lineHeight[1],
            letterSpacing[2],
            fontFamily[3],
            fontWeight[4],
            */
            typographies: {
                'heading-lg': {
                    DEFAULT: [24, '1.2', 'normal', 'lato', 400],
                    md: [40, '1.3', 'normal', 'lato', 400],
                },
                'body-lg': {
                    DEFAULT: [16, '1.5', 'normal', 'open-sans', 400],
                    md: [20, '1.6', 'normal', 'open-sans', 400],
                },
            },
        },
    }
)

module.exports = typographies