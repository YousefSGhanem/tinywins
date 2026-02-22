import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
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
        }
      }
    }
  }
})
