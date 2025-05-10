<template>
    <div
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        role="dialog"
    >
        <div
            class="absolute inset-0 transition-opacity duration-300 bg-slate-900/60 backdrop-blur"
            @click="modal.hideModal()"
        ></div>

        <div
            class="relative flex flex-col w-full max-w-lg overflow-hidden transition-all duration-300 origin-bottom bg-white rounded-lg dark:bg-navy-700"
            :class="[width ? width : '', bg ? bg : '', hight ? hight : '']"
        >
            <div
                class="flex justify-between px-4 py-3 mb-2 text-white capitalize rounded-t-lg bg-navy-800 sm:px-5"
            >
                <h3
                    class="text-base font-medium text-white-700 dark:text-navy-100"
                >
                    {{ title }}
                </h3>
                <button
                    class="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    @click="modal.hideModal()"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { useModalStore } from "../store/modals";

let modal = useModalStore();

let prop = defineProps(["width", "hight", "bg", "title"]);
</script>

<style lang="scss" scoped></style>
