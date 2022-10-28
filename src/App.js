import React, { useContext, useEffect } from 'react';

import web3 from './connection/web3';
import Main from './pages/Main';
import Web3Context from './store/web3-context';

const App = () => {
  const web3Ctx = useContext(Web3Context);
  
  useEffect(() => {
    // Check if the user has Metamask active
    if(!web3) {
      alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
      return;
    };
    
    // Function to fetch all the blockchain data
    const loadBlockchainData = async() => {
      // Request accounts acccess if needed
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });  
      } catch(error) {
        console.error(error);
      }
      
      // Load account
      const account = await web3Ctx.loadAccount(web3);

      // Load Network ID
      const networkId = await web3Ctx.loadNetworkId(web3);

      const networkName = await web3Ctx.loadNetworkName(web3);
      console.log(account, networkId, networkName);

      // Metamask Event Subscription - Account changed
      window.ethereum.on('accountsChanged', (accounts) => {
        web3Ctx.loadAccount(web3);
      });

      // Metamask Event Subscription - Network changed
      window.ethereum.on('chainChanged', (chainId) => {
        // window.location.reload();
        web3Ctx.loadNetworkId(web3);
        web3Ctx.loadNetworkName(web3);
      });
    };
    
    loadBlockchainData();
  }, []);
  
  return(
    <React.Fragment>
      <Main />
    </React.Fragment>
  );
};

export default App;