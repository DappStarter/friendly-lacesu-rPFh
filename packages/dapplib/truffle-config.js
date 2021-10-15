require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember method gloom clog tail gauge'; 
let testAccounts = [
"0x4e477e044252057303decb39e76e41d3ee60dfe88f9c730707bbd961cdc0ce76",
"0xbecd9d9bfc5f7d4254776b55fff1fcdfcddc95ec4d0710cc5a1968ee4bb9c47f",
"0x611dd2cb703d7340ba9967335fbc2b3cbb353c07e7e602745de465313f513cac",
"0xafc9bfa03c41a5846ac8b951cb521491a9c7da54d20cb06a3598a01b3348880b",
"0x35ed3a8e48b8adcf5ac892b941e2a3f0188df29abbbb6e811a512aae826f13a6",
"0x828dc5ac6584bc7e6707ae3dc9d00d2c9b2b88f6231c0ed1d56413ac694041ea",
"0x54a53abeaf212e91adb3b229f1e80434a4633ff684eb4f4268da191d9b510331",
"0xaa215bb7800915eedad4369eced9735bdfbdd606d0495e721e2877d740f838ac",
"0x3c3b68b64d97261b13d536ff8e092c9cbda705e7a9e2a64b815d04217e7e3976",
"0x9d2f8fddbf3427ec8d5c6db3f7fc5e624df1767450104f3325202d0288977b93"
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

