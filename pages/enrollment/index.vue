<template>
    <div>
        <Header>
            <Breadcumb active="Enrollment" />
            <NuxtLink to="#" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>

        <MainContent>

            <div class="flex flex-wrap gap-6">
                <div class="relative flex-grow h-14">
                    <input type="text" placeholder="Search Student"
                        class="w-full pr-12 p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring outline-none text-slate-400 text-sm font-normal">
                    <MagnifyingGlassIcon class="w-6 h-6 absolute top-2/4 right-4 transform -translate-y-2/4" />
                </div>

                <div
                    class="p-4 bg-white h-14 rounded-xl border border-slate-200 justify-center items-center gap-1 inline-flex text-slate-800 text-sm font-normal">
                    Filter
                    <FunnelIcon class="w-6 h-6 text-slate-600" />
                </div>
                <FilterDropdown button-name="Filter" button-class="h-14 border border-slate-200" show-arrow-color="text-slate-600">
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        Excel
                    </a>
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        PDF
                    </a>
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        CVC
                    </a>
                </FilterDropdown>
                <select name=""
                    class="p-4 lg:max-w-48 bg-white rounded-xl border border-slate-200 outline-none focus:ring lg:max-w-[220px] w-full flex-grow text-sm h-14">
                    <option value="">Sort by</option>
                    <option value="">Pending</option>
                    <option value="">Confirmed</option>
                    <option value="">Cancelled</option>
                </select>
                <div class="flex-grow">
                    <input type="date"
                        class="w-full h-14 p-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring outline-none text-slate-400 text-sm font-normal">
                </div>
                <Dropdown button-name="Export to" button-class="bg-blue-500 text-white h-14" show-arrow-color="text-white">
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        Excel
                    </a>
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        PDF
                    </a>
                    <a href="#" class="hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm">
                        CVC
                    </a>
                </Dropdown>
            </div>

            <div class="mt-4">

                <table class="table-auto w-full">
                    <thead class="bg-slate-100 text-slate-800">
                        <tr>
                            <td class="p-4 rounded-s-lg">Date</td>
                            <td class="p-4">Student</td>
                            <td class="p-4">Course</td>
                            <td class="p-4 rounded-e-lg">Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-4 ext-slate-800 text-sm font-normal border-b">
                                <span
                                    class="w-6 h-6 bg-red-500 rounded-lg flex justify-center items-center text-white">5</span>
                            </td>
                            <td class="p-4 ext-slate-800 text-sm font-normal border-b">
                                46wsg
                            </td>
                            <td class="p-4 ext-slate-800 text-sm font-normal border-b">
                                fdshd
                            </td>
                            <td class="p-4 ext-slate-800 text-sm font-normal border-b">
                                tyu7ty
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </MainContent>
    </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';
import { FunnelIcon } from '@heroicons/vue/24/outline';

</script>

<style lang="scss" scoped></style>