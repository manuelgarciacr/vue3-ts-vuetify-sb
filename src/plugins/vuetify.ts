// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

const light = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: colors.deepPurple.base,
        'primary-lighten-4': colors.deepPurple.lighten4,
        secondary: colors.teal.base,
        error: colors.red.base,
        info: colors.cyan.base,
        success: colors.green.base,
        warning: colors.amber.base,
    }
}

export default createVuetify({
    theme: {
        options: {
            customProperties: true,
        },
        variations: {
            colors: ['primary'],
            lighten: 2,
            darken: 2,
          },
        defaultTheme: 'light',
        themes: {
            light,
            dark: {
                primary: colors.red.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
    },
})
