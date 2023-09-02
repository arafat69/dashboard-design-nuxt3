<template>
    <div>
        <SideBar />
        <div class="md:ms-16 lg:ms-72">
            <slot />
        </div>
    </div>
</template>
<style>
.select2.select2-container {
    width: 100% !important;
    outline: none !important;

}

.select2-container--default .select2-selection--single {
    border: 1px solid #E2E8F0 !important;
    border-radius: 12px !important;
}

.select2-container .select2-selection--single {
    height: 48px !important;
}

.select2-container--default .select2-selection--single .select2-selection__rendered {
    color: rgb(30 41 59 / 1);
    line-height: 48px !important;
}

.select2-container--open .select2-dropdown--below {
    border-top: 1px solid #aaa !important;
    border-top-left-radius: 4px !important;
    border-top-right-radius: 4px !important;
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
    height: 48px !important;
    top: 0 !important;
    right: 4px !important;
}
.select2-container--default .select2-selection--single .select2-selection__placeholder {
    color: #cbd5e1 !important;
    font-size: 14px;
}
</style>