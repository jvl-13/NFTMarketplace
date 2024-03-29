/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
  //  unused configuration commented out for now
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com"
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}