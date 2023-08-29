<template>
    <div>
        <Header>
            <Breadcumb item="Students" item-link="/student" active="Details" />
            <NuxtLink to="#" class="btn-primary">
                <img src="/icons/new_admission.svg" alt="">
                New Admission
            </NuxtLink>
        </Header>

        <MainContent class="pt-0">

            
            <h2>Lorem, ipsum dolor.</h2>

        </MainContent>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Students',
});

import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/vue/24/solid';

const students = [
    {
        id: 1,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 2,
        name: 'Mohammad Mahfuz test inoe',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 3,
        name: 'Arafat ali 21332',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 4,
        name: 'Sohan vai 1324235345',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 5,
        name: 'Shakil ali shake 23',
        gander: 'Male',
        idCode: '#056976',
        phone: '+125179185884574867978',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 6,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 7,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 8,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 9,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 10,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 15,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 16,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
    {
        id: 17,
        name: 'Mohammad Mahfuz',
        gander: 'Male',
        idCode: '#056976',
        phone: '+12517918588',
        email: 'm.mahfuz@gmail.com',
        textCode: 'VAxzaRmYbIPcUY8L'
    },
];

</script>

<style scoped></style>