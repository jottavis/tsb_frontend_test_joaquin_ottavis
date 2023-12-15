<script setup>
const props = defineProps(['trait'])
</script>

<template>
    <div  class='p-2 flex mb-2 bg-[#4a6313] rounded  flex-row justify-between items-center '>
          <label type="text" class="" id="trait">
            {{ trait.trait_type }}
          </label>
          <label type="text" class="" id="value">
            {{ trait.value }}
          </label>
      </div>    
</template>