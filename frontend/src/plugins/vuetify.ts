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

          'member-parent': '#52489C',
          'member-teal': '#59C3C3',
          'member-coral': '#F45B69',
          'member-purple': '#6C63C7',
          'member-sun': '#F6C945',
          'member-mint': '#7DD8B6',
        },
      },
    },
  },
})
