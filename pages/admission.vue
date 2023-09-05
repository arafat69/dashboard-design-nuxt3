<template>
    <div>
        <Header>
            <Breadcumb item="Students" item-link="/student" active="New Admission" />
        </Header>

        <MainContent class="pt-0 pb-0">

            <div class="grid grid-cols-1 gap-6 xl:grid-cols-3 h-full">
                <div class="xl:col-span-2 pt-4 flex flex-col gap-y-6">
                    <div class="text-slate-800 text-2xl font-semibold leading-loose">New Admission</div>
                    <div>
                        <div class="text-slate-800 text-base font-medium leading-normal">Course</div>
                        <CustomSelectBox />
                    </div>

                    <!-- Students -->
                    <div class="justify-between items-center gap-3 flex">
                        <div class="text-slate-800 text-base font-medium leading-normal">Students</div>
                        <button
                            class="pl-2 pr-3 py-1.5 rounded-[10px] border border-slate-200 justify-center items-center gap-1 flex" @click="showModal = true">
                            <PlusIcon class="w-6 h-6 text-slate-800" />
                            <span class="text-slate-800 text-sm font-semibold leading-tight">New</span>
                        </button>
                    </div>

                    <!-- Add Students -->
                    <div
                        class="p-4 bg-white rounded-xl border border-slate-200 flex-col justify-center items-center gap-4 flex">
                        <div class="w-full py-6 bg-red-50 rounded-lg text-center text-red-500 text-sm font-normal leading-tight tracking-tight">
                            No students selected
                        </div>

                        <button class="self-stretch p-2 justify-center items-center gap-3 inline-flex">
                            <LinkIcon class="w-6 h-6 text-blue-500"/>
                            <div class="text-blue-500 text-sm font-normal leading-tight tracking-tight">Add Students</div>
                        </button>
                    </div>

                </div>

                <!-- rightBar section -->
                <div class="xl:border-s h-full xl:pl-4 pt-6 xl:border-l xl:border-slate-100 flex flex-col gap-8">

                    <!-- Order Summary -->
                    <div>
                        <h3 class="text-slate-800 text-xl font-medium leading-7 mb-3">Order Summary</h3>
                        <div class="w-full p-4 bg-slate-100 rounded-xl">
                            <div class="border-b border-slate-200 flex-col gap-1 flex">
                                <div class="py-2 justify-between items-center gap-6 flex">
                                    <div class="text-slate-600 text-sm font-normal leading-tight tracking-tight">
                                        Course Fees
                                    </div>
                                    <div class="text-right text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                        € 200
                                    </div>
                                </div>
                                <div class="py-2 justify-between items-center gap-6 flex">
                                    <div class="text-slate-600 text-sm font-normal leading-tight tracking-tight">
                                        Students (Qty)
                                    </div>
                                    <div class="text-right text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                        0
                                    </div>
                                </div>
                            </div>
                            <div class="border-b border-slate-200 flex-col gap-1 flex">
                                <div class="py-2 justify-between items-center gap-6 flex">
                                    <div class="text-slate-600 text-sm font-normal leading-tight tracking-tight">
                                        Subtotal
                                    </div>
                                    <div class="text-right text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                        € 200
                                    </div>
                                </div>
                                <div class="py-2 justify-between items-center gap-6 flex">
                                    <div class="text-slate-600 text-sm font-normal leading-tight tracking-tight">
                                        VAT (5%)
                                    </div>
                                    <div class="text-right text-slate-800 text-sm font-normal leading-tight tracking-tight">
                                        € 20
                                    </div>
                                </div>
                            </div>

                            <div class="h-9 py-2 justify-between items-center gap-6 flex">
                                <div class="text-slate-600 text-sm font-semibold leading-tight">Net Total</div>
                                <div class="text-right text-slate-800 text-sm font-semibold leading-tight">€ 210</div>
                            </div>
                        </div>
                    </div>

                    <!-- Coupon -->
                    <div>
                        <div class="text-slate-800 text-base font-medium leading-normal">Coupon</div>
                        <div class="flex justify-between items-center gap-2 mt-3">
                            <div class="relative flex-grow">
                                <input
                                    class="placeholder:text-slate-400 text-sm font-normal leading-tight tracking-tight p-3 bg-slate-50 rounded-xl border border-slate-200 outline-none pl-10 w-full h-12"
                                    placeholder="Enter Coupon Code" />
                                <img src="/icons/tag.svg" class="w-6 h-6 absolute top-2/4 left-2 -translate-y-2/4">
                            </div>
                            <button
                                class="w-[84px] h-12 p-3 rounded-[10px] border border-teal-400 text-teal-400 text-base font-medium leading-normal">Apply</button>
                        </div>
                    </div>

                    <!-- Payment Method-->
                    <div>
                        <div class="text-slate-800 text-base font-medium leading-normal mb-3">Payment Method</div>
                        <div class="items-center gap-4 flex">
                            <input id="bank" name="payment" type="radio" class="sr-only peer/bank">
                            <label for="bank"
                                class="cursor-pointer peer-checked/bank:border-teal-400 peer-checked/bank:bg-teal-50 p-4 bg-white rounded-xl border border-slate-200 flex-col justify-start items-start gap-3 inline-flex grow">
                                <div class="h-[52px] flex-col justify-start items-start gap-2 flex">
                                    <div class="w-5 h-5 bg-white rounded-full border border-slate-200">
                                    </div>
                                    <div class="text-slate-800 text-sm font-semibold leading-tight">Bank Pay
                                    </div>
                                </div>
                            </label>

                            <input id="online" name="payment" type="radio" class="sr-only peer/online">
                            <label for="online"
                                class="cursor-pointer p-4 bg-white peer-checked/online:border-teal-400 peer-checked/online:bg-teal-50 rounded-xl border border-slate-200 flex-col justify-start items-start gap-3 inline-flex grow">
                                <div class="h-[52px] flex-col justify-start items-start gap-2 flex">
                                    <div class="w-5 h-5 bg-white rounded-full border border-slate-200"></div>
                                    <div class="text-slate-800 text-sm font-semibold leading-tight">Online Pay
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <!-- pay button -->
                    <button class="h-14 p-4 bg-slate-200 rounded-[10px] text-white text-base font-medium leading-normal"
                        disabled>
                        Pay Online
                    </button>
                </div>
            </div>


        </MainContent>

        <!-- <ClientOnly> -->
            <TransitionRoot as="template" :show="showModal">
                <Dialog as="div" class="relative z-10" @close="open = false">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                        enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div class="fixed inset-0 z-10 overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild as="template" enter="ease-out duration-300"
                                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                                leave-from="opacity-100 translate-y-0 sm:scale-100"
                                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <DialogPanel
                                    class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-2xl">
                                    <div class="bg-white p-4 sm:p-6 md:min-h-[720px]">
                                        <div class="">
                                            <div class="text-slate-800 text-2xl font-semibold leading-loose">
                                                Add New Student
                                            </div>
                                            <XCircleIcon
                                                class="w-8 h-8 text-slate-500 absolute top-3 right-3 cursor-pointer"
                                                @click="showModal = false" />
                                        </div>

                                        <div
                                            class="h-11 border-b border-slate-200 justify-start items-center gap-8 inline-flex w-full mb-3">
                                            <div class="py-3 border-b justify-start items-center gap-3 flex cursor-pointer"
                                                :class="personalInfo ? 'border-teal-400' : 'border-transparent'"
                                                @click="showTabMenu('personalInfo')">
                                                <div class="text-teal-400 text-sm font-normal leading-tight tracking-tight">
                                                    Personal Information</div>
                                            </div>
                                            <div class="py-3 border-b justify-start items-center gap-3 flex cursor-pointer"
                                                :class="addressInfo ? 'border-teal-400' : 'border-transparent'"
                                                @click="showTabMenu('addressInfo')">
                                                <div
                                                    class="text-slate-500 text-sm font-normal leading-tight tracking-tight">
                                                    Address Information</div>
                                            </div>
                                        </div>

                                        <div v-if="personalInfo">
                                            <Input placeholder="Fiscal Code (CF)" required label="Fiscal Code (CF)" />
                                            <div class="grid md:grid-cols-2 md:gap-4">
                                                <Input label="Name" placeholder="Type Name" required />

                                                <Input label="Surname" placeholder="Type surname" required />

                                                <div>
                                                    <Label title="Gender" required />
                                                    <Select2 v-model="form.gender" :options="gender"
                                                        placeholder="Select Gender" required />
                                                </div>

                                                <Input type="date" label="Date of Birth" required />

                                                <div>
                                                    <Label title="Province of Birth" required />
                                                    <Select2 :options="gender" placeholder="Select Province of Birth" />
                                                </div>

                                                <div>
                                                    <Label title="City of Birth" required />
                                                    <Select2 :options="gender" placeholder="Select City of Birth"
                                                        required />
                                                </div>

                                                <div>
                                                    <Label title="Citizenship" required />
                                                    <Select2 :options="gender" placeholder="Select Citizenship" />
                                                </div>


                                                <Input label="Telephone Number" placeholder="Enter Telephone Number" />

                                                <Input type="text" label="Mobile Number" placeholder="Enter Mobile Number"
                                                    required />

                                                <Input type="email" label="Email" placeholder="Enter Email" required />
                                            </div>
                                        </div>

                                        <div v-else>
                                            <div class="grid md:grid-cols-3 md:gap-4">
                                                <Input type="text" label="Residence Address"
                                                    placeholder="Enter Residence Address" required class="col-span-2" />

                                                <Input type="text" label="Civic No" placeholder="Enter Civic No" required />
                                            </div>

                                            <div class="mb-4">
                                                <Label title="Province of Residence" required />
                                                <Select2 :options="gender" placeholder="Select Province of Residence" />
                                            </div>

                                            <div class="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <Label title="City of Residence" required />
                                                    <Select2 :options="gender" placeholder="Select City of Residence"
                                                        required />
                                                </div>
                                                <Input type="text" label="Postal Code" placeholder="Enter Postal Code"
                                                    required />
                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        class="p-6 bg-white border-t border-slate-200 justify-center items-center gap-4 flex flex-wrap w-full">
                                        <button
                                            class="grow shrink basis-0 h-14 p-4 rounded-[10px] border border-teal-400 text-teal-400 text-base font-medium"
                                            @click="showModal = false">
                                            Cancel
                                        </button>
                                        <button
                                            class="grow shrink basis-0 h-14 p-4 bg-teal-400 rounded-[10px] text-white text-base font-medium">Update</button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>
        <!-- </ClientOnly> -->

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ArrowLeftIcon, XCircleIcon, PlusIcon, LinkIcon } from '@heroicons/vue/24/solid';

useSeoMeta({
    title: 'Students',
});

const showModal = ref(false)

const personalInfo = ref(true)
const addressInfo = ref(false)

const form = {
    gender: '',
}

const gender = [
    'Male',
    'Female',
    'Others'
]

const showTabMenu = (item) => {
    item == 'personalInfo' ? personalInfo.value = true : personalInfo.value = false;
    item == 'addressInfo' ? addressInfo.value = true : addressInfo.value = false;
}

const cources = [
    {
        thumbnail: '/icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: '/icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: '/icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
];

</script>

<style scoped></style>