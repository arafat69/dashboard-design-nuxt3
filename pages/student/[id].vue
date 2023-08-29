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
                <div class="xl:col-span-2">
                    <NuxtLink to="/student" class="flex gap-1 items-center text-slate-600  py-3.5">
                        <ArrowLeftIcon class="w-5 h-5 text-slate-600" /> Back
                    </NuxtLink>

                    <div class="bg-white bg-opacity-50 rounded-xl relative h-[80px] sm:h-[130px] md:h-auto -z-0">
                        <img src="/icons/student-cover.png" class="w-full h-full -z-0">
                        <div class="text-right text-green-400 text-xs font-normal absolute top-4 right-4">
                            Profile Created:<br />
                            23 Jan, 2023
                        </div>
                    </div>
                    <div class="w-full -mt-12 justify-start items-end gap-2 flex flex-wrap pl-6">
                        <img class="w-24 h-24 rounded-full border-2 border-white z-10" src="/icons/GenderMale.png" />
                        <div class="grow flex-col gap-0.5 inline-flex">
                            <div class="justify-start items-center gap-1.5 inline-flex flex-wrap">
                                <div class="text-slate-800 text-base font-medium leading-normal">Mohammad Mahfuz</div>
                                <div class="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                                <div class="text-blue-500 text-xs font-normal leading-none">#56898</div>
                            </div>
                            <div class="text-slate-400 text-xs font-normal leading-none">m.mahfuz@gmail.com</div>
                        </div>
                        <NuxtLink to=""
                            class="px-2 py-1.5 rounded-md border border-blue-400 text-blue-400 text-xs font-normal leading-none">
                            Edit Profile
                        </NuxtLink>
                    </div>

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
                            <div class="text-slate-800 text-sm font-normal">86737 Steuber Crescent Suite 012 New Mozelle, UT 00442-8898</div>
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
                        <div class="w-6 h-6 bg-teal-500 rounded-md justify-center items-center flex text-white text-sm font-semibold">3</div>
                    </div>
                    <div class="grid pt-2 pb-6 md:grid-cols-2 xl:grid-cols-1 gap-3">
                        <div v-for="course in cources" :key="course.id">
                            <CourseCard :course="course" class="hover:border-teal-300" />
                        </div>
                    </div>
                </div>
            </div>


        </MainContent>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Students',
});

import { ArrowLeftIcon } from '@heroicons/vue/24/solid';

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