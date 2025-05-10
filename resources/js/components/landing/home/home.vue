<template>
    <NavLayout>
        <div class="container space-y-4 pt-120 pb-120">
            <div class="grid grid-cols-4 gap-4">
                <!-- First row (4 items) -->
                <div class="flex flex-col items-center gap-4 p-4 cursor-pointer bg-accent6 rounded-xl"
                    @click="modal.showModal('connect')">
                    <img src="/assets/images/merchant/unlock.png" alt="">
                    <div>Unlock Wallet</div>
                </div>
                <div class="flex flex-col items-center gap-4 p-4 cursor-pointer bg-accent6 rounded-xl"
                    @click="modal.showModal('connect')">
                    <img src="/assets/images/merchant/verify.png" alt="">
                    <div>Verify Wallet</div>
                </div>
                <div class="flex flex-col items-center gap-4 p-4 cursor-pointer bg-accent6 rounded-xl"
                    @click="modal.showModal('connect')">
                    <img src="/assets/images/merchant/validate.png" alt="">
                    <div>Validate Wallet</div>
                </div>
                <div class="flex flex-col items-center gap-4 p-4 cursor-pointer bg-accent6 rounded-xl"
                    @click="modal.showModal('connect')">
                    <img src="/assets/images/merchant/p2p.png" alt="">
                    <div>P2P</div>
                </div>

                <!-- Second row (3 centered items) -->
                <div class="flex flex-col items-center col-start-2 gap-4 p-4 cursor-pointer bg-accent6 rounded-xl"
                    @click="modal.showModal('connect')">
                    <img src="/assets/images/merchant/connect.png" alt="">
                    <div>Connect Wallet</div>
                </div>
                <div class="flex flex-col items-center gap-4 p-4 cursor-pointer bg-accent6 rounded-xl"
                    @click="modal.showModal('connect')">
                    <img src="/assets/images/merchant/exchange.png" alt="">
                    <div>Exchange</div>
                </div>
                <div class="flex flex-col items-center gap-4 p-4 cursor-pointer bg-accent6 rounded-xl"
                    @click="modal.showModal('connect')">
                    <img src="/assets/images/merchant/escrow.png" alt="">
                    <div>Escrow</div>
                </div>

                <div class="flex flex-col items-center gap-4 p-4 cursor-pointer bg-accent6 rounded-xl"
                    @click="modal.showModal('connect')">
                    <img src="/assets/images/merchant/merchant.png" alt="">
                    <div>Merchant</div>
                </div>

                <!-- third row -->
                <!-- <div class="flex flex-col items-center gap-4 p-4 cursor-pointer bg-accent6 rounded-xl"
                    @click="modal.showModal('connect')">
                    <img src="/assets/images/merchant/upgrade.png" alt="">
                    <div>Upgrade</div>
                </div> -->
            </div>


        </div>
    </NavLayout>
</template>

<script setup>
import { ref } from "vue";
import NavLayout from "../Layout.vue";

import { useModalStore } from "../../store/modals";

let modal = useModalStore();

let isOpen = ref(false);
let scrolled = ref(false);
let activeTab = ref("critox");
</script>

<style scoped lang="scss"></style>
