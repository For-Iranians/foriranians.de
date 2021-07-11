import theme from 'gatsby-theme-dox/src/theme'

export default {
    ...theme,
    colors: {
        ...theme.colors,
        modes: {}
    },
    fonts: {
        ...theme.fonts,
        body: 'Vazir, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    layout: {
        ...theme.layout,
        root: {
            ...theme.layout.root,
            direction: 'rtl'
        },
        sidebar: {
            float: 'right',
            width: 300,
            minHeight: '100%',
            ml: '-100%',
            position: 'absolute',
            right: [theme => -theme.layout.sidebar.width, null, 'auto'],
            visibility: ['hidden', null, 'visible'],
            transition: 'right 0.1s',
            outline: 0,
            '&.active': {
                right: 'auto',
                visibility: 'visible'
            }
        },
        main: {
            width: [
                '100%',
                null,
                theme => `calc(100% - ${theme.layout.sidebar.width}px)`
            ],
            mr: [null, null, theme => theme.layout.sidebar.width],
            float: [null, null, 'right'],
            transition: 'margin-right 0.1s',
            '&.pushed': {
                mr: theme => theme.layout.sidebar.width
            }
        }
    }
}