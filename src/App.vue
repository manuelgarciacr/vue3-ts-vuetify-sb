<template>
    <v-app>
        <v-main>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </nav>

            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "App",

        data() {
            return {
                //
            };
        },
    });
</script>

<style lang="scss">
    nav {
        padding: 30px;
        text-align: center;
        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
