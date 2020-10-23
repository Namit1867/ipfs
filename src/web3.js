// //overrides metamask v0.2 for our 1.0 version.  
//1.0 lets us use async and await instead of promises

const Web3 = require('web3')
//overrides metamask v0.2 for our v 1.0
var providerURL = "https://rinkeby.infura.io/v3/e72daeeafa5f4e8cae0110b45fed3645"
const web3 = new Web3(new Web3.providers.HttpProvider(providerURL));

export default web3;