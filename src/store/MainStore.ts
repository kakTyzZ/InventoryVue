import { defineStore } from 'pinia'
import { ref } from "vue"

interface Item {
    id: number
    content: string
  }

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
    const currentElement = ref<Item | null>(null)
    const colorState = ref("black")



    function deleteElement() {
        inventoryData.value = inventoryData.value.map((el) => {
            if (el.id === (currentElement.value as { id: number, content: string } | null)?.id) {
                console.log(currentElement.value);
                return { id: el.id, content: '' }
            } else {
                return el
            }
        });
        console.log('inventoryData', inventoryData.value);
        currentElement.value = null
    }

    function changeTheme() {
        let bodyStyles = document.body.style;
        if (colorState.value === "black") {
            bodyStyles.setProperty('--secondary-color', '#142d4c');
            bodyStyles.setProperty('--bg-color', '#ececec');
            bodyStyles.setProperty('--primary-color', '#000000');
            bodyStyles.setProperty('--text-color', '#000000');
            bodyStyles.setProperty('--skeleton-color', '#36d1c4,#a0eecc,#fff2be');
            colorState.value = 'white'
            localStorage.setItem("colorState", JSON.stringify('black'))
        }
        else if (colorState.value === "white") {
            bodyStyles.setProperty('--secondary-color', '#4D4D4D');
            bodyStyles.setProperty('--bg-color', 'rgb(33, 30, 30)');
            bodyStyles.setProperty('--primary-color', '#000000');
            bodyStyles.setProperty('--text-color', '#FFFFFF');
            bodyStyles.setProperty('--skeleton-color', '#3C3C3C, #444444, #333333');
            localStorage.setItem("colorState", JSON.stringify('white'))
            colorState.value = 'black'
        }


    }

    return { inventoryData, currentElement, deleteElement, changeTheme, colorState }
})