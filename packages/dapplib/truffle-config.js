require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture strategy razor miss equip heavy another army gaze'; 
let testAccounts = [
"0x625c2cf8f94cea067c665884211430ea486062cdfcdc039e246a255b8b7aab00",
"0xb89227ba87ed089b8af6990572bae7579c1abc3b60ee724d68e179ecac1ff8e2",
"0x104621f63364eb8f82026e5178a62e1725a4e0647b96cd3bafd3a4c9fca33961",
"0x50951db7782339fc02231af101f9a36aae795e7fb992e0bbed7a578e9659046a",
"0x6f1dc9ceca72df878a41759192b715337abacc4f11a198c735efdc3de9b28aef",
"0x9b9808d5ca5bc08af4f95d0581f7e9d737dc0313e7d025ea132d985abb8c4bac",
"0x54d3a7a0d0598105746475b2b3cc06226de79886657aebf6e952d9a9c61bc977",
"0xde65b0647a04fe4bbe0cf35a23d6a28ef62c73a9246c3a4e85ba6641c41e2515",
"0xed2392d90db295c388e02335d91b375f4344390cf39dcb8f7b6dd8ff1cb2c8c3",
"0x2898eadb5ee8f6de8d9029b134a5d2e8a9bf7da770644a57863294900469014e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

