import React from 'react';

const Web3Context = React.createContext({
  account: null,
  networkId: null,
  networkName: null,
  loadAccount: () => {},
  loadNetworkId: () => {},
  loadNetworkName: () => {}
});

export default Web3Context;