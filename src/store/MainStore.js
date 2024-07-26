import { defineStore } from 'pinia'
import { ref } from "vue"

export const useInventoryStore = defineStore('inventory', () => {
    const inventoryData = ref([
        {
            id: 1,
            content: '/image1.png'
        },
        {
            id: 2,
            content: '/image2.png'
        },
        {
            id: 3,
            content: 'image3.png'
        },
        {
            id: 4,
            content: ''
        },
        {
            id: 5,
            content: ''
        },
        {
            id: 6,
            content: ''
        },
        {
            id: 7,
            content: ''
        },
        {
            id: 8,
            content: ''
        },
        {
            id: 9,
            content: ''
        },
        {
            id: 10,
            content: ''
        },
        {
            id: 11,
            content: ''
        },
        {
            id: 12,
            content: ''
        },
        {
            id: 13,
            content: ''
        },
        {
            id: 14,
            content: ''
        },
        {
            id: 15,
            content: ''
        },
        {
            id: 16,
            content: ''
        },
        {
            id: 17,
            content: ''
        },
        {
            id: 18,
            content: ''
        },
        {
            id: 19,
            content: ''
        },
        {
            id: 20,
            content: ''
        },
        {
            id: 21,
            content: ''
        },
        {
            id: 22,
            content: ''
        },
        {
            id: 23,
            content: ''
        },
        {
            id: 24,
            content: ''
        },
        {
            id: 25,
            content: ''
        },

    ])


    return { inventoryData }
})