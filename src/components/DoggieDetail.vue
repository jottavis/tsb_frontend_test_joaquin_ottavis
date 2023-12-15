<script setup>
import Trait from './Trait.vue';

const props = defineProps(['doggie'])

</script>

<template>
    <section class="text-white">
      <div class=" container lg:max-w-5xl mx-auto md:grid md:grid-cols-2  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <img
                :src=" `${doggie.image_url}`"
                alt="doggie"
                class=" "
            />
            <div class="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 class="text-4xl font-bold text-white mb-4">{{ doggie.name }}</h2>
                <small>Owner :</small>
                <label>{{ doggie.owner }}</label>
                <br>
                <small>Description :</small>
                <label>{{ doggie.description }}</label>
                <br><small class="mb-2">Traits :</small>
                <div  class="xl:h-[6.5rem] lg:h-48 md:h-12 h-32 overflow-y-scroll">
                    <Trait v-for="trait in doggie.attributes" :trait="trait"/>
                </div>
            </div>
      </div>
    </section>
</template>