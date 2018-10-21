/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "lemon sad chapter dolphin dawn vanish feel giraffe unaware canal crane rely";
// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
// };
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
    rinkeby: {
    provider: function() { 
      return new HDWalletProvider(mnemonic, 'https://rinkeby.etherscan.io/address/0x56e15c5f936a9839fdf14351b37588a93d97b0d6') 
    },
    network_id: '1',
    gas: 4500000,
    gasPrice: 10000000000,
 },
};


