<template>
    <div>
        <Header>
            <div class="flex gap-1 justify-start flex-col">
                <span class="block text-sm text-slate-500">Hello,</span>
                <div class="flex items-center gap-1">
                    <span class="text-slate-900 text-2xl font-semibold">Luna Maria</span>
                    <img src="icons/hello.svg" class="w-8 h-8">
                </div>
            </div>
            <NuxtLink to="#" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>
        <!-- main content -->
        <MainContent>
            <!-- overview -->
            <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <div class="p-6 bg-pink-50 rounded-2xl">
                    <div class="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                        <img src="icons/earning.svg">
                    </div>
                    <div class="text-slate-500 text-sm font-normal tracking-widest pt-6">
                        Today’s Earning
                    </div>
                    <div class="text-slate-800 text-2xl font-bold pt-4">€765.5</div>
                </div>

                <div class="p-6 bg-blue-100 rounded-2xl">
                    <div class="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                        <img src="icons/total-students.svg">
                    </div>
                    <div class="text-slate-500 text-sm font-normal tracking-widest pt-6">
                        Total Students
                    </div>
                    <div class="text-slate-800 text-2xl font-bold pt-4">109</div>
                </div>

                <div class="p-6 bg-yellow-100 rounded-2xl">
                    <div class="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                        <img src="icons/total-courses.svg">
                    </div>
                    <div class="text-slate-500 text-sm font-normal tracking-widest pt-6">
                        Total Courses
                    </div>
                    <div class="text-slate-800 text-2xl font-bold pt-4">24</div>
                </div>

                <div class="p-6 bg-green-100 rounded-2xl">
                    <div class="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                        <img src="icons/sold-course.svg">
                    </div>
                    <div class="text-slate-500 text-sm font-normal tracking-widest pt-6">
                        Courses Sold
                    </div>
                    <div class="text-slate-800 text-2xl font-bold pt-4">2,616</div>
                </div>
            </div>
            <!-- end overview -->

            <div>
                <div class="mt-12 grid xl:grid-cols-3 gap-6">
                    <div class="xl:col-span-2">
                        <!-- overview Statistics chart -->
                        <div class="justify-between items-center gap-6 flex row-2">
                            <div class="grow shrink basis-0 text-slate-800 text-2xl font-semibold leading-loose">
                                Statistics
                            </div>
                            <select
                                class="bg-white rounded-lg border border-slate-200 text-slate-500 text-sm font-normal py-[10px] px-3 focus:ring focus:ring-teal-400 outline-none">
                                <option value="">This Year</option>
                                <option value="">This Month</option>
                            </select>
                        </div>
                        <div class="bg-white rounded-xl border border-slate-100 mt-4">
                            <client-only placeholder="Loading...">
                                <OverviewChart />
                            </client-only>
                        </div>

                        <!-- Top 10 Courses -->
                        <div class="p-4 bg-slate-50 rounded-xl mt-8">
                            <div class="text-black text-base font-medium mb-[18px]">Top 10 Courses</div>
                            <table class="table-auto w-full">
                                <thead class="bg-slate-100">
                                    <tr>
                                        <td class="p-4 rounded-s-lg">Rank</td>
                                        <td class="p-4">Course Title</td>
                                        <td class="p-4">Sold</td>
                                        <td class="p-4 rounded-e-lg">Amount</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(cource, index) in topCources">
                                        <td class="p-4 ext-slate-800 text-sm font-normal ">
                                            <span v-if="index == 0"
                                                class="w-6 h-6 bg-red-500 rounded-lg flex justify-center items-center text-white">{{
                                                    ++index }}</span>

                                            <span v-else-if="index == 1"
                                                class="w-6 h-6 bg-teal-500 rounded-lg flex justify-center items-center text-white">{{
                                                    ++index }}</span>

                                            <span v-else-if="index == 2"
                                                class="w-6 h-6 bg-blue-500 rounded-lg flex justify-center items-center text-white">{{
                                                    ++index }}</span>

                                            <span v-else
                                                class="w-6 h-6 bg-slate-500 rounded-lg flex justify-center items-center text-white">{{
                                                    ++index }}</span>
                                        </td>
                                        <td class="p-4 ext-slate-800 text-sm font-normal">
                                            {{ cource.title }}
                                        </td>
                                        <td class="p-4 ext-slate-800 text-sm font-normal">
                                            {{ cource.sold }}
                                        </td>
                                        <td class="p-4 ext-slate-800 text-sm font-normal">
                                            €{{ cource.amount }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- right-column -->
                    <div class="">
                        <div class="xl:border-l xl:border-s-slate-200 pl-4">
                            <div class="flex justify-between items-center gap-6">
                                <div class="text-slate-800 text-base font-medium">New Courses</div>
                                <NuxtLink to="#" class="text-right text-teal-500 text-xs font-normal">View All</NuxtLink>
                            </div>
                            <div class="grid pt-2 pb-6 md:grid-cols-2 xl:grid-cols-1 gap-3">
                                <div v-for="cource in newCourses"
                                    class="bg-white rounded-xl border border-slate-100 justify-start items-center gap-4 inline-flex p-2">
                                    <img :src="cource.thumbnail" class="w-[100px] h-20 rounded-lg">
                                    <div class="w-full">
                                        <div class="line-clamp-1 text-ellipsis text-slate-800 text-sm font-normal">
                                            {{ cource.title }}
                                        </div>
                                        <div class="text-slate-600 text-xs font-normal pt-[6px]">
                                            {{ cource.author }}
                                        </div>
                                        <div class="justify-between items-center gap-6 flex pt-3">
                                            <div class="items-center gap-1.5 flex">
                                                <img src="icons/clock.svg" class="w-4 h-4" />
                                                <span class="text-slate-600 text-xs font-normal">
                                                    {{ cource.time }}
                                                </span>
                                            </div>
                                            <div class="items-center gap-1.5 flex">
                                                <img src="icons/video.svg" class="w-4 h-4" />
                                                <span class="text-slate-600 text-xs font-normal">
                                                    {{ cource.video }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </MainContent>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Dashboard Shop',
    ogTitle: 'Dashboard Shop',
    description: 'This is cepron dashboard pannel',
    ogDescription: 'This is cepron dashboard pannel.',
    ogImage: './images/logo.svg',
});
const topCources = [
    {
        id: 1,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    },
    {
        id: 2,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    },
    {
        id: 3,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    },
    {
        id: 4,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    },
    {
        id: 5,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    },
    {
        id: 6,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    },
    {
        id: 7,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    },
    {
        id: 8,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    },
    {
        id: 9,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    },
    {
        id: 10,
        title: 'Advance UI UX Design Course',
        sold: '124',
        amount: '340.0'
    }
];

// new cources list
const newCourses = [
    {
        thumbnail: 'icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: 'icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: 'icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: 'icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: 'icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: 'icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: 'icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    },
    {
        thumbnail: 'icons/course-thumbnail.svg',
        title: 'Advance UI UX Design Course',
        author: 'Jhankar Mahbub',
        time: '12h 48m',
        video: '8 Video'
    }
];
</script>