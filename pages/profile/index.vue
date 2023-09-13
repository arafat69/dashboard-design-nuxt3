<template>
    <div>
        <Header>
            <Breadcumb active="Profile" />

        </Header>
        <MainContent>
            <div
                class="p-6 w-full bg-white bg-opacity-80 rounded-2xl border-slate-100 items-center gap-6 flex-wrap flex bg-[url('/icons/cover.svg')] bg-cover">
                <div class="relative w-24 h-24">
                    <img class="w-full h-full object-cover rounded-full" src="/images/avator.jpeg" />
                    <button
                        class="w-8 h-8 bg-teal-400 rounded-full flex justify-center items-center absolute right-0 bottom-0">
                        <CameraIcon class="w-6 h-6 text-white" />
                    </button>
                </div>
                <div class="grow flex-col gap-2 flex">
                    <div class="text-gray-900 text-2xl font-bold leading-loose">Luna Maria</div>
                    <div class="text-gray-400 text-base font-normal leading-normal">example@mail.com</div>
                </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-6 mt-6">

                <!-- Personal Infor -->
                <div class="bg-white rounded-xl shadow border border-slate-100 py-4 px-6">
                    <div class="flex gap-2 items-center justify-between mb-4">
                        <div class="text-slate-800 text-sm font-bold leading-tight tracking-tight">
                            Personal Information
                        </div>
                        <button><img src="/icons/edit.svg" alt=""></button>
                    </div>

                    <div class="grid gap-6 sm:grid-cols-2">
                        <div>
                            <div class="text-slate-400 text-sm font-normal">Fiscal Code (CF)</div>
                            <div class="text-slate-800 text-sm font-normal">HWLPSH90E31Z249J</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">Gender</div>
                            <div class="text-slate-800 text-sm font-normal">Male</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">Date of Birth</div>
                            <div class="text-slate-800 text-sm font-normal">12/03/1998</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">Province of Birth</div>
                            <div class="text-slate-800 text-sm font-normal">Modena</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">City of Birth</div>
                            <div class="text-slate-800 text-sm font-normal">Sestola</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">Citizenship</div>
                            <div class="text-slate-800 text-sm font-normal">Gibuti</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">Telephone Number</div>
                            <div class="text-slate-800 text-sm font-normal">+16032435496</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">Mobile Number</div>
                            <div class="text-slate-800 text-sm font-normal">+16032435496</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">Email</div>
                            <div class="text-slate-800 text-sm font-normal">hannan@gmail.com</div>
                        </div>
                    </div>

                    <!-- address -->
                    <div class="pb-3 mt-8 text-teal-400 text-xs font-medium">Address Information</div>
                    <div class="mb-5">
                        <div class="text-slate-400 text-sm font-normal">Address</div>
                        <div class="text-slate-800 text-sm font-normal">
                            86737 Steuber Crescent Suite 012 New Mozelle, UT 00442-8898
                        </div>
                    </div>
                    <div class="grid gap-6 sm:grid-cols-2">
                        <div>
                            <div class="text-slate-400 text-sm font-normal">Province of Residence</div>
                            <div class="text-slate-800 text-sm font-normal">Asti</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">City of Residence</div>
                            <div class="text-slate-800 text-sm font-normal">Portacomaro</div>
                        </div>

                        <div>
                            <div class="text-slate-400 text-sm font-normal">Postal Code</div>
                            <div class="text-slate-800 text-sm font-normal">82458-2430</div>
                        </div>
                    </div>

                </div>

                <!-- Business Infor -->
                <div class="bg-white rounded-xl shadow border border-slate-100 py-4 px-6 flex flex-col justify-between">
                    <div>
                        <div class="flex gap-2 items-center justify-between mb-4">
                            <div class="text-slate-800 text-sm font-bold leading-tight tracking-tight">
                                Business Information
                            </div>
                            <button><img src="/icons/edit.svg" alt=""></button>
                        </div>

                        <div class="grid gap-6 sm:grid-cols-2">
                            <div>
                                <div class="text-slate-400 text-sm font-normal">Company Name</div>
                                <div class="text-slate-800 text-sm font-normal">Lubowitz, Purdy and Hansen</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Company Type</div>
                                <div class="text-slate-800 text-sm font-normal">Individual firm</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Vat ID</div>
                                <div class="text-slate-800 text-sm font-normal">29312177</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Business Phone</div>
                                <div class="text-slate-800 text-sm font-normal">+17864160963</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Business Mobile Phone</div>
                                <div class="text-slate-800 text-sm font-normal">+13084563276</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">Business Email</div>
                                <div class="text-slate-800 text-sm font-normal">mkoepp@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <!-- address -->
                        <div class="pb-3 text-teal-400 text-xs font-medium">Address Information</div>
                        <div class="mb-5">
                            <div class="text-slate-400 text-sm font-normal">Address</div>
                            <div class="text-slate-800 text-sm font-normal">
                                86737 Steuber Crescent Suite 012 New Mozelle, UT 00442-8898
                            </div>
                        </div>
                        <div class="grid gap-6 sm:grid-cols-2">
                            <div>
                                <div class="text-slate-400 text-sm font-normal">Province of Residence</div>
                                <div class="text-slate-800 text-sm font-normal">Asti</div>
                            </div>

                            <div>
                                <div class="text-slate-400 text-sm font-normal">City of Residence</div>
                                <div class="text-slate-800 text-sm font-normal">Portacomaro</div>
                            </div>
                            <div>
                                <div class="text-slate-400 text-sm font-normal">Postal Code</div>
                                <div class="text-slate-800 text-sm font-normal">82458-2430</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </MainContent>
    </div>
</template>

<script setup>
import { CameraIcon } from "@heroicons/vue/20/solid"
useSeoMeta({
    title: 'Profile',
});

</script>

<style scoped></style>