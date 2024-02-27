import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { useState } from "react";
import server from "./server";
import Sign from "./sign"




function Transfer({ address, setBalance }) {

    const [sendAmount, setSendAmount] = useState("");
    const [recipient, setRecipient] = useState("");

    const setValue = (setter) => (evt) => setter(evt.target.value);

    
 
    async function transfer(evt) {
      evt.preventDefault();
  

      //! prompt option
      // const promptSignature = prompt("Please enter your signature: ");
      // console.log("this is promptSignature value",promptSignature);
      // console.log("this is promptSignature value",typeof(promptSignature));

      // const promptSignatureString = promptSignature.substring(promptSignature.indexOf("{") + 1, promptSignature.lastIndexOf("}"));
      // const promptSignatureStringToArray = promptSignatureString.split(",");
      // const promptSignatureToObject = {};

      // promptSignatureStringToArray.forEach(value => {
      //   const [key, stringValue] = value.trim().split(":");
      //   promptSignatureToObject[key.trim()] = BigInt(stringValue.trim().slice(0, -1))
      // });

      // console.log("created object", promptSignatureToObject);
      // console.log(typeof(promptSignatureToObject));

      // const promptMessageHash = prompt("Please enter your messageHash: ");
      // console.log("this is promptMessageHash value ",promptMessageHash);
      // console.log("This is messageHash type: ", typeof(promptMessageHash));
      // console.log("This is address value ",address);
      // console.log("This is address value type ",typeof(address));

        const { signature, messageHash } = Sign(sendAmount, recipient, address);

      const isSigned = secp256k1.verify(signature, messageHash, address);

      if(isSigned){
        try {
          const {
            data: { balance },
          } = await server.post(`send`, {
            sender: address,
            amount: parseInt(sendAmount),
            recipient,
          });
          setBalance(balance);
          alert("Confirmed")
        } catch (ex) {
          alert(ex.response.data.message);
        }
      } else {
        alert("Is the wrong private key");
       }
    }
  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>
      <input type="submit" className="button" value="Transfer" onClick={transfer} />
    </form>
  );

}

export default Transfer;
