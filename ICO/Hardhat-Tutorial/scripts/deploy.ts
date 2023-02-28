import { ethers } from "hardhat";
import *as dotenv from 'dotenv';
dotenv.config();
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS} = require("../constants");

async function main() {
  const GangCoinNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  const GangCoinTokenContract = await ethers.getContractFactory("GangCoinToken");

  const deployedGangCoinTokenContract = await GangCoinTokenContract.deploy(GangCoinNFTContract);

  await deployedGangCoinTokenContract.deployed();

  console.log ("GangCoin Token Contract Address:",deployedGangCoinTokenContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
