import 'vuetify/styles'
import {createVuetify} from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'tinywins',
    themes: {
      tinywins: {
        dark: false,
        colors: {
          primary: '#7C4DFF',
          secondary: '#00BFA5'
        }
      }
    }
  }
})
