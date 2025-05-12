<template>
    <header :class="scrolled ? 'bg-[#6c757d]' : ''"
        class="fixed top-0 left-0 right-0 z-10 w-full py-4 border-b bg-[#6c757d]  xxl:py-6 border-neutral4/15"
        style="background: #6c757d; height: 80px !important;">
        <div class="container flex items-center justify-between">
            <a href="/" class="flex items-center gap-2" aria-label="Home link">
                <!-- <Logo></Logo> -->
                <span class=" text-[24px] font-bold text-white" style="font-size: 1.25rem;">Merchant Upgrade</span>
            </a>

            <div class="flex items-center gap-3">
                <button @click="modal.showModal('connect')" class="btn-primary">
                    Connect Wallet
                </button>
                <button @click="mobileMenu = !mobileMenu" class="text-2xl lg:hidden">
                    <i class="ti ti-menu-2"></i>
                </button>
            </div>
            <Connect :width="'!max-w-[856px]'" :bg="'!bg-[#09131D]'"></Connect>
        </div>
        <!-- mobile menu -->
        <div :class="mobileMenu ? 'translate-x-0' : '-translate-x-full'"
            class="absolute h-screen overflow-y-auto bg-accent5 lg:hidden top-0 left-0 z-50 duration-300 p-4 w-[300px]">
            <div class="flex items-center justify-between">
                <Logo></Logo>
                <button @click="mobileMenu = false" class="text-xl">
                    <i class="ti ti-x"></i>
                </button>
            </div>
            <ul class="flex flex-col gap-3 mt-4 lg:gap-4">
                <li @click="modal.showModal('connect')">
                    <a class="inline-flex py-1 menu-link" href="javascript:void(0);">Unlock Wallet</a>
                </li>
                <li @click="modal.showModal('connect')">
                    <a class="inline-flex py-1 menu-link" href="javascript:void(0);">Upgrade</a>
                </li>

            </ul>
        </div>
        <div v-show="mobileMenu" @click="mobileMenu = false"
            class="fixed inset-0 z-20 w-full h-full bg-neutral1/10 lg:hidden"></div>
    </header>
    <main class=" !bg-gray-100" style="background: #f3f4f6; padding-top: 80px !important;">
        <slot></slot>
    </main>
    <footer class="relative overflow-hidden !bg-[#2c3e50] footer" style="background: #2c3e50 !important;">
        <!-- <div
            class="w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] absolute bottom-[-6%] blur-[85px] left-[-9%] bg-primary/50">
        </div>
        <div
            class="w-[150px] lg:w-[250px] h-[150px] lg:h-[250px] absolute top-[-6%] blur-[85px] right-[-8%] bg-accent1/50">
        </div> -->
        <!-- <img
            class="max-[1700px]:hidden absolute left-0 bottom-0"
            src="assets/images/footer-el-1.png"
            alt=""
        /> -->
        <!-- <img
            class="absolute bottom-0 max-lg:hidden right-1"
            src="assets/images/footer-el-2.png"
            alt=""
        /> -->
        <img class="absolute right-0 max-xl:hidden top-2 animate-skew" src="assets/images/how-start-el-2.png" alt="" />
        <div
            class="pb-120 pt-120 relative z-[2] container grid grid-cols-12 xxl:grid-cols-10 gap-6 lg:divide-x divide-accent4">
            <div class="flex items-center justify-center col-span-12 lg:col-span-3">
                <div class="pl-4 text-center lg:pl-6 xxl:pl-10 xxxl:pl-12">
                    <h3 class="mb-4 xl:mb-6">About</h3>
                    <p class="text-neutral4 lg:text-lg">
                        Unlock opportunities, trade with confidence: Your trusted partner for cryptocurrency exchange.
                        Join us today for secured transactions. Trade securely, exchange seamlessly: Your gateway to the
                        crypto world.
                    </p>
                    <div class="flex justify-center gap-4 mt-7 xl:mb-10" style="margin-top: 28px;">
                        <a class="social-link" href="#" aria-label="facebook link"><i
                                class="ti ti-brand-facebook"></i></a>
                        <a class="social-link" href="#" aria-label="twitch link">
                            <i class="ti ti-brand-twitch"></i>
                        </a>
                        <a class="social-link" href="#" aria-label="instagram link">
                            <i class="ti ti-brand-instagram"></i></a>
                        <a class="social-link" href="#" aria-label="discord link"><i
                                class="ti ti-brand-discord"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-5 border-t xl:py-8 border-accent4">
            <div class="container text-center flex justify-center gap-2 sm:gap-3 items-center relative z-[2]">
                <p class="text-xs sm:text-sm md:text-base xl:text-lg">
                    Copyright @ <span id="year"></span> Merchant
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";
import Connect from "../modals/Connect.vue";
import Logo from "../includes/Logo.vue";
import { useModalStore } from "../store/modals";

let modal = useModalStore();

let mobileMenu = ref(false);
let scrolled = ref(false);
</script>

<style lang="scss" scoped></style>
