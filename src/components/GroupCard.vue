<template>
    <v-card :max-width="props.cardWidth" :width="$vuetify.display.smAndUp ? props.cardWidth : 'auto'" 
        :height="$vuetify.display.smAndUp ? props.cardHeight : 'auto'" 
            :class="[{'sm-and-up': $vuetify.display.smAndUp}, color]"
            class="group-card" 
            @click="onClick"
            v-resize="onResize">
        <v-container
            class="fill-height d-flex-column flex-no-wrap justify-space-between"
        >
            <v-row no-gutters>
                <v-avatar class="h-100 v-col-12 v-col-sm-4" rounded="0">
                    <v-img
                        width="100%"
                        src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    />
                </v-avatar>
                <v-col cols="12" sm="8">
                    <v-card-title ref="title" class="col-sm-8">
                        {{ props.group.title }}
                    </v-card-title>
                    <div
                        ref="text"
                        class="v-card-text text-subtitle-1 text-justify"
                        :class="[color === 'primary' ? 'text-primary-lighten-4': '',
                            textEllipsis ? 'ellipsis' : '']"
                        >
                        {{ props.group.description }}
                    </div>
                </v-col>
                <div
                    ref="chips"
                    class="v-col-12 mt-2 mb-0 chips"
                    :class="{ ellipsis: chipsEllipsis }"
                >
                    <v-chip
                        size="small"
                        class="ma-1 bg-primary-lighten-4"
                        v-for="(value, idx) in props.group.tags"
                        :key="idx"
                        >{{ value }}
                    </v-chip>
                </div>
            </v-row>
        </v-container>
    </v-card>
</template>

<script setup lang="ts">
    import {
        ref,
        computed
    } from "vue";
    
    enum State {
        Violet = 1,
        White,
    }

    interface Props {
        cardWidth: number,
        cardHeight: number,
        group: {
            id?: string;
            title: string;
            description: string;
            tags: string[];
            state: State;
            icon?: string;
            updatedAt?: Date;
        };
    }

    const props = defineProps<Props>();

    const text = ref<HTMLDivElement | null>(null);
    const chips = ref<HTMLDivElement | null>(null);
    const textEllipsis = ref<boolean>(false);
    const chipsEllipsis = ref<boolean>(false);

    const color = computed(() => props.group.state === 1 ? "primary" : "default")

    const emit = defineEmits<{
        (e: "onClick", value: string): void;
    }>();

    const onClick = () => emit("onClick", "Card Click");

    const isOverflown = (el: HTMLDivElement | null) => {
        if (!el) return false;

        const clientWidth = el.clientWidth;
        const clientHeight = el.clientHeight;
        const scrollWidth = el.scrollWidth;
        const scrollHeight = el.scrollHeight;
        const ellipsis =
            scrollHeight > clientHeight || scrollWidth > clientWidth;
        return ellipsis;
    };

    const onResize = () => {
        textEllipsis.value = isOverflown(text.value);
        chipsEllipsis.value = isOverflown(chips.value);
    }
</script>

<style scoped lang="scss">
    .v-card {
        &.primary {
            background-color: rgb(var(--v-theme-primary));
            * {
                color: rgb(var(--v-theme-primary-lighten-4));
                background-color: rgb(var(--v-theme-primary));
            }
            .chips.ellipsis:after {
                border-top: .75rem solid rgb(var(--v-theme-primary));
               background-color: rgb(var(--v-theme-primary));
            }
        }
        &.default {
            background-color: rgb(var(--v-theme-surface));
        }
        .v-card-title {
            justify-content: center;
            font-family: "Pacifico";
        }
        .v-card-text {
            line-height: 1.25rem;
            padding: 1rem 1rem 0 1rem;
            position: relative;
        }
        &.sm-and-up .v-card-text {
            overflow: hidden;
            height: 4.75rem;
        }
        &.sm-and-up .chips {
            overflow: hidden;
            white-space: nowrap;
            flex-wrap: nowrap;
        }
        &:not(.sm-and-up) .ellipsis:after{
            display: none;
        }
        .chips {
            position: relative;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            &.ellipsis {
                justify-content: space-between; 
            }
            .v-chip {
                flex-shrink: inherit;
            }
        }
        .ellipsis:after {
            position: absolute;
            content: "\00a0\00a0...";
            bottom: 0;
            right: 0;
            font-weight: bold;
            height: 1.25rem;
            box-sizing: initial;
            border-color: inherit
        }
        .v-card-text.ellipsis:after {
            border-top: 0;
        }
    }
</style>
