import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Import MDI icons

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // Use MDI as the default icon set
  },
});
