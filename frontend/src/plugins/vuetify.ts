import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'tinywins',
    themes: {
      tinywins: {
        dark: false,
        colors: {
          primary: '#52489C',
          'primary-darken-1': '#443A86',

          secondary: '#59C3C3',
          accent: '#F45B69',

          background: '#F7F8FA',
          surface: '#FFFFFF',

          'soft-background': '#F0EDFF',

          'text-primary': '#2E2E2E',
          'divider-color': '#EBEBEB',
        },
      },
    },
  },
})
