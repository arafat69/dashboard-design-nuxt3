<template>
    <div>
        <Header>
            <Breadcumb item="Students" item-link="/student" active="Details" />
            <NuxtLink to="#" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>

        <MainContent class="pt-0 pb-0">

            <div class="grid grid-cols-1 gap-6 xl:grid-cols-3 h-full">
                <div class="px-6 pt-2 pb-6 bg-slate-50 rounded-xl border border-slate-100 mt-8">
                    <div class="py-3 text-teal-400 text-xs font-medium leading-none">Personal Information</div>
                    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                </div>

                <div class="px-6 pt-2 pb-6 bg-slate-50 rounded-xl border border-slate-100 mt-4">
                    <div class="py-3 text-teal-400 text-xs font-medium leading-none">Address Information</div>
                    <div class="mb-5">
                        <div class="text-slate-400 text-sm font-normal">Address</div>
                        <div class="text-slate-800 text-sm font-normal">86737 Steuber Crescent Suite 012 New Mozelle, UT
                            00442-8898</div>
                    </div>
                    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

            <div class="xl:border-s h-full xl:pl-4 xl:pt-12">
                <div class="flex pb-4 gap-2 items-center">
                    <div class="text-slate-800 text-xl font-medium leading-7">Course Enrolled</div>
                    <div
                        class="w-6 h-6 bg-teal-500 rounded-md justify-center items-center flex text-white text-sm font-semibold">
                        3</div>
                </div>
                <div class="grid pt-2 pb-6 md:grid-cols-2 xl:grid-cols-1 gap-3">
                    <div v-for="course in cources" :key="course.id">
                        <CourseCard :course="course" class="hover:border-teal-300" />
                    </div>
                </div>
            </div>
        </MainContent>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ArrowLeftIcon, XCircleIcon } from '@heroicons/vue/24/solid';

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