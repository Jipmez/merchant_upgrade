<template>
    <!-- <button class="w-full py-2 text-white rounded bg-main">
        {{title}}
    </button> -->
    <button
        class="w-full mt-5 font-medium text-white btn bg-primary hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
        :class="{
            'bg-gray-400 hover:bg-none': loading,
            '!w-full': width === 'full',
            mbtn: width !== 'full',
        }"
        type="button"
        :disabled="loading"
    >
        {{ title }}
        <span
            v-if="loading"
            class="text-black"
            v-html="icons.loader(28, 28, '#fff')"
        />
    </button>
</template>

<script>
import { icons } from "../utils/icons";

export default {
    name: "Button",
    props: {
        title: [String, NodeList],
        loading: Boolean,
        width: [String, NodeList],
    },
    data() {
        return {
            icons: new icons(),
        };
    },
};
</script>

<style scoped>
button {
    width: 100%;
    background-color: #2ea2ed;
}
</style>
