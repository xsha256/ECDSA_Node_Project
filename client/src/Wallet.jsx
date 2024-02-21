import server from "./server";

let address
console.log("Address desde wallet antes de funcion:", address)
//! código
function Wallet({ address, setAddress, balance, setBalance}) {
  async function handleClick() {
    let address = prompt("Please enter your name")
    setAddress(address);
    console.log("Address desde wallet despues de prompt:", address)

    if (address) {
      try {
        const response = await server.get(`balance/${address}`);
        const { balance } = response.data;
        setBalance(balance);
      } catch (error) {
        console.error('Error al obtener el saldo:', error);
      }
    } else {
      setBalance(0);
    }
  }
  async function disconnect() {
    setAddress("connect your wallet");
    setBalance();
  }

  return (
    <div className="container wallet">
      {address}
      <h1>Your Wallet</h1>
      <label>
        Wallet Address
        <input placeholder="connect your wallet" value={address}></input>
      </label>

      <div className="balance">Balance: {balance}</div>
      <button className="button" onClick={handleClick}>Connect</button>
      <button className="button" onClick={disconnect}>Disconnect</button>
    </div>

  );

  export  {address};

}
//!código original
// function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
//   async function onChange(evt) {
//     const address = evt.target.value;
//     setAddress(address);
//     if (address) {
//       const {
//         data: { balance },
//       } = await server.get(`balance/${address}`);
//       setBalance(balance);
//     } else {
//       setBalance(0);
//     }
//   }

//   return (
//     <div className="container wallet">
//       <h1>Your Wallet</h1>
//       <label>
//         Wallet Address
//         <input placeholder="Your wallet address" value={address} onChange={onChange}></input>
//       </label>

//       <div className="balance">Balance: {balance}</div>
//     </div>
//   );
// }

export default Wallet;
