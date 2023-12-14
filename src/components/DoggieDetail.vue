<script setup>
import Trait from './Trait.vue';

</script>

<template>
    <section class="text-white">
      <div class=" container lg:max-w-5xl mx-auto md:grid md:grid-cols-2  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <img
                src="/doggie.avif"
                alt="doggie"
                class=" "
            />
            <div class="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 class="text-4xl font-bold text-white mb-4">name</h2>
                <small>Owner :</small>
                <label>name</label>
                <br>
                <small>Description :</small>
                <label>description</label>
                <br><small class="mb-2">Traits :</small>
                <Trait/>
            </div>
      </div>
    </section>
</template>