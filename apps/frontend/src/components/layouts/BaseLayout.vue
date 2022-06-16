<template>
    <div class="h-screen">
        <nav class="w-full h-16 px-4 text-white bg-gray-800 border-b border-gray-700 ">
            <ul class="flex items-center justify-between h-full max-w-screen-lg mx-auto">
                <li class="flex items-center space-x-2">
                    <img class="h-10" :src="LogoImg" />
                    <p class="text-lg font-semibold text-gray-200">PasteBinium</p>
                </li>
                <li>
                    <button class="p-1 px-2 text-sm font-semibold rounded bg-primary">New paste</button>
                </li>
            </ul>
        </nav>
        <main class="h-full px-2 text-white bg-gray-800">
            <div class="flex max-w-screen-lg mx-auto">
                <aside class="w-56 h-full border-r border-gray-700">
                    <ul class="h-full px-2 py-4 space-y-4">
                        <li v-if="loading" class="flex flex-col items-center space-y-2 text-gray-600">
                            <p>Loading pastes...</p>
                            <scaling-squares-spinner :animation-duration="1000" :size="30" color="#3eb17e" />
                        </li>
                        <li v-for="paste in pasteList?.pastes"
                            class="flex items-center justify-between p-4 transition-all bg-gray-700 rounded-lg hover:bg-gray-600 hover:cursor-pointer">
                            <p>{{ paste?.title }}</p>
                            <div v-if="paste?.hasPassword"
                                class="relative flex items-center justify-center object-contain h-4">
                                <LockIcon class="text-gray-500" />
                            </div>
                        </li>
                    </ul>
                </aside>
                <div class="px-4">
                    <slot></slot>
                </div>

            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ScalingSquaresSpinner } from 'epic-spinners'
import LogoImg from "@/assets/logo-solo.png"
import LockIcon from "@/assets/icons/lock.svg"
import { useGetPasteListsQuery } from "@/graphql/generated/api";
const { result: pasteList, loading } = useGetPasteListsQuery()


</script>
