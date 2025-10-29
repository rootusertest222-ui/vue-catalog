import 'vuetify/styles' // подключение глобальных стилей Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // для Material Design Icons (опционально)

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
  },
})
