import { useState } from "react";
import server from "./server";
import {address as walletAddress} from "./Wallet";
import * as secp256k1 from "ethereum-cryptography/secp256k1";
import { toHex }  from "ethereum-cryptography/utils";


function Transfer({ address, setBalance }) {
  console.log("wallet address ", walletAddress)
  // const [sendAmount, setSendAmount] = useState("");
  // const [recipient, setRecipient] = useState("");

  // const setValue = (setter) => (evt) => setter(evt.target.value);

  // async function transfer(evt) {
  //   evt.preventDefault();

  //   try {
  //     const {
  //       data: { balance },
  //     } = await server.post(`send`, {
  //       sender: address,
  //       amount: parseInt(sendAmount),
  //       recipient,
  //     });
  //     setBalance(balance);
  //   } catch (ex) {
  //     alert(ex.response.data.message);
  //   }
  // }


    const [sendAmount, setSendAmount] = useState("");
    const [recipient, setRecipient] = useState("");
  
    const setValue = (setter) => (evt) => setter(evt.target.value);
  
    async function transfer(evt) {
      evt.preventDefault();
  
      const promptValue = prompt("Por favor, ingresa un número:");
      //if(toHex(secp256k1.getPublicKey(promptValue)) === toHex(address)){
      if (promptValue === "2") {
        try {
          const {
            data: { balance },
          } = await server.post(`send`, {
            sender: address,
            amount: parseInt(sendAmount),
            recipient,
          });
          setBalance(balance);
          setSendAmount("");
          setRecipient("");
        } catch (ex) {
          alert(ex.response.data.message);
        }
      } else {
        alert("Error: El valor del campo de entrada no es igual a 2.");
        setSendAmount("");
        setRecipient("");
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
      {/* //! codigo modificado */}
      <input type="submit" className="button" value="Transfer" onClick={transfer} />
      
      {/* // ! codigo original
      <input type="submit" className="button" value="Transfer" /> */}
    </form>
  );
}

export default Transfer;
