const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const privateKey = secp256k1.utils.randomPrivateKey();
console.log("Private key: ", toHex(privateKey));


const publicKey = secp256k1.getPublicKey(privateKey);
console.log("Public key: ", toHex(publicKey));

//! Wallet 1
// Private key:  116a7167b2239d6a0347815005cbf24bbfc426c9dbadf9c66334c8f5cf3e9d27
// Public key:  cd20e589dec0f9470173f2d263b3beac579874f9b5a3afe29a14146

//! Wallet 2
// Private key:  e73d1f45421257520c28b0c8671d401a8cc47ec4b1487759e232c17f8c7fc74a
// Public key:  038d0a4edb6b66470f45cdb3579196c7258b4f65ad59c99aab53ac78a5660df1f8

//! Wallet 3
// Private key:  c8ab78a193ab6c392249187a918032ba04d9b89318c0ef6ef882208e211c1b00
// Public key:  0366f6cb0c71572518fbd0ef0de039af85643c7728a872657248831aacfb329858
