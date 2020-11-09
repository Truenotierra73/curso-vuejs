import { createApp, defineAsyncComponent } from 'vue';

import ROUTER from './router.js';
import STORE  from './store/index.js';

import App from './App.vue';

import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
// import BaseDialog from './components/ui/BaseDialog.vue';

// Una forma de cargar perezosamente los componentes que no son necesarios siempre
// Sólo son necesarios cuando dicho componente va a ser ejecutado
const BaseDialog = defineAsyncComponent(() => import('./components/ui/BaseDialog.vue'));

const APP = createApp(App);

APP.use(ROUTER);
APP.use(STORE);

APP.component('base-card', BaseCard);
APP.component('base-button', BaseButton);
APP.component('base-badge', BaseBadge);
APP.component('base-spinner', BaseSpinner);
APP.component('base-dialog', BaseDialog);

APP.mount('#app');
