<template>
    <div>
        <div 
            class="list"
            v-for="item in items"
            :key='item.id'
        >
            <u-item :item='item'></u-item>
        </div>
    </div>
</template>

<script>
import UItem from './UItem'
export default {
    name:'u-list',
    props:['items'],
    components:{
        UItem
    }
}
</script>