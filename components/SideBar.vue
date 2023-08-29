<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 z-[1050] absolute top-1 left-3 md:hidden" @click="sidebar = !sidebar">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
    </svg>

    <div class="h-screen bg-slate-100 w-72 px-6 md:w-16 md:px-1 lg:w-72 lg:px-6 pt-6 pb-3 transition duration-700 ease-in-out fixed top-0 flex justify-between flex-col gap-6 md:translate-x-0 overflow-y-scroll md:overflow-hidden z-10"
        :class="{ '-translate-x-[100%]': sidebar }">
        <div class="absolute right-2 top-2 md:hidden" @click="sidebar = true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clip-rule="evenodd" />
            </svg>

        </div>
        <div class="sidebar">
            <NuxtLink to="/" class="gap-2 items-end md:hidden lg:flex flex">
                <img src="/images/logo.svg" class="h-" alt="brand logo">
                <span class="text-xs bg-white ring-2 rounded-md py-0.5 px-1 ring-slate-200 ">Shop</span>
            </NuxtLink>
            <div class="flex gap-3 flex-col w-full mt-6 menuItem">
                <NuxtLink :to="menu.page_url" v-for="menu in menuList" :key="menu.name"
                    class="p-3 transition duration-200 rounded-lg justify-start items-start gap-2 flex hover:bg-slate-200 group">
                    <div class="w-6 h-6">
                        <img :src="menu.icon" alt="">
                    </div>
                    <div
                        class="text-slate-800 md:group-hover:block md:group-hover:absolute md:group-hover:left-16 lg:group-hover:relative lg:group-hover:left-0 relative text-base font-normal md:hidden lg:block transition duration-200">
                        {{ menu.name }}</div>
                </NuxtLink>
            </div>
        </div>

        <div class="flex flex-col gap-6">
            <div
                class="group border border-transparent rounded-2xl p-3 hover:border-slate-200 hover:bg-slate-100 md:border-slate-200 lg:border-transparent">
                <div class="flex justify-between items-center gap-2">
                    <img src="/images/avator.png" alt="" class="w-12 h-12 rounded-full md:hidden lg:block">
                    <a href="" class="hidden md:block lg:hidden group-hover:block no-underline">
                        <img src="/icons/logout.svg" alt="">
                    </a>
                </div>
                <span class="block text-sm font-bold md:hidden lg:block">Luna Maria</span>
                <span class="text-xs text-slate-500 md:hidden lg:block">example@mail.com</span>
            </div>
            <div class="text-xs text-slate-500 border-t border-slate-200 pt-3">
                Powered by: <span class="text-slate-800">CSN Limited</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sidebar: true,
            menuList: [
                {
                    icon: '/icons/dashboard.svg',
                    name: 'Dashboard',
                    page_url: '/'
                },
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Enrollment',
                    page_url: '/enrollment'
                },
                {
                    icon: '/icons/student.svg',
                    name: 'Students',
                    page_url: '/student'
                },
                {
                    icon: '/icons/course.svg',
                    name: 'Courses',
                    page_url: '/courses'
                },
                {
                    icon: '/icons/balance.svg',
                    name: 'Balance',
                    page_url: '/balance'
                },
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Profile',
                    page_url: '/profile'
                }
            ]
        }
    },
}
</script>

<style>
.menuItem .router-link-active, .menuItem .router-link-exact-active {
    background: #1E293B !important;
}

.menuItem .router-link-active .text-slate-800 {
    color: #fff;
}

.menuItem .router-link-active img {
    filter: brightness(0) invert(1);
}
</style>