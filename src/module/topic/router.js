import { TYPE_MAP } from './store' 
import Topic from './views/Topic.vue'
export const routes =[
    {
        name:TYPE_MAP.HOT,
        path:`/${TYPE_MAP.HOT}`,
        props:{
            type:TYPE_MAP.HOT
        },
        component:Topic
    },
    {
        name:TYPE_MAP.NEW,
        path:`/${TYPE_MAP.NEW}`,
        props:{
            type:TYPE_MAP.NEW
        },
        component:Topic
    },
    {
        name:TYPE_MAP.TOP,
        path:`/${TYPE_MAP.TOP}`,
        props:{
            type:TYPE_MAP.TOP
        },
        component:Topic
    },
]