/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { ALCHEMY_KEY, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: ALCHEMY_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
