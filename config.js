import { config } from "dotenv";
config();

export default  {
  SMART_CONTRACT_ADRESS : process.env.SMART_CONTRACT_ADRESS,
  INFURA_APIKEY: process.env.INFURA_APIKEY,
};
