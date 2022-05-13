// Cited and Referred from this tutorial:https://learn.figment.io/tutorials/build-an-nft-marketplace-using-hardhat
// Referred from Hardhat Official Documentation

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();

task("deploy", "Deploy the smart contracts", async(taskArgs, hre) => {

  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();

  await hre.run("verify:verify", {
    address: marketplace.address,
    constructorArguments: []
  })

})
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [
        process.env.PRIVATE_KEY
      ]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_KEY
  }
};