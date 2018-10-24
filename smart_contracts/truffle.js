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
const mnemonic = "lemon sad chapter dolphin dawn vanish feel giraffe unaware canal crane rely  in india";
// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
// };
// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // for more about customizing your Truffle configuration!
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 8545,
//       network_id: "*" // Match any network   0x2041002292def703cb34a9aef6d57b0bb8e0ae41
//     }
//   },
//     rinkeby : {
//     provider: function() { 
//       return new HDWalletProvider(mnemonic, 'https://rinkeby.etherscan.io/address/0x1a1db34776c5f046fbda079874375e50af33f3bc') 
//     },
//     network_id: '1',
//     gas: 4500000,
//     gasPrice: 10000000000,
//  },
// };


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", port: 8545, network_id: "*"
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://rinkeby.etherscan.io/address/0x1a1db34776c5f046fbda079874375e50af33f3bc')
      }
      , network_id: 4,
       gas: 4500000, 
       gasPrice: 10000000000
    }
  }
};


