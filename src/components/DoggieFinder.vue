<script setup>
</script>

<template>
     <section>
      <div class="container lg:max-w-5xl mt-24 mx-auto lg:px-16 py-4 lg:py-16 grid grid-cols-1 sm:grid-cols-12">
        <div class=" container col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start">
              <h1 class="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                          Find ur Doggie !
                    <br>
              </h1>
              <div class="" >
                  <div class="block lg:inline-block text-base  mb-6 lg:text-xl">
                        <input 
                            type="text" 
                            name="tokenid" 
                            id="tokenid" 
                            placeholder="TokenID"
                            class='rounded-full lg:mr-6 px-5 py-2'
                        />
                  </div>
                  <div class="text-white block  lg:inline-block mr-4">
                        <button class=" bg-[#83a728] hover:bg-[#4a6313] rounded-full px-5 py-2">
                            Find Doggie !
                        </button>
                  </div>
                  <div class="text-white block w-full lg:w-9/12 lg:inline-block " >
                        <button class=" bg-[#83a728] lg:w-full hover:bg-[#4a6313]  rounded-full px-5 py-2">
                            Get Random Doggie !
                        </button>
                  </div>
            </div>
        </div>
        <div class="col-span-4 place-self-center mt-4 lg:mt-0">
              <div class=" w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] relative">
                    <img
                      src="/doggie.avif"
                      alt="doggie"
                      class="absolute rounded-full"
                    />
              </div>
        </div>
      </div>
    </section>
</template>