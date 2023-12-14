<script setup>

import { ref , computed} from 'vue';
import {Web3} from "web3";
//import config from '../../config.js';
import DoggieDetail from './DoggieDetail.vue';


const doggie = ref({}) ;
const tokenID = ref('');

const showDoggieDetail = computed (()=> {
    return Object.keys(doggie).length !== 0
})

// setting provider (connection to de blockchain)
const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/0f288da681ec4b249127a9ebe6a0e30e`));

// interacting with the smart contract
const abi = [{"inputs":[{"internalType":"string","name":"baseURI","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address payable","name":"_sandOwner","type":"address"},{"internalType":"address","name":"_signAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"_pause","type":"bool"}],"name":"TogglePaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"allowedToExecuteMint","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"chain","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"checkMintAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_signatureId","type":"uint256"},{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"uint256","name":"_chainId","type":"uint256"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"checkSignature","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"contractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc1155Id","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"indexWave","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_signatureId","type":"uint256"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setAllowedExecuteMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setSandOwnerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_signAddress","type":"address"}],"name":"setSignAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_waveType","type":"uint256"},{"internalType":"uint256","name":"_waveMaxTokens","type":"uint256"},{"internalType":"uint256","name":"_waveMaxTokensToBuy","type":"uint256"},{"internalType":"uint256","name":"_waveSingleTokenPrice","type":"uint256"},{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"uint256","name":"_erc1155Id","type":"uint256"}],"name":"setupWave","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"waveMaxTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waveMaxTokensToBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waveSingleTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waveTotalMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"waveType","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

// create a new contract object, providing the ABI and address
const contract = new web3.eth.Contract(abi, '0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6');

const findDoggie = async (token) => {    
    const res = await contract.methods.tokenURI(token?token:tokenID.value).call()
    const tokenURI = await fetch(res);
    doggie.value = await tokenURI.json();
  }

  const findRandomDoggie = async () => {
    let randomTokenIndex = Math.floor(Math.random() * (9999 - 0) + 0);
    const randomTokenID = await contract.methods.tokenByIndex(randomTokenIndex).call();
    await findDoggie(randomTokenID);
    tokenID.value = randomTokenID;
    console.log(doggie.value);

  } 

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
                            type="number" 
                            name="tokenid" 
                            id="tokenid" 
                            placeholder="TokenID"
                            v-model="tokenID"
                            class='rounded-full lg:mr-6 px-5 py-2'
                        />
                  </div>
                  <div class="text-white block  lg:inline-block mr-4">
                        <button @click="findDoggie()" class=" bg-[#4f751a] hover:bg-[#4a6313] rounded-full px-5 py-2">
                            Find Doggie !
                        </button>
                  </div>
                  <div class="text-white block w-full lg:w-9/12 lg:inline-block " >
                        <button  @click="findRandomDoggie()" class=" bg-[#4f751a] lg:w-full hover:bg-[#4a6313]  rounded-full px-5 py-2">
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
      <DoggieDetail v-if="showDoggieDetail"/>
    </section>
</template>