import GroupCard from './GroupCard.vue';

import { action } from '@storybook/addon-actions';

export default {
    component: GroupCard,
    title: 'GroupCard',
    excludeStories: /.*Data$/,
    //👇 Our events will be mapped in Storybook UI inside EVENTS
    argTypes: {
        clickHandle: {}
    },
};

export const actionsData = {
    clickHandle: action('click'),
};

const Template = (args) => ({
    components: { GroupCard },
    setup() {
        return { args, ...actionsData };
    },
    template: '<GroupCard v-bind="args" @onClick="clickHandle" class="ma-4"/>',
});

export const White = Template.bind({});
White.args = {
    group: {
        id: '1',
        title: 'Crew',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate vitae nemo pariatur suscipit ad ea!',
        tags: ['Extreme sports', 'Books'],
        state: 2, // White
        icon: "",
        updatedAt: new Date(2018, 0, 1, 9, 0),
    },
    cardHeight: 200,
    cardWidth: 400
};

export const Violet = Template.bind({});
Violet.args = { ...White.args, group: { ...White.args.group, 
    title: "Family",
    description: 'Lorem ipsum dolor sit amet consectetur.',
    tags: ['Decoration', 'Extreme sports', 'Books', 'Cloth', 'Pictures', 'Travels'],
    state: 1 // Violet
} };
