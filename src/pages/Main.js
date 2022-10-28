import { useContext } from 'react';

import Web3Context from '../store/web3-context';
import web3 from '../connection/web3';

const Main = () => {  
  const web3Ctx = useContext(Web3Context);
  
  const connectWalletHandler = async() => {
    try {
      // Request account access
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch(error) {
      console.error(error);
    }

    // Load accounts
    web3Ctx.loadAccount(web3);
  };
  
  return (
    <>
      <div className='p-2'>
        {web3Ctx.account && 
          <>
            <a 
              className="btn btn-info text-white" 
              target="blank"
              rel="noopener noreferrer"
            >
              {web3Ctx.account.substr(0, 7)}...{web3Ctx.account.substr(web3Ctx.account.length-5)}
            </a>
            <br/>
            <br/>
            <p> Chain ID : {web3Ctx.networkId} </p>
            <p> Network : {web3Ctx.networkName} </p>
          </>
        }
        {!web3Ctx.account && 
          <button 
            type="button" 
            className="btn btn-info text-white" 
            onClick={connectWalletHandler} 
          > 
            Connect your wallet
          </button>}
      </div>
    </>
  ); 
};

export default Main;