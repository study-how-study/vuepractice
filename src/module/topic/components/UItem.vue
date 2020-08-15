<template>
    <div class="item">
        <div class="title">
            {{item.title}}
        </div>
        <div class="content">
            {{item.content}}
        </div>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>