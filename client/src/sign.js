import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { toHex, utf8ToBytes} from "ethereum-cryptography/utils";
import  { sha256 } from "ethereum-cryptography/sha256";



export default function Sign(sendAmount, recipient, publicKey){
    const randomNumber = Math.random() * 256;
    console.log(randomNumber)

    const messageHash = toHex(sha256(utf8ToBytes( sendAmount + recipient + randomNumber)))
    console.log(messageHash)

    // console.log("this is sendAmount sign.js", sendAmount);
    // console.log("This is recipient sign.js", recipient);
    // console.log("This is messageHash", messageHash);
    // console.log("This is messageHash type: ", typeof(messageHash));

    let privateKey
    if (publicKey === "02cbf53f5c09320e589dec0f9470173f2d263b3beac579874f9b5a3afe29a14146") {
         privateKey = "116a7167b2239d6a0347815005cbf24bbfc426c9dbadf9c66334c8f5cf3e9d27"
         console.log("Wallet 1 connected")
    }else if(publicKey === "038d0a4edb6b66470f45cdb3579196c7258b4f65ad59c99aab53ac78a5660df1f8"){
         privateKey = "e73d1f45421257520c28b0c8671d401a8cc47ec4b1487759e232c17f8c7fc74a"
         console.log("Wallet 2 connected")
    }  else if (publicKey === "0366f6cb0c71572518fbd0ef0de039af85643c7728a872657248831aacfb329858"){
         privateKey = "c8ab78a193ab6c392249187a918032ba04d9b89318c0ef6ef882208e211c1b00"
         console.log("Wallet 3 connected")
    } else{
        alert("Yo don't have access to this private key")
    }

    const signature = secp256k1.sign(messageHash, privateKey);
    console.log("This is signature sign", signature);
    // console.log("This type", typeof(signature));
    const address = toHex(secp256k1.getPublicKey(privateKey));
    // console.log("This is address(public) sign", address);
    // console.log("This is address(public) type", typeof(address));

    const isSigned = secp256k1.verify(signature, messageHash, address);
    // if (isSigned){
    //     console.log("This is signed")
    // } else{
    //     console.log("This is not signed")
    // }

    return  {signature, messageHash}
}
// Sign("10", "0x6", "038d0a4edb6b66470f45cdb3579196c7258b4f65ad59c99aab53ac78a5660df1f8");

