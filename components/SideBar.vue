<template>
    <div
        class="h-screen bg-slate-100 w-72 px-6 md:w-16 md:px-1 lg:w-72 lg:px-6 pt-6 pb-3 transition duration-700 ease-in-out absolute md:relative flex justify-between flex-col">
        <div class="sidebar">
            <div class="gap-2 items-end md:hidden lg:flex flex">
                <img src="/images/logo.svg" class="h-" alt="brand logo">
                <span class="text-xs bg-white ring-2 rounded-md py-0.5 px-1 ring-slate-200 ">Shop</span>
            </div>
            <div>
                <NuxtLink :to="menu.page_url" v-for="menu in menuList" :key="menu.name"
                    class="p-3 transition duration-200 rounded-lg justify-start items-start gap-2 flex hover:bg-slate-200 group">
                    <div class="w-6 h-6">
                        <img :src="menu.icon" alt="">
                    </div>
                    <div class="text-slate-800 md:group-hover:block md:group-hover:absolute md:group-hover:left-16 lg:group-hover:relative lg:group-hover:left-0 relative text-base font-normal md:hidden lg:block transition duration-200">
                        {{ menu.name }}</div>
                </NuxtLink>
            </div>
        </div>

        <div>
            <div class="group border border-transparent rounded-2xl p-3 hover:border-slate-200 hover:bg-slate-100">
                <div class="flex justify-between items-center gap-2">
                    <img src="/images/avator.png" alt="" class="w-12 h-12 rounded-full">
                    <a href="" class="hidden group-hover:block no-underline">
                        <img src="/icons/logout.svg" alt="">
                    </a>
                </div>
                <span class="block text-sm font-bold">Luna Maria</span>
                <span class="text-xs text-slate-500">example@mail.com</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Enrollment',
                    page_url: '/'
                },
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Enrollment',
                    page_url: '/enrollment'
                },
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Enrollment',
                    page_url: '/enrollment'
                },
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Enrollment',
                    page_url: '/enrollment'
                },
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Enrollment',
                    page_url: '/enrollment'
                },
                {
                    icon: '/icons/enrollment.svg',
                    name: 'Enrollment',
                    page_url: '/enrollment'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>