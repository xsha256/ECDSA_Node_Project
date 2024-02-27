// import { secp256k1 } from "ethereum-cryptography/secp256k1";
// import { toHex } from "ethereum-cryptography/utils";
// import { useState } from "react";
// import server from "./server";


// function Transfer({ address, setBalance }) {
//   console.log("wallet address ", address)
//   console.log("Private key:  e73d1f45421257520c28b0c8671d401a8cc47ec4b1487759e232c17f8c7fc74a")
//   console.log("Public key:  038d0a4edb6b66470f45cdb3579196c7258b4f65ad59c99aab53ac78a5660df1f8")
//   //! código original
//   // const [sendAmount, setSendAmount] = useState("");
//   // const [recipient, setRecipient] = useState("");

//   // const setValue = (setter) => (evt) => setter(evt.target.value);

//   // async function transfer(evt) {
//   //   evt.preventDefault();

//   //   try {
//   //     const {
//   //       data: { balance },
//   //     } = await server.post(`send`, {
//   //       sender: address,
//   //       amount: parseInt(sendAmount),
//   //       recipient,
//   //     });
//   //     setBalance(balance);
//   //   } catch (ex) {
//   //     alert(ex.response.data.message);
//   //   }
//   // }


//     const [sendAmount, setSendAmount] = useState("");
//     const [recipient, setRecipient] = useState("");
  
//     const setValue = (setter) => (evt) => setter(evt.target.value);
  
//     async function transfer(evt) {
//       evt.preventDefault();
  
//       const promptValue = prompt("Please enter your private key: ");
//       console.log("this is prompt value ",promptValue);
//       const publicKey = secp256k1.getPublicKey(promptValue);
//       console.log("this is public key value: ",toHex(publicKey));

//       if(toHex(publicKey) === address){
//         try {
//           const {
//             data: { balance },
//           } = await server.post(`send`, {
//             sender: address,
//             amount: parseInt(sendAmount),
//             recipient,
//           });
//           setBalance(balance);
//           alert("Confirmed")
//         } catch (ex) {
//           alert(ex.response.data.message);
//         }
//       } else {
//         alert("Is the wrong private key");
//       }
//     }
//   return (
//     <form className="container transfer" onSubmit={transfer}>
//       <h1>Send Transaction</h1>

//       <label>
//         Send Amount
//         <input
//           placeholder="1, 2, 3..."
//           value={sendAmount}
//           onChange={setValue(setSendAmount)}
//         ></input>
//       </label>

//       <label>
//         Recipient
//         <input
//           placeholder="Type an address, for example: 0x2"
//           value={recipient}
//           onChange={setValue(setRecipient)}
//         ></input>
//       </label>
//       {/* //! codigo modificado */}
//       <input type="submit" className="button" value="Transfer" onClick={transfer} />
      
//       {/* // ! codigo original
//       <input type="submit" className="button" value="Transfer" /> */}
//     </form>
//   );
// }

// export default Transfer;
