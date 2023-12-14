<script setup>
</script>

<template>
    <section class=" min-h-screen">
      <div class="container mt-24 mx-auto grid grid-cols-12">
        <div class=" container col-span-8 ">
              <h1 class="text-4xl font-extrabold">
                      <span class=" ">
                          Find ur Doggie !
                      </span>
                    <br>
              </h1>
              <div class="" >
                  <div class="mb-6">
                        <input 
                            type="text" 
                            name="tokenid" 
                            id="tokenid" 
                            placeholder="TokenID"
                            class='rounded-full  px-5 py-2'
                        />
                  </div>
                  <div class="mr-4">
                        <button class=" bg-[#83a728]  rounded-full px-5 py-2">
                            Find Doggie !
                        </button>
                  </div>
                  <div class="" >
                        <button class=" bg-[#83a728] rounded-full px-5 py-2">
                            Get Random Doggie !
                        </button>
                  </div>
            </div>
        </div>
        <div class="col-span-4 ">
              <div class=" w-[350px] h-[350px] relative">
                    <img
                      src="/doggie.avif"
                      alt=""
                      class="absolute rounded-full "
                    />
              </div>
        </div>
      </div>
    </section>
</template>