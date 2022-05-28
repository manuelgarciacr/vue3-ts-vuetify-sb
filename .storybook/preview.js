import { app } from '@storybook/vue3'
import vuetify from '../src/plugins/vuetify'
import { VApp } from 'vuetify/components';
  
app.use(vuetify).component("VApp", VApp)

export const decorators = [story => ({
    components: { story },
    template: '<v-app><story /></v-app>',
})]

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};