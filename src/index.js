import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Web3Provider from './store/Web3Provider';

import { Web3ReactProvider } from '@web3-react/core';

import App from './App';

import { getLibrary } from './utils/helper' ;

ReactDOM.render(
  <Web3Provider>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider> ,
  </Web3Provider>,
  document.getElementById('root')
);